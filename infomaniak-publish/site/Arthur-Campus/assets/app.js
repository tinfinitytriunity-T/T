const data=window.CAMPUS_DATA;
const catalog=document.querySelector('#catalog');
const modal=document.querySelector('#mcModal');
const sheetBody=document.querySelector('#sheetBody');
const tabButtons=[...document.querySelectorAll('[data-tab]')];
const panels=[...document.querySelectorAll('[data-panel]')];
const filters=[...document.querySelectorAll('[data-filter]')];

function escapeHTML(s=''){return s.replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}

function activateTab(name,updateHash=true){
  if(!panels.some(p=>p.dataset.panel===name)) name='campus';
  tabButtons.forEach(b=>{const on=b.dataset.tab===name;b.classList.toggle('active',on);b.setAttribute('aria-selected',on?'true':'false');});
  panels.forEach(p=>p.classList.toggle('active',p.dataset.panel===name));
  if(updateHash) history.replaceState(null,'',`#${name}`);
  window.scrollTo({top:document.querySelector('.tabs-wrap').offsetTop,behavior:'smooth'});
}

function renderCatalog(){
  catalog.innerHTML=data.masterclasses.map(mc=>`<article class="mc" data-field="${mc.field}" data-zone="${escapeHTML(mc.zone)}"><div class="mc-code">${mc.code}</div><div class="mc-zone">${mc.zone}</div><div class="mc-title">${mc.title}</div><div class="mc-desc">${mc.description}</div><button class="mc-open" data-open="${mc.code}">Open ↗</button></article>`).join('');
}

function renderExternal(){
  const row=x=>`<div class="extrow"><a href="${x.url}" target="_blank" rel="noopener"><strong>${x.name}</strong><span>${x.detail}</span></a><div class="extstatus">${x.status}</div></div>`;
  document.querySelector('#extRomandie').innerHTML=data.external.filter(x=>x.kind==='ROMANDIE').map(row).join('');
  document.querySelector('#extOnline').innerHTML=data.external.filter(x=>x.kind==='ONLINE').map(row).join('');
}

function openMC(code){
  const mc=data.masterclasses.find(x=>x.code===code);if(!mc)return;
  sheetBody.innerHTML=`<div class="bigcode">${mc.code} / ${mc.zone}</div><h3>${mc.title}</h3><p class="q">${mc.question}</p><div class="detailgrid"><div class="detailkey">Field</div><div>${mc.description}</div><div class="detailkey">Build</div><div>${mc.build}</div><div class="detailkey">Labs</div><div><ul class="listplain">${mc.labs.map(x=>`<li>${x}</li>`).join('')}</ul></div><div class="detailkey">References</div><div><ul class="listplain">${mc.resources.map(x=>`<li>${x}</li>`).join('')}</ul></div><div class="detailkey">Bridges</div><div class="bridge">${mc.bridge.map(x=>`<button data-bridge="${x}">${x}</button>`).join('')}</div></div>`;
  modal.classList.add('open');document.body.style.overflow='hidden';history.replaceState(null,'',`#${code}`);
}
function closeMC(){modal.classList.remove('open');document.body.style.overflow='';history.replaceState(null,'','#masterclasses');}

renderCatalog();renderExternal();

tabButtons.forEach(btn=>btn.addEventListener('click',()=>activateTab(btn.dataset.tab)));
document.querySelectorAll('[data-jump]').forEach(btn=>btn.addEventListener('click',()=>activateTab(btn.dataset.jump)));
filters.forEach(btn=>btn.addEventListener('click',()=>{filters.forEach(x=>x.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('.mc').forEach(el=>el.classList.toggle('hidden',f!=='ALL'&&el.dataset.field!==f));}));

document.addEventListener('click',e=>{
  const open=e.target.closest('[data-open]');if(open)openMC(open.dataset.open);
  const bridge=e.target.closest('[data-bridge]');if(bridge)openMC(bridge.dataset.bridge);
  const map=e.target.closest('[data-map]');if(map){activateTab('masterclasses');const found=data.masterclasses.find(x=>x.zone===map.dataset.map);if(found)setTimeout(()=>openMC(found.code),160);}
  const zone=e.target.closest('[data-zone-card]');if(zone){activateTab('masterclasses');const found=data.masterclasses.find(x=>x.zone===zone.dataset.zoneCard);if(found)setTimeout(()=>openMC(found.code),160);}
});
document.querySelector('#closeModal').addEventListener('click',closeMC);modal.addEventListener('click',e=>{if(e.target===modal)closeMC();});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMC();});

const hash=location.hash.slice(1);
if(hash.startsWith('MC-')){activateTab('masterclasses',false);setTimeout(()=>openMC(hash),120);}else if(hash){activateTab(hash,false);}else activateTab('campus',false);
window.addEventListener('hashchange',()=>{const h=location.hash.slice(1);if(h&&!h.startsWith('MC-'))activateTab(h,false);});
