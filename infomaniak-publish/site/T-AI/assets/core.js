(()=>{
const body=document.body,apiBase=(body.dataset.apiBase||"").replace(/\/$/,"");
const CLIENT_VERSION="M4.3.6";
const GET_TIMEOUT=12000,POST_TIMEOUT=90000;
function uid(){return `tai-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,9)}`}
function freshContext(){return {conversation_id:uid(),previous_providers:[],history:[]}}
function wait(ms){return new Promise(r=>setTimeout(r,ms))}
function safeJSON(s,fallback=null){try{return JSON.parse(s)}catch{return fallback}}
function sessionGet(k,fallback=null){try{return safeJSON(sessionStorage.getItem(k),fallback)}catch{return fallback}}
function sessionSet(k,v){try{sessionStorage.setItem(k,JSON.stringify(v));return true}catch{return false}}
function sessionDel(k){try{sessionStorage.removeItem(k)}catch{}}
function nowISO(){return new Date().toISOString()}
function shortHash(v){const s=String(v||"");return s?s.slice(0,10)+"…":"—"}
function formatLatency(ms){const n=Number(ms);if(!Number.isFinite(n))return "—";return n<1000?`${Math.round(n)} ms`:`${(n/1000).toFixed(n<10000?1:0)} s`}
function sensitiveHits(text){const s=String(text||"");const p=[
 ["PRIVATE_KEY",/-----BEGIN (?:RSA |EC |OPENSSH |PGP )?PRIVATE KEY-----/i],
 ["OPENAI_STYLE_KEY",/\bsk-[A-Za-z0-9_-]{20,}\b/],
 ["GOOGLE_API_KEY",/\bAIza[0-9A-Za-z_-]{30,}\b/],
 ["GITHUB_TOKEN",/\bgh[pousr]_[A-Za-z0-9]{20,}\b/i],
 ["SLACK_TOKEN",/\bxox[baprs]-[A-Za-z0-9-]{20,}\b/i],
 ["BEARER_TOKEN",/\bBearer\s+[A-Za-z0-9._~+\/-]{24,}\b/i],
 ["AWS_ACCESS_KEY",/\bAKIA[0-9A-Z]{16}\b/]
 ];return p.filter(([,re])=>re.test(s)).map(([id])=>id)}
function contextText(context,max=10000){const parts=[];for(const t of context?.history||[]){if(t.kind==="field"){parts.push(`[FIELD ${t.regime||"PLURAL"}]`);for(const v of t.voices||[])parts.push(`${v.provider||"voice"}: ${v.text||""}`)}else parts.push(`${t.role||"message"}: ${t.text||""}`)}return parts.join("\n\n").slice(-max)}
function assertPublicData(question,context=null){const corpus=[String(question||""),contextText(context,50000)].join("\n");const hits=sensitiveHits(corpus);if(hits.length){const e=new Error("PUBLIC_DATA_GUARD");e.hits=hits;throw e}return true}
async function request(path,{method="GET",body=null,lab=false,timeoutMs=null,retries=null,headers:extraHeaders=null}={}){
 const upper=String(method||"GET").toUpperCase(),isGet=upper==="GET"||upper==="HEAD";
 const attempts=retries==null?(isGet?1:0):Math.max(0,Number(retries)||0);
 const limit=timeoutMs??(isGet?GET_TIMEOUT:POST_TIMEOUT);
 let lastErr=null;
 for(let i=0;i<=attempts;i++){
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),limit),t0=performance.now();
  const headers={accept:"application/json",...(extraHeaders||{})};if(body!=null)headers["content-type"]="application/json";if(lab)headers["x-tai-lab-access"]="TAI";
  try{
   const r=await fetch(`${apiBase}${path}`,{method:upper,headers,body:body==null?undefined:JSON.stringify(body),cache:"no-store",credentials:"omit",signal:controller.signal});
   const clientLatency=Math.round(performance.now()-t0);let d;const ct=r.headers.get("content-type")||"";
   if(ct.includes("application/json")){try{d=await r.json()}catch{d={error:`HTTP_${r.status}_INVALID_JSON`}}}else{let txt="";try{txt=(await r.text()).slice(0,500)}catch{}d={error:`HTTP_${r.status}`,non_json:true,sample:txt}}
   if(d&&typeof d==="object"&&!Array.isArray(d))d.__client={latency_ms:clientLatency,attempt:i+1,version:CLIENT_VERSION};
   if(!r.ok){const e=new Error(d?.error||`HTTP_${r.status}`);e.response=d;e.status=r.status;e.retryAfter=r.headers.get("retry-after");throw e}
   return d;
  }catch(e){
   const aborted=e?.name==="AbortError";const err=aborted?Object.assign(new Error("CLIENT_TIMEOUT"),{status:0,timeout_ms:limit}):e;lastErr=err;
   const retryable=isGet&&(aborted||!e?.status||Number(e.status)>=500)&&i<attempts;
   if(!retryable)throw err;await wait(350*(i+1));
  }finally{clearTimeout(timer)}
 }
 throw lastErr||new Error("NETWORK_ERROR");
}
async function api(path,opt={}){return request(path,opt)}
let healthMemo=null;
async function health({force=false}={}){if(!force&&healthMemo&&healthMemo.expires>Date.now())return healthMemo.value;const t0=performance.now();try{const d=await request("/api/health",{timeoutMs:10000,retries:1});const v={ok:true,data:d,latency_ms:Math.round(performance.now()-t0),checked_at:nowISO()};healthMemo={expires:Date.now()+30000,value:v};return v}catch(e){const v={ok:false,error:e.message||"HEALTH_UNAVAILABLE",status:e.status||0,latency_ms:Math.round(performance.now()-t0),checked_at:nowISO()};healthMemo={expires:Date.now()+10000,value:v};return v}}
function fieldAvailable(h,surface="public"){const d=h?.data||h;if(!d)return false;const c=d.canary_extension;return Boolean(c?.available&&(surface==="lab"?c?.nephesh_lab?.field:c?.nephesh_public?.field))}
function engineLabel(h){if(!h?.ok)return "moteur inaccessible";const d=h.data||{};if(fieldAvailable(h,"public"))return `${d.canary_extension?.name||"FIELD"} · ${d.gemini_model||"multi‑IA"}`;return `${d.milestone||"M4"} · ${d.gemini_model||"Gemini"}`}
function el(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!=null)n.textContent=String(text);return n}
function appendMessage(thread,{role="assistant",text="",provider=null,model=null,provenance=null}={}){const a=el("article",`turn ${role==="user"?"user":role==="meta"?"meta":"tai"}`);const who=el("div","who",role==="user"?"vous":provider||"T^");const bubble=el("div","bubble",text);a.append(who,bubble);if(provenance){const p=el("div","prov",provenance);bubble.append(document.createElement("br"),p)}thread.append(a);thread.scrollTop=thread.scrollHeight;return a}
function appendField(thread,{regime="PLURAL",voices=[],weave=null}={}){const box=el("article","field-turn");box.append(el("div","field-label",`FIELD_TURN · ${regime} · ${voices.length} voix`));for(const v of voices){const voice=el("div","voice");voice.append(el("div","voice-head",`${v.provider||"unknown"} · ${v.model||"unknown"}${v.latency_ms!=null?` · ${formatLatency(v.latency_ms)}`:""}`));voice.append(el("div","voice-text",v.answer??v.text??`[${v.status||"NO OUTPUT"}]`));box.append(voice)}if(weave?.l05?.pairwise?.length||weave?.relations?.length)box.append(el("div","prov",`WEAVE · ${weave.method||"L0/L0.5"}`));thread.append(box);thread.scrollTop=thread.scrollHeight;return box}
function renderModels(container,models,selected,{max=4,onToggle=()=>{}}={}){container.textContent="";for(const p of models){const card=el("button",`model-card ${selected.includes(p.id)?"selected":""} ${p.available_free===false?"disabled":""}`);card.type="button";card.disabled=p.available_free===false;card.setAttribute("aria-pressed",selected.includes(p.id)?"true":"false");card.append(el("div","model-name",p.label||p.model||p.id));const meta=[p.model&&p.model!==p.label?p.model:null,p.provider_pin||p.inference_provider,p.available_free===false?`free indisponible · ${p.free_verification||p.billing_mode||"unknown"}`:p.free_verification||"free"].filter(Boolean).join(" · ");card.append(el("div","model-meta",meta));card.addEventListener("click",()=>onToggle(p.id,max));container.append(card)}}
function download(name,data){const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),800)}
function setText(id,text){const n=document.getElementById(id);if(n)n.textContent=String(text??"")}
function announce(text){const n=document.getElementById("taiAnnounce");if(n)n.textContent=String(text||"")}
window.TAI={CLIENT_VERSION,apiBase,api,request,health,fieldAvailable,engineLabel,el,appendMessage,appendField,renderModels,freshContext,contextText,download,shortHash,formatLatency,uid,sessionGet,sessionSet,sessionDel,assertPublicData,sensitiveHits,setText,announce,nowISO};
})();
