'use strict';

const API_HOSTS = [
  'https://api.binance.com',
  'https://api1.binance.com',
  'https://api2.binance.com',
  'https://api3.binance.com'
];
const cache = new Map();
const rendered = new Set();
const COLORS = {
  bg:'#0b1117', grid:'#19242d', text:'#758793', candleUp:'#79dda7', candleDown:'#e4818d', wick:'#647786',
  cyan:'#69d3ea', amber:'#efc66b', violet:'#ae98ef', blue:'#7ca7f6', red:'#eb8490', green:'#7cdda8', white:'#dce4e9', gray:'#7f8e99'
};

function fmt(n, digits=0){
  if(n == null || Number.isNaN(n)) return '—';
  return new Intl.NumberFormat('fr-CH',{maximumFractionDigits:digits,minimumFractionDigits:digits}).format(n);
}
function fmtPrice(n){ return n == null ? '—' : '$'+fmt(n, n<100?2:0); }
function fmtDate(t, tf='1d'){
  const d = new Date(t*1000);
  if(tf==='4h') return d.toLocaleString('fr-CH',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'});
  return d.toLocaleDateString('fr-CH',{day:'2-digit',month:'2-digit',year:'2-digit'});
}
function clamp(x,a,b){ return Math.max(a,Math.min(b,x)); }
function lastValid(arr){ for(let i=arr.length-1;i>=0;i--) if(Number.isFinite(arr[i])) return arr[i]; return null; }

async function fetchJsonWithFallback(path){
  let lastErr = null;
  for(const host of API_HOSTS){
    try{
      const r = await fetch(host+path,{cache:'no-store'});
      if(!r.ok) throw new Error('HTTP '+r.status);
      return await r.json();
    }catch(e){ lastErr=e; }
  }
  throw lastErr || new Error('API indisponible');
}
async function fetchKlines(tf='1d', limit=1000){
  const key=tf+':'+limit;
  const existing=cache.get(key);
  if(existing && Date.now()-existing.time < 120000) return existing.data;
  let sourceTf=tf;
  if(tf==='2d') sourceTf='1d';
  const raw=await fetchJsonWithFallback(`/api/v3/klines?symbol=BTCUSDT&interval=${sourceTf}&limit=${limit}`);
  let data=raw.map(k=>({
    t:Math.floor(k[0]/1000), o:+k[1], h:+k[2], l:+k[3], c:+k[4], v:+k[5], closeT:Math.floor(k[6]/1000)
  }));
  if(tf==='2d') data=aggregate2d(data);
  cache.set(key,{time:Date.now(),data});
  return data;
}
function aggregate2d(data){
  const S=172800;
  const out=[]; let cur=null;
  for(const d of data){
    const bucket=Math.floor(d.t/S)*S;
    if(!cur || cur.t!==bucket){
      if(cur) out.push(cur);
      cur={t:bucket,o:d.o,h:d.h,l:d.l,c:d.c,v:d.v,closeT:d.closeT};
    }else{
      cur.h=Math.max(cur.h,d.h); cur.l=Math.min(cur.l,d.l); cur.c=d.c; cur.v+=d.v; cur.closeT=d.closeT;
    }
  }
  if(cur) out.push(cur);
  return out;
}

function sma(vals,n){
  const out=new Array(vals.length).fill(null); let s=0;
  for(let i=0;i<vals.length;i++){
    s+=vals[i]; if(i>=n) s-=vals[i-n]; if(i>=n-1) out[i]=s/n;
  } return out;
}
function ema(vals,n){
  const out=new Array(vals.length).fill(null); if(!vals.length) return out;
  const a=2/(n+1); let prev=vals[0]; out[0]=prev;
  for(let i=1;i<vals.length;i++){ prev=vals[i]*a+prev*(1-a); out[i]=prev; }
  return out;
}
function rsi(vals,n=14){
  const out=new Array(vals.length).fill(null); if(vals.length<=n) return out;
  let gain=0,loss=0;
  for(let i=1;i<=n;i++){ const d=vals[i]-vals[i-1]; if(d>=0) gain+=d; else loss-=d; }
  gain/=n; loss/=n; out[n]=loss===0?100:100-(100/(1+gain/loss));
  for(let i=n+1;i<vals.length;i++){
    const d=vals[i]-vals[i-1],g=Math.max(d,0),l=Math.max(-d,0);
    gain=(gain*(n-1)+g)/n; loss=(loss*(n-1)+l)/n; out[i]=loss===0?100:100-(100/(1+gain/loss));
  } return out;
}
function stochRsi(vals,rsiN=14,stochN=14,kN=3,dN=3){
  const R=rsi(vals,rsiN), raw=new Array(vals.length).fill(null);
  for(let i=0;i<vals.length;i++){
    if(i<rsiN+stochN-1 || R[i]==null) continue;
    const w=R.slice(i-stochN+1,i+1).filter(Number.isFinite); if(w.length<stochN) continue;
    const lo=Math.min(...w),hi=Math.max(...w); raw[i]=hi===lo?50:100*(R[i]-lo)/(hi-lo);
  }
  const smooth=(arr,n)=>{
    const out=new Array(arr.length).fill(null);
    for(let i=0;i<arr.length;i++){
      const w=arr.slice(Math.max(0,i-n+1),i+1).filter(Number.isFinite); if(w.length===n) out[i]=w.reduce((a,b)=>a+b,0)/n;
    } return out;
  };
  const k=smooth(raw,kN), d=smooth(k,dN); return {rsi:R,raw,k,d};
}
function macd(vals,fast=12,slow=26,signal=9){
  const f=ema(vals,fast),s=ema(vals,slow),line=vals.map((_,i)=>f[i]-s[i]);
  const sig=ema(line,signal),hist=line.map((x,i)=>x-sig[i]); return {line,sig,hist};
}
function rollingHigh(vals,n){ const out=new Array(vals.length).fill(null); for(let i=n-1;i<vals.length;i++) out[i]=Math.max(...vals.slice(i-n+1,i+1)); return out; }
function rollingLow(vals,n){ const out=new Array(vals.length).fill(null); for(let i=n-1;i<vals.length;i++) out[i]=Math.min(...vals.slice(i-n+1,i+1)); return out; }
function percentileSeries(vals,window=104){
  const out=new Array(vals.length).fill(null);
  for(let i=0;i<vals.length;i++){
    if(!Number.isFinite(vals[i])) continue;
    const w=vals.slice(Math.max(0,i-window+1),i+1).filter(Number.isFinite); if(w.length<20) continue;
    const n=w.filter(x=>x<=vals[i]).length; out[i]=100*n/w.length;
  } return out;
}

function setupCanvas(canvas){
  const rect=canvas.getBoundingClientRect(), dpr=Math.min(window.devicePixelRatio||1,2);
  canvas.width=Math.max(1,Math.round(rect.width*dpr)); canvas.height=Math.max(1,Math.round(rect.height*dpr));
  const ctx=canvas.getContext('2d'); ctx.setTransform(dpr,0,0,dpr,0,0); return {ctx,w:rect.width,h:rect.height,dpr};
}
function rangeOf(data, overlays=[]){
  let lo=Infinity,hi=-Infinity;
  for(const d of data){ lo=Math.min(lo,d.l); hi=Math.max(hi,d.h); }
  overlays.forEach(s=>s.values.forEach(v=>{ if(Number.isFinite(v)){lo=Math.min(lo,v);hi=Math.max(hi,v);} }));
  if(!Number.isFinite(lo)||!Number.isFinite(hi)){lo=0;hi=1;} const pad=(hi-lo)*.08||1; return [lo-pad,hi+pad];
}
function drawChart(canvas,data,opt={}){
  const {ctx,w,h}=setupCanvas(canvas); const pad={l:8,r:58,t:10,b:22};
  ctx.clearRect(0,0,w,h); ctx.fillStyle=COLORS.bg; ctx.fillRect(0,0,w,h);
  const lower=opt.lower||null; const mainH=lower?Math.round((h-pad.t-pad.b)*.70):h-pad.t-pad.b; const lowerGap=lower?12:0; const lowerH=lower?(h-pad.t-pad.b-mainH-lowerGap):0;
  const visCount=opt.count||Math.min(data.length,120); const start=Math.max(0,data.length-visCount); const d=data.slice(start); if(!d.length) return;
  const overlays=(opt.overlays||[]).map(s=>({...s,values:s.values.slice(start)}));
  const [lo,hi]=rangeOf(d,overlays); const x0=pad.l,x1=w-pad.r,y0=pad.t,y1=pad.t+mainH; const step=(x1-x0)/Math.max(d.length,1); const cw=Math.max(1,Math.min(8,step*.58));
  const X=i=>x0+(i+.5)*step; const Y=v=>y1-(v-lo)/(hi-lo)*(y1-y0);
  ctx.strokeStyle=COLORS.grid;ctx.lineWidth=1;
  for(let g=0;g<=4;g++){const y=y0+(y1-y0)*g/4;ctx.beginPath();ctx.moveTo(x0,y);ctx.lineTo(x1,y);ctx.stroke();const val=hi-(hi-lo)*g/4;ctx.fillStyle=COLORS.text;ctx.font='10px system-ui';ctx.fillText(fmtPrice(val),x1+6,y+3);}
  for(let i=0;i<d.length;i++){
    const q=d[i],x=X(i),yo=Y(q.o),yc=Y(q.c),yh=Y(q.h),yl=Y(q.l),up=q.c>=q.o;
    ctx.strokeStyle=COLORS.wick;ctx.beginPath();ctx.moveTo(x,yh);ctx.lineTo(x,yl);ctx.stroke();
    ctx.fillStyle=up?COLORS.candleUp:COLORS.candleDown;ctx.fillRect(x-cw/2,Math.min(yo,yc),cw,Math.max(1,Math.abs(yc-yo)));
  }
  overlays.forEach(s=>drawLine(ctx,s.values,X,Y,s.color||COLORS.cyan,s.width||1.3,s.dash));
  if(opt.hlines) opt.hlines.forEach(line=>{
    const y=Y(line.value); if(y<y0||y>y1) return; ctx.save();ctx.strokeStyle=line.color||COLORS.amber;ctx.setLineDash(line.dash||[5,4]);ctx.beginPath();ctx.moveTo(x0,y);ctx.lineTo(x1,y);ctx.stroke();ctx.setLineDash([]);ctx.fillStyle=line.color||COLORS.amber;ctx.font='10px system-ui';ctx.fillText(line.label||fmtPrice(line.value),x0+5,y-4);ctx.restore();
  });
  if(opt.markers) opt.markers.filter(m=>m.i>=start).forEach(m=>{
    const i=m.i-start;if(i<0||i>=d.length)return;const y=Y(m.value||d[i].l);ctx.fillStyle=m.color||COLORS.green;ctx.beginPath();ctx.arc(X(i),y,4,0,Math.PI*2);ctx.fill();
  });
  if(lower){
    const ly0=y1+lowerGap,ly1=ly0+lowerH; ctx.strokeStyle=COLORS.grid;ctx.strokeRect(x0,ly0,x1-x0,ly1-ly0);
    let llo=lower.min, lhi=lower.max;
    if(llo==null||lhi==null){ const vals=lower.series.flatMap(s=>s.values.slice(start)).filter(Number.isFinite); llo=Math.min(...vals,0);lhi=Math.max(...vals,1);if(llo===lhi){llo-=1;lhi+=1;} }
    const LY=v=>ly1-(v-llo)/(lhi-llo)*(ly1-ly0);
    if(lower.hlines) lower.hlines.forEach(v=>{ctx.save();ctx.strokeStyle='#2b3943';ctx.setLineDash([3,4]);const y=LY(v);ctx.beginPath();ctx.moveTo(x0,y);ctx.lineTo(x1,y);ctx.stroke();ctx.setLineDash([]);ctx.fillStyle=COLORS.text;ctx.font='9px system-ui';ctx.fillText(String(v),x1+6,y+3);ctx.restore();});
    if(lower.hist){ const vals=lower.hist.values.slice(start);const zero=LY(0); for(let i=0;i<vals.length;i++){const v=vals[i];if(!Number.isFinite(v))continue;const y=LY(v);ctx.fillStyle=v>=0?'rgba(121,221,167,.55)':'rgba(228,129,141,.55)';ctx.fillRect(X(i)-Math.max(1,cw/2),Math.min(y,zero),Math.max(1,cw),Math.max(1,Math.abs(zero-y)));} }
    lower.series.forEach(s=>drawLine(ctx,s.values.slice(start),X,LY,s.color||COLORS.cyan,s.width||1.2,s.dash));
  }
  ctx.fillStyle=COLORS.text;ctx.font='9px system-ui'; const labels=4;
  for(let g=0;g<labels;g++){const i=Math.round((d.length-1)*g/(labels-1));ctx.fillText(fmtDate(d[i].t,opt.tf),clamp(X(i)-18,x0,x1-40),h-6);}
  attachTip(canvas,data,opt,start,step,pad);
}
function drawLine(ctx,vals,X,Y,color,width=1.3,dash=[]){
  ctx.save();ctx.strokeStyle=color;ctx.lineWidth=width;ctx.setLineDash(dash||[]);ctx.beginPath();let started=false;
  for(let i=0;i<vals.length;i++){const v=vals[i];if(!Number.isFinite(v)){started=false;continue;}const x=X(i),y=Y(v);if(!started){ctx.moveTo(x,y);started=true;}else ctx.lineTo(x,y);}ctx.stroke();ctx.restore();
}
function attachTip(canvas,full,opt,start,step,pad){
  const tip=canvas.parentElement.querySelector('.charttip'); if(!tip) return;
  canvas.onmousemove=e=>{const r=canvas.getBoundingClientRect();const x=e.clientX-r.left;const idx=clamp(Math.floor((x-pad.l)/step),0,Math.min(full.length-start-1,full.length-1));const d=full[start+idx];if(!d)return;tip.style.display='block';tip.style.left=Math.min(r.width-155,Math.max(5,x+10))+'px';tip.style.top='8px';tip.innerHTML=`${fmtDate(d.t,opt.tf)}<br>O ${fmtPrice(d.o)} · H ${fmtPrice(d.h)}<br>L ${fmtPrice(d.l)} · C <b>${fmtPrice(d.c)}</b>`;};
  canvas.onmouseleave=()=>tip.style.display='none';
}

function prices(data){return data.map(d=>d.c);}
function stateText(el,text,kind=''){ if(!el)return;el.textContent=text;el.dataset.kind=kind; }

async function renderMain(){
  const tf=document.getElementById('tfSelect').value, overlay=document.getElementById('overlaySelect').value;
  const data=await fetchKlines(tf,1000); const c=prices(data); const overlays=[]; let lower=null;
  if(overlay==='club21'){overlays.push({values:ema(c,21),color:COLORS.cyan,width:1.8});}
  if(overlay==='fibma'){[21,34,55,89,144,233].forEach((n,i)=>overlays.push({values:ema(c,n),color:[COLORS.cyan,COLORS.green,COLORS.amber,COLORS.violet,COLORS.blue,COLORS.red][i],width:1}));}
  if(overlay==='dcmacd'){const hi=rollingHigh(data.map(d=>d.h),20),lo=rollingLow(data.map(d=>d.l),20),m=macd(c);overlays.push({values:hi,color:COLORS.blue},{values:lo,color:COLORS.blue});lower={series:[{values:m.line,color:COLORS.cyan},{values:m.sig,color:COLORS.amber}],hist:{values:m.hist}};}
  if(overlay==='trend'){overlays.push({values:ema(c,21),color:COLORS.cyan},{values:ema(c,55),color:COLORS.amber});const R=rsi(c);lower={series:[{values:R,color:COLORS.violet}],min:0,max:100,hlines:[50]};}
  if(overlay==='ribbon'){[8,13,21,34,55,89,144,233].forEach((n,i)=>overlays.push({values:ema(c,n),color:[COLORS.green,COLORS.cyan,COLORS.blue,COLORS.violet,COLORS.amber,COLORS.red,'#a8b6c0','#687783'][i],width:.9}));}
  if(overlay==='standard-ma'){overlays.push({values:sma(c,21),color:COLORS.cyan},{values:sma(c,50),color:COLORS.amber},{values:sma(c,200),color:COLORS.violet});}
  if(overlay==='bollinger'){const mid=sma(c,20),std=c.map((_,i)=>{if(i<19)return null;const w=c.slice(i-19,i+1),m=mid[i];return Math.sqrt(w.reduce((a,x)=>a+(x-m)**2,0)/20);});overlays.push({values:mid,color:COLORS.cyan},{values:mid.map((m,i)=>Number.isFinite(m)?m+2*std[i]:null),color:COLORS.blue},{values:mid.map((m,i)=>Number.isFinite(m)?m-2*std[i]:null),color:COLORS.blue});}
  drawChart(document.getElementById('mainChart'),data,{tf,overlays,lower,count:tf==='4h'?150:120});
  const last=data.at(-1); document.getElementById('lastPrice').textContent=fmtPrice(last.c);const ch=(last.c-last.o)/last.o*100;document.getElementById('lastChange').textContent=(ch>=0?'+':'')+fmt(ch,2)+'%';document.getElementById('lastChange').style.color=ch>=0?COLORS.green:COLORS.red;document.getElementById('lastTime').textContent=new Date(last.t*1000).toLocaleString('fr-CH');
}

async function renderCard(name){
  if(rendered.has(name)) return; rendered.add(name);
  try{
    if(name==='club21') return await rClub21();
    if(name==='heatworm') return await rHeatworm();
    if(name==='fibma') return await rFibma();
    if(name==='dcmacd') return await rDcmacd();
    if(name==='trend') return await rTrend();
    if(name==='ribbon') return await rRibbon();
    if(name==='checkmarks') return await rCheckmarks();
    if(name==='weeklyma') return await rWeeklyMA();
    if(name==='pi') return await rPi();
    if(name==='annual47') return await rAnnual47();
    if(name==='momentum') return await rMomentum();
    if(name==='macdstd') return await rMacdStd();
  }catch(e){rendered.delete(name);stateText(document.getElementById('state-'+name),'Données indisponibles : '+e.message,'error');}
}
async function rClub21(){const d=await fetchKlines('1d'),c=prices(d),e=ema(c,21),i=d.length-1,s=e[i]>e[i-3],above=c[i]>e[i];drawChart(document.getElementById('chart-club21'),d,{tf:'1d',overlays:[{values:e,color:COLORS.cyan,width:1.8}],count:130});stateText(document.getElementById('state-club21'),`R1 maintenant : clôture ${above?'au-dessus':'sous'} EMA21 ; pente 3 bougies ${s?'positive':'négative'}.`);}
async function rHeatworm(){const d=await fetchKlines('1w',1000),c=prices(d),R=rsi(c,14),ma=sma(c,200),dist=c.map((x,i)=>Number.isFinite(ma[i])?Math.log(x/ma[i]):null),rp=percentileSeries(R,104),dp=percentileSeries(dist,208),heat=c.map((_,i)=>(Number.isFinite(rp[i])&&Number.isFinite(dp[i])) ? .55*rp[i]+.45*dp[i] : null);drawChart(document.getElementById('chart-heatworm'),d,{tf:'1w',overlays:[{values:ma,color:COLORS.gray}],lower:{series:[{values:heat,color:COLORS.amber,width:1.8}],min:0,max:100,hlines:[20,80]},count:180});const h=lastValid(heat);stateText(document.getElementById('state-heatworm'),`R1 thermique : ${fmt(h,1)}/100 · percentile hybride, non formule CCU.`);}
async function rFibma(){const d=await fetchKlines('1d'),c=prices(d),ps=[21,34,55,89,144,233],cols=[COLORS.cyan,COLORS.green,COLORS.amber,COLORS.violet,COLORS.blue,COLORS.red],ov=ps.map((n,i)=>({values:ema(c,n),color:cols[i],width:1}));drawChart(document.getElementById('chart-fibma'),d,{tf:'1d',overlays:ov,count:160});const vals=ov.map(x=>lastValid(x.values)).filter(Number.isFinite);stateText(document.getElementById('state-fibma'),`R1 : six EMA Fibonacci. Étendue actuelle ${fmtPrice(Math.min(...vals))} → ${fmtPrice(Math.max(...vals))}.`);}
async function rDcmacd(){const d=await fetchKlines('1d'),c=prices(d),hi=rollingHigh(d.map(x=>x.h),20),lo=rollingLow(d.map(x=>x.l),20),m=macd(c);drawChart(document.getElementById('chart-dcmacd'),d,{tf:'1d',overlays:[{values:hi,color:COLORS.blue},{values:lo,color:COLORS.blue}],lower:{series:[{values:m.line,color:COLORS.cyan},{values:m.sig,color:COLORS.amber}],hist:{values:m.hist}},count:130});const h=lastValid(m.hist);stateText(document.getElementById('state-dcmacd'),`R1 : Donchian20 + MACD standard · histogramme ${h>=0?'positif':'négatif'} (${fmt(h,0)}).`);}
async function rTrend(){const d=await fetchKlines('1d'),c=prices(d),e21=ema(c,21),e55=ema(c,55),R=rsi(c),i=d.length-1;drawChart(document.getElementById('chart-trend'),d,{tf:'1d',overlays:[{values:e21,color:COLORS.cyan},{values:e55,color:COLORS.amber}],lower:{series:[{values:R,color:COLORS.violet}],min:0,max:100,hlines:[50]},count:130});const regime=c[i]>e21[i]&&e21[i]>e55[i]&&R[i]>50?'prévalence haussière':c[i]<e21[i]&&e21[i]<e55[i]&&R[i]<50?'prévalence baissière':'configuration mixte';stateText(document.getElementById('state-trend'),`R1 : ${regime}.`);}
async function rRibbon(){const d=await fetchKlines('1d'),c=prices(d),ps=[8,13,21,34,55,89,144,233],cols=[COLORS.green,COLORS.cyan,COLORS.blue,COLORS.violet,COLORS.amber,COLORS.red,'#a6b4bd','#687783'],all=ps.map((n,i)=>({n,values:ema(c,n),color:cols[i]}));drawChart(document.getElementById('chart-ribbon'),d,{tf:'1d',overlays:all,count:160});const vals=all.map(x=>lastValid(x.values)),orderedBull=vals.every((v,i)=>i===0||vals[i-1]>=v),orderedBear=vals.every((v,i)=>i===0||vals[i-1]<=v);stateText(document.getElementById('state-ribbon'),`R1 : ribbon ${orderedBull?'ordonné haussier':orderedBear?'ordonné baissier':'entrelacé / transition'}.`);}
async function rCheckmarks(){const d=await fetchKlines('2d',1000),c=prices(d),ma=sma(c,200),S=stochRsi(c,14,14,3,3),markers=[];for(let i=0;i<d.length;i++){if(Number.isFinite(ma[i])&&Number.isFinite(S.rsi[i])&&Number.isFinite(S.k[i])&&Number.isFinite(S.d[i])&&c[i]<ma[i]&&S.rsi[i]<26&&S.k[i]<20&&S.d[i]<20)markers.push({i,value:d[i].l,color:COLORS.green});}drawChart(document.getElementById('chart-checkmarks'),d,{tf:'2d',overlays:[{values:ma,color:COLORS.amber}],markers,count:230});const i=d.length-1,checks=[c[i]<ma[i],S.rsi[i]<26,S.k[i]<20&&S.d[i]<20];stateText(document.getElementById('state-checkmarks'),`État actuel : ${checks.filter(Boolean).length}/3 conditions publiques remplies · RSI ${fmt(S.rsi[i],1)} · K/D ${fmt(S.k[i],1)}/${fmt(S.d[i],1)}.`);}
async function rWeeklyMA(){const d=await fetchKlines('1w'),c=prices(d),m21=sma(c,21),m200=sma(c,200);drawChart(document.getElementById('chart-weeklyma'),d,{tf:'1w',overlays:[{values:m21,color:COLORS.cyan,width:1.6},{values:m200,color:COLORS.violet,width:1.6}],count:260});const i=d.length-1;stateText(document.getElementById('state-weeklyma'),`BTC ${c[i]>m21[i]?'au-dessus':'sous'} 21W (${fmtPrice(m21[i])}) · ${c[i]>m200[i]?'au-dessus':'sous'} 200W (${fmtPrice(m200[i])}).`);}
async function rPi(){const d=await fetchKlines('1d'),c=prices(d),m111=sma(c,111),m350=sma(c,350).map(x=>Number.isFinite(x)?2*x:null);drawChart(document.getElementById('chart-pi'),d,{tf:'1d',overlays:[{values:m111,color:COLORS.cyan,width:1.5},{values:m350,color:COLORS.amber,width:1.5}],count:420});const a=lastValid(m111),b=lastValid(m350);stateText(document.getElementById('state-pi'),`111DMA ${fmtPrice(a)} · 2×350DMA ${fmtPrice(b)} · écart ${fmt((a/b-1)*100,1)}%.`);}
async function rAnnual47(){const d=await fetchKlines('1M',1000);drawChart(document.getElementById('chart-annual47'),d,{tf:'1M',hlines:[{value:47000,label:'~47k checkpoint',color:COLORS.amber}],count:84});const now=new Date(),year=now.getUTCFullYear();const months=d.filter(x=>new Date(x.t*1000).getUTCFullYear()===year),close=months.at(-1)?.c;stateText(document.getElementById('state-annual47'),`2026 en cours : dernière clôture mensuelle / bougie courante ${fmtPrice(close)} · checkpoint annuel ~47k conservé.`);}
async function rMomentum(){const d=await fetchKlines('1d'),c=prices(d),S=stochRsi(c),R=S.rsi;drawChart(document.getElementById('chart-momentum'),d,{tf:'1d',lower:{series:[{values:R,color:COLORS.violet,width:1.5},{values:S.k,color:COLORS.cyan},{values:S.d,color:COLORS.amber}],min:0,max:100,hlines:[20,30,50,70,80]},count:150});const i=d.length-1;stateText(document.getElementById('state-momentum'),`RSI ${fmt(R[i],1)} · Stoch RSI K/D ${fmt(S.k[i],1)}/${fmt(S.d[i],1)}.`);}
async function rMacdStd(){const d=await fetchKlines('1d'),c=prices(d),m=macd(c);drawChart(document.getElementById('chart-macdstd'),d,{tf:'1d',lower:{series:[{values:m.line,color:COLORS.cyan},{values:m.sig,color:COLORS.amber}],hist:{values:m.hist}},count:150});stateText(document.getElementById('state-macdstd'),`MACD ${fmt(lastValid(m.line),0)} · signal ${fmt(lastValid(m.sig),0)} · hist ${fmt(lastValid(m.hist),0)}.`);}

async function init(){
  const dot=document.getElementById('dataDot'),status=document.getElementById('dataStatus');
  try{await renderMain();dot.classList.add('ok');status.textContent='Données BTC actives';}
  catch(e){dot.classList.add('err');status.textContent='Données indisponibles : '+e.message;}
  const io=new IntersectionObserver(entries=>entries.forEach(en=>{if(en.isIntersecting){const name=en.target.dataset.chart;if(name)renderCard(name);}}),{rootMargin:'180px'});
  document.querySelectorAll('[data-chart]').forEach(el=>io.observe(el));
  document.getElementById('tfSelect').addEventListener('change',()=>renderMain().catch(console.error));
  document.getElementById('overlaySelect').addEventListener('change',()=>renderMain().catch(console.error));
  document.getElementById('refreshBtn').addEventListener('click',async()=>{cache.clear();rendered.clear();document.querySelectorAll('[data-chart]').forEach(el=>renderCard(el.dataset.chart));await renderMain();});
  window.addEventListener('resize',debounce(()=>{renderMain().catch(()=>{});rendered.clear();document.querySelectorAll('[data-chart]').forEach(el=>{const r=el.getBoundingClientRect();if(r.top<innerHeight+200&&r.bottom>-200)renderCard(el.dataset.chart);});},180));
}
function debounce(fn,ms){let t;return(...a)=>{clearTimeout(t);t=setTimeout(()=>fn(...a),ms);};}
init();
