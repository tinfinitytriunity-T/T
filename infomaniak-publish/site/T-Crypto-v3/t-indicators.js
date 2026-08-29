(() => {
  'use strict';

  const MARKET_URL='https://t-crypto-bybit.com-0c9.workers.dev/market/tcrypto';
  const RIBBON_URL='https://t-crypto-bybit.com-0c9.workers.dev/market/ribbon-trade';
  const OBSERVER_URL='https://t-crypto-flight-observer.com-0c9.workers.dev/observer/current';
  const PLAN_URL='./libellules-plan.json';
  const ZONE='Europe/Zurich';
  const TF=[['h1','1H'],['h4','4H'],['d1','1D']];
  let loading=false;
  let last=null;

  const esc=v=>String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const parseTime=v=>{if(v===null||v===undefined||v==='')return null;const n=typeof v==='number'?v:Date.parse(v);return Number.isFinite(n)?n:null;};
  const fmtTime=v=>{const n=parseTime(v);return n===null?'—':new Intl.DateTimeFormat('fr-CH',{timeZone:ZONE,timeStyle:'medium'}).format(new Date(n));};
  const age=v=>{const n=parseTime(v);if(n===null)return {label:'UNKNOWN',tone:'unknown'};const d=Date.now()-n;if(d<0||d>300000)return {label:`STALE ${Math.round(Math.abs(d)/1000)}s`,tone:'bad'};if(d>120000)return {label:`RECENT ${Math.round(d/1000)}s`,tone:'warn'};return {label:`LIVE ${Math.max(0,Math.round(d/1000))}s`,tone:'good'};};
  const arr=v=>Array.isArray(v)?v:[];

  function ensureUi(){
    if(document.getElementById('t-indicators-panel'))return;
    const style=document.createElement('style');
    style.textContent=`
      .tind-panel{margin:0 0 16px;border:1px solid #3a4d67;border-radius:22px;padding:18px;background:linear-gradient(180deg,rgba(18,27,40,.97),rgba(10,15,22,.98));box-shadow:0 24px 80px rgba(0,0,0,.28)}
      .tind-head{display:flex;align-items:flex-end;justify-content:space-between;gap:14px;margin-bottom:14px}.tind-kicker{font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:#6ed7ff;font-weight:800}.tind-title{font-size:22px;font-weight:850;letter-spacing:-.03em;margin-top:3px}.tind-note{font-size:11px;color:#8895a7;max-width:560px;text-align:right}
      .tind-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.tind-card{position:relative;overflow:hidden;border:1px solid #29384b;border-radius:16px;padding:14px;background:#0b1119;min-height:154px}.tind-card:before{content:"";position:absolute;inset:0 auto 0 0;width:3px;background:#51657f}.tind-card.good:before{background:#7ee2a8}.tind-card.warn:before{background:#f4c96b}.tind-card.bad:before{background:#ff8b8b}.tind-card.violet:before{background:#ae91ff}.tind-card.cyan:before{background:#6ed7ff}
      .tind-name{font-size:10px;color:#8b99ab;text-transform:uppercase;letter-spacing:.13em;font-weight:750}.tind-value{font-size:17px;font-weight:830;line-height:1.15;margin:7px 0 9px;word-break:break-word}.tind-detail{font-size:11px;color:#9ba8b9;line-height:1.45}.tind-rows{display:grid;gap:5px;margin-top:9px}.tind-row{display:flex;justify-content:space-between;gap:8px;border-top:1px solid #1e2936;padding-top:5px;font-size:10px}.tind-row span:first-child{color:#7f8d9f}.tind-row span:last-child{text-align:right;font-weight:700;color:#dbe4ee}.tind-prov{margin-top:9px;font-size:9px;color:#647286;text-transform:uppercase;letter-spacing:.08em}
      .tind-stealth{color:#ae91ff}.tind-good{color:#7ee2a8}.tind-warn{color:#f4c96b}.tind-bad{color:#ff8b8b}.tind-muted{color:#8795a6}
      @media(max-width:1050px){.tind-grid{grid-template-columns:1fr 1fr}}@media(max-width:640px){.tind-grid{grid-template-columns:1fr}.tind-head{align-items:flex-start;flex-direction:column}.tind-note{text-align:left}.tind-panel{padding:14px}.tind-card{min-height:auto}}
    `;
    document.head.appendChild(style);
    const panel=document.createElement('section');
    panel.id='t-indicators-panel';
    panel.className='tind-panel';
    panel.innerHTML=`<div class="tind-head"><div><div class="tind-kicker">T^ · indicateurs séparés</div><div class="tind-title">INDICATEURS T^</div></div><div class="tind-note">Chaque indicateur conserve son propre régime, sa provenance et ses inconnues. Aucun score global, aucune fusion automatique.</div></div><div id="tind-grid" class="tind-grid"><div class="tind-card"><div class="tind-name">Chargement</div><div class="tind-value">Lecture du champ…</div></div></div>`;
    const now=document.getElementById('view-now');
    const assets=document.getElementById('assets');
    if(now&&assets)now.insertBefore(panel,assets); else document.querySelector('main')?.prepend(panel);
  }

  async function fetchJson(url){
    const res=await fetch(`${url}${url.includes('?')?'&':'?'}_=${Date.now()}`,{cache:'no-store'});
    if(!res.ok)throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  function fieldForAsset(a){
    if(!a)return {state:'UNRESOLVED',changes:[]};
    const changes=[];let usable=0;
    for(const [key,label] of TF){
      const c=a?.timeframes?.[key]?.ribbon?.lastClosed;const u=a?.timeframes?.[key]?.ribbon?.current;
      if(!c||!u)continue;usable++;
      if(c.order&&u.order&&c.order!==u.order)changes.push(`${label}: ${c.order}→${u.order}`);
      if(c.priceRelation&&u.priceRelation&&c.priceRelation!==u.priceRelation)changes.push(`${label}: ${c.priceRelation}→${u.priceRelation}`);
      for(const ev of arr(u.crossEvents))changes.push(`${label}: ${ev}`);
    }
    if(!usable)return {state:'UNRESOLVED',changes};
    return {state:changes.length?'NONTRIVIAL^REL_LOCAL':'TRIVIAL^REL_LOCAL',changes};
  }

  function cesures(market){
    const events=[];
    for(const a of market?.assets||[]){
      for(const [key,label] of TF){
        const c=a?.timeframes?.[key]?.ribbon?.lastClosed;const u=a?.timeframes?.[key]?.ribbon?.current;
        if(!c||!u)continue;
        const local=[];
        if(c.order!==u.order)local.push('ordre');
        if(c.priceRelation!==u.priceRelation)local.push('relation-prix');
        if(arr(u.crossEvents).length)local.push(...arr(u.crossEvents));
        if(local.length)events.push(`${a.symbol.replace('USDT','')} ${label}: ${local.join(', ')}`);
      }
    }
    return events;
  }

  function pair(a,b){
    if(!a||!b||a==='UNKNOWN'||b==='UNKNOWN')return 'UNRESOLVED';
    if(a===b&&a!=='MIXED')return 'COHERENT';
    if(a===b||a==='MIXED'||b==='MIXED')return 'PARTIAL';
    return 'DIVERGENT';
  }
  function consistency(a){
    if(!a)return 'UNRESOLVED';
    const o={};for(const [k] of TF)o[k]=a?.timeframes?.[k]?.ribbon?.lastClosed?.order||'UNKNOWN';
    const states=[pair(o.h1,o.h4),pair(o.h1,o.d1),pair(o.h4,o.d1)];
    if(states.every(x=>x==='COHERENT'))return 'FULL_SECTION';
    if(states.includes('DIVERGENT'))return 'NO_GLOBAL_SECTION';
    if(states.every(x=>x==='UNRESOLVED'))return 'UNRESOLVED';
    return 'PARTIAL_SECTION';
  }

  function janusForAsset(a){
    const field=fieldForAsset(a).state;
    const cons=consistency(a);
    const dm=field==='NONTRIVIAL^REL_LOCAL'?'MOBILE_LOCAL':field==='TRIVIAL^REL_LOCAL'?'QUIET_LOCAL':'UNRESOLVED';
    const ds=cons==='FULL_SECTION'?'GLUABLE_LOCAL':cons==='PARTIAL_SECTION'?'CONDITIONALLY_GLUABLE':cons==='NO_GLOBAL_SECTION'?'NON_GLUABLE_LOCAL':'UNRESOLVED';
    return {dm,ds};
  }

  function canonicalFlight(flight){
    if(!flight)return 'NOT_LAUNCHED';
    const raw=String(flight.status||'UNRESOLVED').toUpperCase();
    if(/ACTIVE|RUNNING|IN_PROGRESS|FLYING/.test(raw))return 'ACTIVE';
    if(/START|QUEUED|SCHEDULED|PENDING|PREPAR/.test(raw))return 'STARTING';
    if(/STOPPING|FINALIZ/.test(raw))return 'STOPPING';
    if(/COMPLETE|FINISH|STOPPED|CLOSED/.test(raw))return 'COMPLETED';
    if(/FAIL|ERROR|ABORT/.test(raw))return 'ERROR';
    return raw;
  }
  function flightState(symbol,observer,plan){
    if(!observer?.ok)return 'MODE FURTIF ;-)';
    const p=plan?.libellules?.[symbol];const f=observer?.flights?.[symbol];
    const epoch=parseTime(p?.epochStartUtc);const start=parseTime(f?.startedAt);
    if(f&&epoch!==null&&start!==null&&start>=epoch)return canonicalFlight(f);
    return p?.currentState||'NOT_LAUNCHED';
  }

  function toneForValue(v){
    const x=String(v||'').toUpperCase();
    if(x.includes('MODE FURTIF'))return 'violet';
    if(x.includes('NONTRIVIAL')||x.includes('CÉSURE^OPEN')||x.includes('PARTIAL')||x.includes('STARTING'))return 'warn';
    if(x.includes('NO_GLOBAL')||x.includes('STALE')||x.includes('ERROR'))return 'bad';
    if(x.includes('TRIVIAL')||x.includes('FULL_SECTION')||x.includes('LIVE')||x.includes('ACTIVE')||x.includes('QUIET'))return 'good';
    return 'cyan';
  }
  function row(k,v,cls=''){return `<div class="tind-row"><span>${esc(k)}</span><span class="${cls}">${esc(v)}</span></div>`;}
  function card(name,value,detail,rows,prov,tone){return `<article class="tind-card ${tone||toneForValue(value)}"><div class="tind-name">${esc(name)}</div><div class="tind-value">${esc(value)}</div><div class="tind-detail">${esc(detail)}</div>${rows?.length?`<div class="tind-rows">${rows.join('')}</div>`:''}<div class="tind-prov">${esc(prov)}</div></article>`;}

  function render(data){
    ensureUi();
    const market=data.market;const ribbon=data.ribbon;const observer=data.observer;const plan=data.plan;
    const assets=market?.assets||[];

    const fieldRows=assets.map(a=>{const f=fieldForAsset(a);return row(a.symbol.replace('USDT',''),f.state,f.state.includes('NONTRIVIAL')?'tind-warn':f.state.includes('TRIVIAL')?'tind-good':'tind-muted');});
    const fieldChanges=assets.flatMap(a=>fieldForAsset(a).changes.map(x=>`${a.symbol.replace('USDT','')} ${x}`));
    const fieldValue=fieldChanges.length?'NONTRIVIAL^REL_LOCAL':'TRIVIAL^REL_LOCAL';

    const cut=cesures(market);const cesureValue=cut.length?'CÉSURE^OPEN':'CÉSURE^QUIET_LOCAL';
    const cesureRows=cut.slice(0,4).map((x,i)=>row(`écart ${i+1}`,x,'tind-warn'));

    const consRows=assets.map(a=>{const c=consistency(a);return row(a.symbol.replace('USDT',''),c,c==='FULL_SECTION'?'tind-good':c==='NO_GLOBAL_SECTION'?'tind-bad':'tind-warn');});
    const consValue=assets.length?'SECTIONS DISTINCTES':'UNRESOLVED';

    const janusRows=assets.map(a=>{const j=janusForAsset(a);return row(a.symbol.replace('USDT',''),`dᴹ-tech*: ${j.dm} · dˢ-tech*: ${j.ds}`);});
    const janusValue='JANUS^TECH_local · PROXY';

    const fresh=age(market?.generatedAt);const source=market?.sourcePolicy?.primary||'source inconnue';
    const recalc=market?.indicators?.localRibbon?.status||'UNRESOLVED';
    const provRows=[row('Source',source),row('EMA',recalc),row('Snapshot',market?.generatedAt?`${fresh.label} · ${fmtTime(market.generatedAt)}`:'UNKNOWN',fresh.tone==='good'?'tind-good':fresh.tone==='bad'?'tind-bad':'tind-warn')];

    const btc=flightState('BTCUSDT',observer,plan),eth=flightState('ETHUSDT',observer,plan);
    const libRows=[row('BTC',btc,btc.includes('FURTIF')?'tind-stealth':btc==='ACTIVE'?'tind-good':'tind-warn'),row('ETH',eth,eth.includes('FURTIF')?'tind-stealth':eth==='ACTIVE'?'tind-good':'tind-warn')];
    const libValue=(btc.includes('FURTIF')||eth.includes('FURTIF'))?'MODE FURTIF ;-)':`${btc} · ${eth}`;

    const cards=[
      card('T^FIELD',fieldValue,fieldChanges.length?`${fieldChanges.length} transformation(s) locale(s) CURRENT ↔ CLOSED détectée(s).`:'Aucune transformation locale visible dans les invariants actuellement retenus.',fieldRows,'[LOCAL] F_t ~ F_(t-Δt) · CURRENT ↔ CLOSED',toneForValue(fieldValue)),
      card('CÉSURE^',cesureValue,cut.length?'Écarts locaux maintenus séparément ; pas de reset global.':'Pas de césure visible dans les relations actuellement exposées.',cesureRows,'[LOCAL] ordre · relation prix · crossEvents',toneForValue(cesureValue)),
      card('CONSISTENCY^TF',consValue,'1H↔4H, 1H↔1D et 4H↔1D restent distincts pour chaque actif.',consRows,'[RECALC] CLOSED ribbons · NO_GLOBAL_SCORE','cyan'),
      card('JANUS^TECH_local',janusValue,'dᴹ-tech* et dˢ-tech* sont ici des proxys locaux de mobilité et de gluing. JANUS^FIELD et l’horizon Janus asymétrique restent hors calcul.',janusRows,'[HYP/LOCAL] * proxy v3 · NON-PARITY T^','violet'),
      card('PROVENANCE^',fresh.label,'La fraîcheur, la source primaire et le statut du recalcul restent séparés.',provRows,'[SOURCE] Bybit V5 · [RECALC] EMA 7/14/28',fresh.tone==='good'?'good':fresh.tone==='bad'?'bad':'warn'),
      card('LIBELLULE^',libValue,'Résumé de présence des deux Libellules v3 ; la télémétrie détaillée reste dans la vue Libellules^.',libRows,'[READ_ONLY] Flight Observer · génération v3',toneForValue(libValue))
    ];
    document.getElementById('tind-grid').innerHTML=cards.join('');
    last=Date.now();
  }

  async function load(){
    if(loading)return;loading=true;
    ensureUi();
    try{
      const [market,ribbon,observer,plan]=await Promise.all([
        fetchJson(MARKET_URL).catch(()=>null),
        fetchJson(RIBBON_URL).catch(()=>null),
        fetchJson(OBSERVER_URL).catch(()=>null),
        fetchJson(PLAN_URL).catch(()=>null)
      ]);
      render({market,ribbon,observer,plan});
    }catch(e){
      const grid=document.getElementById('tind-grid');
      if(grid)grid.innerHTML=card('INDICATEURS T^','MODE FURTIF ;-)','Les surfaces nécessaires à cette coupe sont momentanément inaccessibles.',[],'[UNKNOWN] aucune donnée inventée','violet');
    }finally{loading=false;}
  }

  ensureUi();
  load();
  setInterval(load,30000);
})();
