(() => {
  'use strict';

  const MARKET_URL='https://t-crypto-bybit.com-0c9.workers.dev/market/tcrypto';
  const OBSERVER_URL='https://t-crypto-flight-observer.com-0c9.workers.dev/observer/current';
  const PLAN_URL='./libellules-plan.json';
  const ZONE='Europe/Zurich';
  const TF={h1:'1H',h4:'4H',d1:'1D'};
  const tfState={BTCUSDT:'h1',ETHUSDT:'h1',ADAUSDT:'h1'};
  let loading=false;

  const esc=v=>String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const finite=v=>{const n=Number(v);return Number.isFinite(n)?n:null;};
  const parseTime=v=>{if(v===null||v===undefined||v==='')return null;const n=typeof v==='number'?v:Date.parse(v);return Number.isFinite(n)?n:null;};
  const fmtTime=v=>{const n=parseTime(v);return n===null?'—':new Intl.DateTimeFormat('fr-CH',{timeZone:ZONE,hour:'2-digit',minute:'2-digit'}).format(new Date(n));};
  const fmtDate=v=>{const n=parseTime(v);return n===null?'—':new Intl.DateTimeFormat('fr-CH',{timeZone:ZONE,dateStyle:'short',timeStyle:'short'}).format(new Date(n));};
  const fmtPrice=(v,s)=>{const n=finite(v);if(n===null)return '—';return n.toLocaleString('fr-CH',{maximumFractionDigits:s==='ADAUSDT'?5:2});};
  const arr=v=>Array.isArray(v)?v:[];

  async function fetchJson(url){const r=await fetch(`${url}${url.includes('?')?'&':'?'}_=${Date.now()}`,{cache:'no-store'});if(!r.ok)throw new Error(`HTTP ${r.status}`);return r.json();}

  function orderShort(v){return v==='BULL_ORDERED'?'BULL':v==='BEAR_ORDERED'?'BEAR':v==='MIXED'?'MIXED':'UNKNOWN';}
  function orderClass(v){return v==='BULL_ORDERED'?'bull':v==='BEAR_ORDERED'?'bear':v==='MIXED'?'mixed':'';}
  function pairState(a,b){if(!a||!b||a==='UNKNOWN'||b==='UNKNOWN')return 'UNRESOLVED';if(a===b&&a!=='MIXED')return 'COHERENT';if(a===b||a==='MIXED'||b==='MIXED')return 'PARTIAL';return 'DIVERGENT';}

  function currentDiff(tf){const c=tf?.ribbon?.lastClosed||{};const u=tf?.ribbon?.current||{};const changes=[];if(c.order&&u.order&&c.order!==u.order)changes.push('ordre');if(c.priceRelation&&u.priceRelation&&c.priceRelation!==u.priceRelation)changes.push('relation-prix');if(arr(u.crossEvents).length)changes.push(...arr(u.crossEvents));return changes;}

  function priceSvg(asset,key){
    const tf=asset?.timeframes?.[key];
    if(!tf)return '<div class="tgraph-empty">Timeframe indisponible.</div>';
    const closed=[...arr(tf.recentClosed)].reverse();
    const pts=closed.map(c=>({time:c.startTime,close:finite(c.close),kind:'CLOSED'})).filter(p=>p.close!==null);
    if(tf.current&&finite(tf.current.close)!==null)pts.push({time:tf.current.startTime,close:finite(tf.current.close),kind:'CURRENT'});
    if(pts.length<2)return '<div class="tgraph-empty">Pas assez de bougies exposées pour tracer le champ.</div>';
    const r=tf.ribbon?.current||{};
    const emas=[['ema7','tgraph-ema7'],['ema14','tgraph-ema14'],['ema28','tgraph-ema28']].map(([k,cls])=>({k,cls,v:finite(r[k])})).filter(x=>x.v!==null);
    const vals=[...pts.map(p=>p.close),...emas.map(e=>e.v)];
    let ymin=Math.min(...vals),ymax=Math.max(...vals);let span=ymax-ymin;if(!Number.isFinite(span)||span===0)span=Math.max(Math.abs(ymax)*.01,1);ymin-=span*.10;ymax+=span*.10;
    const W=640,H=250,P={l:52,r:14,t:17,b:32};const X=i=>P.l+i*(W-P.l-P.r)/(pts.length-1);const Y=v=>P.t+(ymax-v)*(H-P.t-P.b)/(ymax-ymin);
    const grid=[];for(let i=0;i<5;i++){const y=P.t+i*(H-P.t-P.b)/4;const v=ymax-i*(ymax-ymin)/4;grid.push(`<line class="tgraph-gridline" x1="${P.l}" y1="${y}" x2="${W-P.r}" y2="${y}"/><text class="tgraph-axis" x="4" y="${y+3}">${esc(fmtPrice(v,asset.symbol))}</text>`);}
    const path=pts.map((p,i)=>`${i?'L':'M'}${X(i).toFixed(1)},${Y(p.close).toFixed(1)}`).join(' ');
    const emaLines=emas.map(e=>`<line class="${e.cls}" x1="${P.l}" y1="${Y(e.v)}" x2="${W-P.r}" y2="${Y(e.v)}"/>`).join('');
    const lastClosedIndex=Math.max(0,pts.findLastIndex?pts.findLastIndex(p=>p.kind==='CLOSED'):pts.map(p=>p.kind).lastIndexOf('CLOSED'));
    const currentIndex=pts.length-1;const hasCurrent=pts[currentIndex]?.kind==='CURRENT';const dif=currentDiff(tf);const cut=hasCurrent&&dif.length?`<line class="tgraph-cesure" x1="${X(currentIndex)}" y1="${P.t}" x2="${X(currentIndex)}" y2="${H-P.b}"/><text class="tgraph-cesure-label" x="${Math.max(P.l,X(currentIndex)-54)}" y="${P.t+12}">CÉSURE</text>`:'';
    const closedDot=`<circle class="tgraph-closed" cx="${X(lastClosedIndex)}" cy="${Y(pts[lastClosedIndex].close)}" r="3.2"/>`;
    const currentDot=hasCurrent?`<circle class="tgraph-current" cx="${X(currentIndex)}" cy="${Y(pts[currentIndex].close)}" r="5"/>`:'';
    const first=pts[0],last=pts[pts.length-1];
    return `<svg class="tgraph-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(asset.symbol)} ${TF[key]} price field">${grid.join('')}${emaLines}<path class="tgraph-price-line" d="${path}"/>${cut}${closedDot}${currentDot}<text class="tgraph-axis" x="${P.l}" y="${H-10}">${esc(fmtTime(first.time))}</text><text class="tgraph-axis" text-anchor="end" x="${W-P.r}" y="${H-10}">${esc(fmtTime(last.time))}</text></svg>`;
  }

  function assetGraphCard(a){const key=tfState[a.symbol]||'h1';const tf=a.timeframes?.[key];const dif=currentDiff(tf);const buttons=Object.entries(TF).map(([k,l])=>`<button type="button" class="tgraph-tf ${k===key?'active':''}" data-symbol="${esc(a.symbol)}" data-tf="${k}">${l}</button>`).join('');return `<article class="tgraph-card"><div class="tgraph-card-head"><div><div class="tgraph-symbol">${esc(a.symbol.replace('USDT',''))}</div><div class="tgraph-meta">PRICE^FIELD · ${TF[key]} · Bybit V5 spot</div></div><div><div class="tgraph-price">${esc(fmtPrice(a.ticker?.lastPrice,a.symbol))}</div><div class="tgraph-meta" style="text-align:right">CURRENT</div></div></div><div class="tgraph-toolbar">${buttons}</div>${priceSvg(a,key)}<div class="tgraph-legend"><span><i class="tgraph-swatch"></i>prix</span><span><i class="tgraph-swatch e7"></i>EMA7</span><span><i class="tgraph-swatch e14"></i>EMA14</span><span><i class="tgraph-swatch e28"></i>EMA28</span><span><i class="tgraph-swatch cut"></i>césure</span></div><div class="tgraph-foot"><span>dernier CLOSED: ${esc(fmtPrice(tf?.lastClosed?.close,a.symbol))}</span><span>${dif.length?`CÉSURE: ${esc(dif.join(' · '))}`:'CURRENT ↔ CLOSED stable sur les relations exposées'}</span></div></article>`;}

  function consistencyGraph(market){const rows=(market?.assets||[]).map(a=>{const orders={};for(const k of Object.keys(TF))orders[k]=a.timeframes?.[k]?.ribbon?.lastClosed?.order||'UNKNOWN';const pairs=[['1H↔4H',orders.h1,orders.h4],['1H↔1D',orders.h1,orders.d1],['4H↔1D',orders.h4,orders.d1]];return `<div class="tgraph-cons-row"><div class="tgraph-row-head"><strong>${esc(a.symbol)}</strong><span class="tgraph-meta">CLOSED</span></div><div class="tgraph-tf-band">${Object.entries(TF).map(([k,l])=>`<div class="tgraph-tf-cell ${orderClass(orders[k])}"><div class="tf">${l}</div><div class="v">${orderShort(orders[k])}</div></div>`).join('')}</div><div class="tgraph-pairs">${pairs.map(([n,x,y])=>{const s=pairState(x,y);return `<span class="tgraph-pair ${s.toLowerCase()}">${n} · ${s}</span>`;}).join('')}</div></div>`;}).join('');return rows||'<div class="tgraph-empty">CONSISTENCY^TF indisponible.</div>';}

  function cesureGraph(market){const rows=(market?.assets||[]).map(a=>{const tfRows=Object.entries(TF).map(([k,l])=>{const tf=a.timeframes?.[k];const c=tf?.ribbon?.lastClosed||{},u=tf?.ribbon?.current||{};const dif=currentDiff(tf);return `<div class="tgraph-cut-band"><span class="tf">${l}</span><span class="tgraph-cut-node">${esc(orderShort(c.order))} · ${esc(c.priceRelation||'UNKNOWN')}</span><span class="tgraph-arrow">→</span><span class="tgraph-cut-node ${dif.length?'changed':''}">${esc(orderShort(u.order))} · ${esc(u.priceRelation||'UNKNOWN')}</span></div>`;}).join('');return `<div class="tgraph-cut-row"><div class="tgraph-row-head"><strong>${esc(a.symbol)}</strong><span class="tgraph-meta">CLOSED → CURRENT</span></div>${tfRows}</div>`;}).join('');return rows||'<div class="tgraph-empty">CÉSURE^GRAPH indisponible.</div>';}

  function flightCurrent(symbol,observer,plan){if(!observer?.ok)return {mode:'STEALTH',flight:null,plan:plan?.libellules?.[symbol]};const p=plan?.libellules?.[symbol];const f=observer?.flights?.[symbol];const e=parseTime(p?.epochStartUtc),s=parseTime(f?.startedAt);return {mode:f&&e!==null&&s!==null&&s>=e?'CURRENT':'WAIT',flight:f&&e!==null&&s!==null&&s>=e?f:null,plan:p};}
  function flightGraph(symbol,observer,plan){const x=flightCurrent(symbol,observer,plan);const short=symbol.replace('USDT','');if(x.mode==='STEALTH')return `<div class="tgraph-flight"><div class="tgraph-row-head"><strong>Libellule^ ${short}</strong><span class="tgraph-meta">MODE FURTIF ;-)</span></div><div class="tgraph-flight-bar"><span class="tgraph-flight-dot stealth"></span></div><div class="tgraph-flight-labels"><span>état inaccessible</span><span>observer read-only</span></div></div>`;if(x.mode==='WAIT')return `<div class="tgraph-flight"><div class="tgraph-row-head"><strong>Libellule^ ${short}</strong><span class="tgraph-meta">NOT_LAUNCHED</span></div><div class="tgraph-flight-bar"><span class="tgraph-flight-dot wait"></span></div><div class="tgraph-flight-labels"><span>frontière v3</span><span>décollage non enregistré</span></div></div>`;
    const f=x.flight,l=f.latest||{},count=finite(f.checkpointCount)??finite(l.checkpointIndex)??0,target=finite(f.checkpointTarget)??0,pct=target>0?Math.max(0,Math.min(100,count/target*100)):0;return `<div class="tgraph-flight"><div class="tgraph-row-head"><strong>Libellule^ ${short}</strong><span class="tgraph-meta">${esc(f.status||'ACTIVE')}</span></div><div class="tgraph-flight-bar"><span class="tgraph-flight-progress" style="width:${pct}%"></span><span class="tgraph-flight-dot" style="left:${pct}%"></span></div><div class="tgraph-flight-labels"><span>${esc(fmtDate(f.startedAt))}</span><span>CP ${esc(count)} / ${esc(target||'—')}</span><span>${esc(fmtDate(f.scheduledEndAt))}</span></div><div class="tgraph-flight-stats"><div class="tgraph-flight-stat"><div class="k">Trajectoire 15m</div><div class="v">${esc(l.trajectory15m?.state||'—')}</div></div><div class="tgraph-flight-stat"><div class="k">Intercept</div><div class="v">${esc(l.intercept??'—')}</div></div><div class="tgraph-flight-stat"><div class="k">Césure</div><div class="v">${esc(l.césure??'—')}</div></div><div class="tgraph-flight-stat"><div class="k">Action</div><div class="v">${esc(l.action??'NONACT')}</div></div><div class="tgraph-flight-stat"><div class="k">Position</div><div class="v">${esc(l.positionSide??'FLAT')} · ${esc(l.positionQty??'—')}</div></div><div class="tgraph-flight-stat"><div class="k">PnL</div><div class="v">R ${esc(l.realizedPnlUsdt??'—')} · U ${esc(l.unrealisedPnlUsdt??'—')}</div></div></div></div>`;}

  function render(market,observer,plan){const assets=market?.assets||[];const box=document.getElementById('tgraph-assets');if(box)box.innerHTML=assets.map(assetGraphCard).join('')||'<div class="tgraph-empty">PRICE^FIELD indisponible.</div>';const c=document.getElementById('tgraph-consistency');if(c)c.innerHTML=consistencyGraph(market);const cut=document.getElementById('tgraph-cesure');if(cut)cut.innerHTML=cesureGraph(market);const fl=document.getElementById('tgraph-flights');if(fl)fl.innerHTML=['BTCUSDT','ETHUSDT'].map(s=>flightGraph(s,observer,plan)).join('');const st=document.getElementById('tgraph-status');if(st)st.textContent=market?.generatedAt?`snapshot ${fmtDate(market.generatedAt)} · SVG natif · refresh 30s`:'snapshot indisponible';}

  async function load(){if(loading)return;loading=true;try{const [market,observer,plan]=await Promise.all([fetchJson(MARKET_URL).catch(()=>null),fetchJson(OBSERVER_URL).catch(()=>null),fetchJson(PLAN_URL).catch(()=>null)]);render(market,observer,plan);}finally{loading=false;}}

  document.addEventListener('click',e=>{const b=e.target.closest?.('.tgraph-tf');if(!b)return;tfState[b.dataset.symbol]=b.dataset.tf;load();});
  document.getElementById('refreshBtn')?.addEventListener('click',load);
  load();setInterval(load,30000);
})();