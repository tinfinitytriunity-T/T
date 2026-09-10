import { Client } from 'basic-ftp';
import {
  createHash, createPrivateKey, randomBytes, sign, constants as cryptoConstants,
} from 'node:crypto';
import {
  readFile, writeFile, rename, copyFile, chmod, lstat, realpath, mkdir, rm,
} from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';

const MCP_ROOT = '/srv/customer/mcp-infomaniak';
const PRIVATE_DIR = '/srv/customer/.direct-private';
const KEY_FILE = join(PRIVATE_DIR, 'DIRECT_COMMON_1.pem');
const ACCOUNT = 'direct-main';
const MTHA_HOSTING_ID = 473211;
const MTHA_BRIDGE = 'https://www.mtha.ch/Margot23/fs-bridge.php';
const BOOT_BASE = 'https://raw.githubusercontent.com/tinfinitytriunity-T/T/main/DIRECT-BOOTSTRAP-20260910';
const API_BASE = 'https://api.infomaniak.com';
const EMPTY_SHA = createHash('sha256').update(Buffer.alloc(0)).digest('hex');
const OPS = ['ping','status','list','stat','read','mkdir','write'];
const DENY = ['private','_private','secrets','_secrets','vault','_vault','keys','_keys'];
const EXPECTED = Object.freeze({
  'direct-entry.php': '80c6ebf86f1ff0f81c72e813fcde7ddb71747e49',
  'direct-policy-core.php': 'f2ab92129e52917b06e2371dbdf3b598887fad9e',
  'direct-policy-dispatch.php': '92a0154f325d38d85a11a075b154bfead8b8efca',
  'direct-policy-exec.php': 'ff18fdd4ba76d46182513ae18319d13a3a00b531',
  'fs-bridge.php': 'de17ea3ed57de15cdf639bb3d5dc782d601aad87',
});
const SITES = Object.freeze({
  t_direct: {endpoint:'https://www.t-1-t.com/_bridge/fs-bridge.php', audience:'T_DIRECT', scope:'document-root', canon:'T_DIRECT1'},
  nephesh: {endpoint:'https://www.nephesh.ch/T-LAB/_bridge/fs-bridge.php', audience:'NEPHESH_WEB', scope:'/web/', canon:'TBRIDGE1'},
  mtha: {endpoint:MTHA_BRIDGE, audience:'MTHA_DIRECT', scope:'/Margot23/', canon:'TBRIDGE1'},
});

const token = String(process.env.INFOMANIAK_API_TOKEN || '').trim();
if (!token) throw new Error('INFOMANIAK_API_TOKEN_MISSING');

function out(s) { process.stdout.write(String(s) + '\n'); }
function gitBlobSha(bytes) {
  return createHash('sha1').update(Buffer.from(`blob ${bytes.length}\0`)).update(bytes).digest('hex');
}
function sha256(bytes) { return createHash('sha256').update(bytes).digest('hex'); }
function b64u(bytes) { return Buffer.from(bytes).toString('base64url'); }
function jsonObject(v, code='INVALID_JSON') {
  if (!v || typeof v !== 'object' || Array.isArray(v)) throw new Error(code);
  return v;
}
function unwrap(v) {
  if (v && typeof v === 'object' && v.result === 'success' && Object.hasOwn(v,'data')) return v.data;
  return v;
}
async function api(method, path, body) {
  const r = await fetch(API_BASE + path, {
    method,
    headers: {Authorization:`Bearer ${token}`, Accept:'application/json', ...(body===undefined?{}:{'Content-Type':'application/json'})},
    body: body===undefined ? undefined : JSON.stringify(body),
    redirect:'error', signal:AbortSignal.timeout(25000),
  });
  const text = await r.text();
  let data = null;
  try { data = text ? JSON.parse(text) : null; } catch { /* never echo body */ }
  if (!r.ok || data?.result === 'error') throw new Error(`INFOMANIAK_API_${method}_${r.status}`);
  return unwrap(data);
}
async function jsonFetch(url, options={}) {
  const r = await fetch(url, {...options, redirect:'error', cache:'no-store', signal:AbortSignal.timeout(25000)});
  const text = await r.text();
  let data;
  try { data = JSON.parse(text); } catch { throw new Error(`NON_JSON_${r.status}`); }
  return {r,data};
}
function findFtpHost(value) {
  const seen = new Set();
  function walk(v) {
    if (typeof v === 'string' && /^[a-z0-9.-]+\.ftp\.infomaniak\.com$/i.test(v)) return v;
    if (!v || typeof v !== 'object' || seen.has(v)) return '';
    seen.add(v);
    for (const x of Object.values(v)) { const h=walk(x); if(h) return h; }
    return '';
  }
  return walk(value);
}
async function verifyPrivate() {
  const ds=await lstat(PRIVATE_DIR), ks=await lstat(KEY_FILE);
  if (!ds.isDirectory() || (ds.mode & 0o077)!==0 || ds.uid!==process.getuid()) throw new Error('DIRECT_PRIVATE_DIR_PERMISSIONS');
  if (!ks.isFile() || ks.isSymbolicLink() || ks.nlink!==1 || (ks.mode & 0o077)!==0 || ks.uid!==process.getuid()) throw new Error('DIRECT_COMMON_1_PERMISSIONS');
  if (await realpath(PRIVATE_DIR)!==PRIVATE_DIR || await realpath(KEY_FILE)!==KEY_FILE) throw new Error('DIRECT_COMMON_1_REALPATH');
  const key=createPrivateKey(await readFile(KEY_FILE));
  if (key.asymmetricKeyType!=='rsa' || (key.asymmetricKeyDetails?.modulusLength||0)<3072) throw new Error('DIRECT_COMMON_1_RSA_POLICY');
  out('DIRECT_COMMON_1 PASS');
}
async function downloadBundle(work) {
  for (const [name, expected] of Object.entries(EXPECTED)) {
    const r=await fetch(`${BOOT_BASE}/${encodeURIComponent(name)}`,{redirect:'error',cache:'no-store',signal:AbortSignal.timeout(20000)});
    if(!r.ok) throw new Error(`BOOTSTRAP_DOWNLOAD_${name}_${r.status}`);
    const bytes=Buffer.from(await r.arrayBuffer());
    if(gitBlobSha(bytes)!==expected) throw new Error(`BOOTSTRAP_HASH_${name}`);
    await writeFile(join(work,name),bytes,{mode:0o600});
  }
  out('MTHA_BOOTSTRAP_HASHES PASS');
}
async function legacyMthaHealth() {
  const {r,data}=await jsonFetch(`${MTHA_BRIDGE}?health=1&dc1=${Date.now()}`);
  if(!r.ok || data?.ok!==true || data?.rail!=='MTHA_DIRECT' || data?.scope!=='/Margot23/' || data?.install_mode!=='flat_margot23') throw new Error('MTHA_LEGACY_HEALTH');
  out('MTHA_LEGACY_HEALTH PASS');
}
async function directPing(site) {
  const s=SITES[site], now=Math.floor(Date.now()/1000), request_id=randomBytes(16).toString('hex');
  const intent={profile:'DIRECT_POLICY_1',kid:'DIRECT_COMMON_1',audience:s.audience,scope:s.scope,actor:ACCOUNT,method:'GET',op:'ping',path:'',size:0,sha256:EMPTY_SHA,expected:'',request_id,expires:now+300,lookup:''};
  const digest=sha256(Buffer.from(JSON.stringify(Object.values(intent))));
  const payload={...intent,digest,ts:now,nonce:randomBytes(24).toString('base64url')};
  const q=b64u(Buffer.from(JSON.stringify(payload)));
  const key=createPrivateKey(await readFile(KEY_FILE));
  const sig=b64u(sign('RSA-SHA256',Buffer.from(`${s.canon}\n${q}\n${EMPTY_SHA}`),{key,padding:cryptoConstants.RSA_PKCS1_PADDING}));
  const {r,data}=await jsonFetch(s.endpoint,{method:'GET',headers:{'X-Direct-Envelope':q,'X-Direct-Signature':sig}});
  if(!r.ok || data?.ok!==true || data?.audience!==s.audience || data?.scope!==s.scope || data?.request_id!==request_id || data?.digest!==digest) throw new Error(`DIRECT_PING_${site}`);
  out(`DIRECT_PING_${site.toUpperCase()} PASS`);
}
function remotePath(dir,name){return dir==='.'?name:`${dir}/${name}`;}
async function discoverMargot(ftp) {
  const initial=['.','Margot23','web/Margot23','sites/mtha.ch/Margot23'];
  async function check(dir){
    try{const e=await ftp.list(dir);const names=new Set(e.map(x=>x.name));return names.has('mtha-direct.php')&&names.has('fs-bridge.php');}catch{return false;}
  }
  for(const d of initial) if(await check(d)) return d;
  const q=[{d:'.',depth:0}]; const seen=new Set(['.']); let scanned=0;
  while(q.length){
    const {d,depth}=q.shift(); if(depth>=3) continue;
    let entries; try{entries=await ftp.list(d);}catch{continue;}
    for(const e of entries){
      if(!e.isDirectory || e.name.startsWith('.') || e.name==='_private') continue;
      const child=d==='.'?e.name:`${d}/${e.name}`;
      if(seen.has(child)) continue; seen.add(child); scanned++;
      if(scanned>500) throw new Error('MTHA_FTP_TREE_TOO_LARGE');
      if(await check(child)) return child;
      q.push({d:child,depth:depth+1});
    }
  }
  throw new Error('MTHA_ROOT_NOT_FOUND');
}
async function revokeTempUser(fullLogin, shortLogin) {
  let login=fullLogin;
  for(let attempt=1;attempt<=5;attempt++){
    try{
      if(!login){
        const users=await api('GET',`/1/web_hostings/${MTHA_HOSTING_ID}/users`);
        if(Array.isArray(users)) login=users.find(u=>typeof u?.login==='string'&&(u.login===shortLogin||u.login.endsWith('_'+shortLogin)))?.login||'';
      }
      if(!login) return true;
      await api('DELETE',`/1/web_hostings/${MTHA_HOSTING_ID}/users/${encodeURIComponent(login)}`);
      out('TEMP_MTHA_ACCESS_REVOKED PASS'); return true;
    }catch{await new Promise(r=>setTimeout(r,attempt*1000));}
  }
  out('TEMP_MTHA_ACCESS_REVOKED FAIL'); return false;
}
async function deployMtha(work) {
  await legacyMthaHealth();
  let hosting={}; try{hosting=await api('GET',`/1/web_hostings/${MTHA_HOSTING_ID}`)||{};}catch{/* derive from login */}
  const shortLogin='dc1'+randomBytes(6).toString('hex');
  const password=`Dc1-${randomBytes(24).toString('base64url')}-9aA`;
  let fullLogin='', created=false, cleanupOk=true, wrapperChanged=false, backup='';
  try{
    await api('POST',`/1/web_hostings/${MTHA_HOSTING_ID}/users`,{connection_type:'ssh',login:shortLogin,password,home_directory:'/'});
    created=true;
    let user=null;
    for(let i=0;i<12&&!user;i++){
      const users=await api('GET',`/1/web_hostings/${MTHA_HOSTING_ID}/users`);
      if(Array.isArray(users)) user=users.find(u=>typeof u?.login==='string'&&(u.login===shortLogin||u.login.endsWith('_'+shortLogin)));
      if(!user) await new Promise(r=>setTimeout(r,1000));
    }
    if(!user) throw new Error('TEMP_MTHA_USER_NOT_VISIBLE');
    fullLogin=user.login;
    let ftpHost=findFtpHost(hosting)||findFtpHost(user);
    if(!ftpHost){
      const suffix='_'+shortLogin;
      const prefix=fullLogin.endsWith(suffix)?fullLogin.slice(0,-suffix.length):'';
      if(!/^[a-z0-9-]+$/i.test(prefix)) throw new Error('MTHA_FTP_HOST_UNRESOLVED');
      ftpHost=`${prefix}.ftp.infomaniak.com`;
    }
    const ftp=new Client(30000); ftp.ftp.verbose=false;
    try{
      await ftp.access({host:ftpHost,port:21,user:fullLogin,password,secure:true,secureOptions:{rejectUnauthorized:true}});
      const root=await discoverMargot(ftp);
      backup=join(work,'fs-bridge.before.php');
      await ftp.downloadTo(backup,remotePath(root,'fs-bridge.php'));
      const nonce=randomBytes(6).toString('hex');
      for(const name of ['direct-policy-core.php','direct-policy-exec.php','direct-policy-dispatch.php','direct-entry.php','fs-bridge.php']){
        const tmp=remotePath(root,`.${name}.dc1-${nonce}`), dest=remotePath(root,name);
        await ftp.uploadFrom(join(work,name),tmp);
        await ftp.rename(tmp,dest);
        if(name==='fs-bridge.php') wrapperChanged=true;
      }
      for(const [name,expected] of Object.entries(EXPECTED)){
        const dl=join(work,`verify-${name}`); await ftp.downloadTo(dl,remotePath(root,name));
        if(gitBlobSha(await readFile(dl))!==expected) throw new Error(`MTHA_REMOTE_HASH_${name}`);
      }
    }catch(e){
      if(wrapperChanged&&backup){
        try{
          const root=await discoverMargot(ftp), tmp=remotePath(root,`.fs-bridge.rollback-${randomBytes(5).toString('hex')}`);
          await ftp.uploadFrom(backup,tmp); await ftp.rename(tmp,remotePath(root,'fs-bridge.php'));
        }catch{out('MTHA_WRAPPER_ROLLBACK FAIL');}
      }
      throw e;
    }finally{ftp.close();}
    await legacyMthaHealth();
    const bad=await jsonFetch(MTHA_BRIDGE,{method:'GET',headers:{'X-Direct-Envelope':'x','X-Direct-Signature':'x'}});
    if(bad.r.status!==409 || bad.data?.error!=='BAD_ENCODING') throw new Error('MTHA_DIRECT_ENTRY');
    await directPing('mtha');
    out('MTHA_DIRECT_COMMON_1 PASS');
  } finally {
    if(created) cleanupOk=await revokeTempUser(fullLogin,shortLogin);
    if(!cleanupOk) throw new Error('TEMP_MTHA_USER_CLEANUP_REQUIRED');
  }
}
async function loadPrivateJson(path){return jsonObject(JSON.parse(await readFile(path,'utf8')),'PRIVATE_JSON_INVALID');}
async function atomicJson(path,data){
  const st=await lstat(path); if(!st.isFile()||(st.mode&0o077)!==0||st.uid!==process.getuid()) throw new Error('PRIVATE_CONFIG_PERMISSIONS');
  const tmp=`${path}.tmp-${process.pid}-${randomBytes(4).toString('hex')}`;
  await writeFile(tmp,JSON.stringify(data,null,2)+'\n',{mode:0o600,flag:'wx'}); await chmod(tmp,0o600); await rename(tmp,path);
}
async function activateMcp() {
  const accountsPath=join(PRIVATE_DIR,'accounts.json'), modesPath=join(PRIVATE_DIR,'site-modes.json'), registryPath=join(PRIVATE_DIR,'key-registry.json');
  const accounts=await loadPrivateJson(accountsPath), modes=await loadPrivateJson(modesPath), registry=await loadPrivateJson(registryPath);
  if(!Object.hasOwn(accounts,ACCOUNT) || !accounts[ACCOUNT] || typeof accounts[ACCOUNT]!=='object') throw new Error('DIRECT_MAIN_ACCOUNT_MISSING');
  if(!registry.active || !registry.files || registry.files.DIRECT_COMMON_1!==KEY_FILE) throw new Error('DIRECT_KEY_REGISTRY_MISMATCH');
  for(const s of Object.keys(SITES)) if(registry.active[s]!=='DIRECT_COMMON_1') throw new Error(`DIRECT_ACTIVE_KEY_${s}`);
  const stamp=Date.now(); const ab=`${accountsPath}.before-direct3-${stamp}`, mb=`${modesPath}.before-direct3-${stamp}`;
  await copyFile(accountsPath,ab); await chmod(ab,0o600); await copyFile(modesPath,mb); await chmod(mb,0o600);
  const policy=()=>({enabled:true,ops:[...OPS],paths:[''],php_paths:[],deny:[...DENY]});
  accounts[ACCOUNT].t_direct=policy(); accounts[ACCOUNT].nephesh=policy(); accounts[ACCOUNT].mtha=policy();
  modes.t_direct='enabled'; modes.nephesh='enabled'; modes.mtha='enabled';
  let ok=false;
  try{
    await atomicJson(accountsPath,accounts); await atomicJson(modesPath,modes);
    const {loadConfig}=await import('./src/config.js'); const {createDirectRuntime}=await import('./src/direct/runtime.mjs');
    const config=loadConfig(), runtime=createDirectRuntime(config); if(!runtime) throw new Error('DIRECT_RUNTIME_DISABLED');
    try{
      const now=Math.floor(Date.now()/1000), context={authInfo:{issuer:config.publicBaseUrl.href,resource:config.mcpUrl.href,subject:ACCOUNT,scopes:['direct:access'],expires:now+300}};
      for(const site of Object.keys(SITES)){
        const r=await runtime.service.call(context,'fs_ping',{site}); if(r?.ok!==true) throw new Error(`MCP_FS_PING_${site}`); out(`MCP_FS_PING_${site.toUpperCase()} PASS`);
      }
    }finally{runtime.close();}
    ok=true;
  } finally {
    if(!ok){await copyFile(ab,accountsPath);await chmod(accountsPath,0o600);await copyFile(mb,modesPath);await chmod(modesPath,0o600);out('MCP_CONFIG_ROLLBACK PASS');}
  }
  out('MCP_DIRECT_3_DOMAINS PASS');
}

const work=join(tmpdir(),`direct3-${process.pid}-${randomBytes(4).toString('hex')}`);
await mkdir(work,{mode:0o700});
try{
  if(resolve(process.cwd())!==MCP_ROOT) throw new Error('RUN_FROM_MCP_ROOT_REQUIRED');
  await verifyPrivate();
  await downloadBundle(work);
  await directPing('t_direct');
  await directPing('nephesh');
  await deployMtha(work);
  await activateMcp();
  out('DIRECT_3_DOMAINS_COMPLETE PASS');
} catch(e) {
  out(`DIRECT_3_DOMAINS_COMPLETE FAIL ${String(e?.message||e).replace(/[^A-Za-z0-9_.:-]/g,'_').slice(0,160)}`);
  process.exitCode=1;
} finally {
  await rm(work,{recursive:true,force:true});
  try{await rm(join(MCP_ROOT,'.direct-bootstrap-run.mjs'),{force:true});}catch{}
}
