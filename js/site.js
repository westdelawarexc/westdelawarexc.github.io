/* West Delaware Girls Cross Country — shared site script.
   Content lives in js/data.js. You shouldn't need to edit this file. */

/* ---------- helpers ---------- */
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
const DN=['SUN','MON','TUE','WED','THU','FRI','SAT'];
const MN=['January','February','March','April','May','June','July','August','September','October','November','December'];
const dkey=d=>d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate();
function todayCT(){const p=new Intl.DateTimeFormat('en-US',{timeZone:'America/Chicago',year:'numeric',month:'numeric',day:'numeric'}).formatToParts(new Date());const g=t=>+p.find(x=>x.type===t).value;return new Date(g('year'),g('month')-1,g('day'))}
function parseDate(v){if(!v)return null;const m=String(v).match(/(\d{4})-(\d\d?)-(\d\d?)/);return m?new Date(+m[1],m[2]-1,+m[3]):null}
const ext=u=>/^https?:/.test(u)?' target="_blank" rel="noopener"':'';
function dirUrl(addr){return 'https://www.google.com/maps/dir/?api=1&origin='+encodeURIComponent(XC.HOME_START)+'&destination='+encodeURIComponent(addr)}

/* ---------- schedule (built from data.js) ---------- */
let _sched=null;
function loadSchedule(){
  if(_sched)return _sched;
  const meets=(XC.MEETS||[]).map(r=>{const c=(XC.COURSES||{})[r.course]||{};
    return {d:parseDate(r.date),ev:r.name||c.name||'Meet',st:r.start||'Time TBD',races:r.races||'',lv:r.level||'',
      loc:r.where||c.town||'',venue:r.venue||c.venue||'',ad:r.address||c.address||'',map:r.map||c.map||'',
      res:r.results||'',note:r.note||'',course:c,home:!!c.home}}).filter(m=>m.d).sort((a,b)=>a.d-b.d);
  const skip=new Set((XC.PRACTICE_SKIP||[]).map(s=>{const d=parseDate(s);return d&&dkey(d)}));
  const byM={},byP={};
  meets.forEach(m=>(byM[dkey(m.d)]=byM[dkey(m.d)]||[]).push(m));
  (XC.PRACTICE||[]).forEach(p=>{const a=parseDate(p.from),b=parseDate(p.to);if(!a||!b)return;
    for(let d=new Date(a);d<=b;d.setDate(d.getDate()+1)){const k=dkey(d);if((p.days||[1,2,3,4,5]).includes(d.getDay())&&!skip.has(k))(byP[k]=byP[k]||[]).push({d:new Date(d),t:p.time||'',l:p.where||''})}});
  const practices=[].concat(...Object.values(byP));
  _sched=Promise.resolve({season:XC.SEASON,meets,practices,byM,byP});
  return _sched;
}
function meetLinks(m){let h='';
  if(m.res)h+='<a href="'+esc(m.res)+'"'+ext(m.res)+'>Results</a>';
  if(m.ad)h+='<a href="'+dirUrl(m.ad)+'" target="_blank" rel="noopener">Directions</a>';
  if(m.map)h+='<a href="'+esc(m.map)+'" target="_blank" rel="noopener">Course Map</a>';
  return h?'<div class="lk">'+h+'</div>':''}
function meetCard(m){
  return '<div class="mc"><div class="dt"><span>'+DN[m.d.getDay()]+'</span><b>'+(m.d.getMonth()+1)+'/'+m.d.getDate()+'</b></div><div class="tx">'+
    '<h4>'+esc(m.ev)+'</h4>'+
    (m.venue?'<div class="opp">'+esc(m.venue)+(m.loc?' <span>· '+esc(m.loc)+'</span>':'')+'</div>':'')+
    '<div>'+(m.lv?'<span class="tag">'+esc(m.lv)+'</span>':'')+(m.home?'<span class="tag hm">Home</span>':'')+'<b>Start:</b> '+esc(m.st)+'</div>'+
    (m.races?'<div class="where">'+esc(m.races)+'</div>':'')+
    (m.note?'<div class="where">'+esc(m.note)+'</div>':'')+
    meetLinks(m)+'</div></div>'}

/* ---------- news ticker ---------- */
function initTicker(){
  const tk=document.getElementById('tk');if(!tk)return;
  const TAG={meet:'MEET',deadline:'DEADLINE',achievement:'ACHIEVEMENT',results:'RESULTS',news:'NEWS'};
  const today=todayCT();
  const items=(XC.NEWS||[]).filter(n=>{const s=parseDate(n.from),e=parseDate(n.until);return n.text&&!(s&&today<s)&&!(e&&today>e)})
    .map(n=>'<span class="it"><span class="tg">'+(TAG[String(n.tag||'').toLowerCase()]||'NEWS')+'</span>'+esc(n.text)+'</span>');
  if(!items.length)return;
  tk.innerHTML='<div class="lbl">NEWS</div><div class="vp"><div class="track"></div></div>';
  const vp=tk.querySelector('.vp'),tr=tk.querySelector('.track');tk.classList.add('on');
  if(matchMedia('(max-width:640px)').matches||matchMedia('(prefers-reduced-motion: reduce)').matches){
    vp.classList.add('fade');tr.innerHTML=items.join('');const els=tr.children;let i=0;els[0].classList.add('cur');
    let h=0;[...els].forEach(e=>{e.style.position='static';h=Math.max(h,e.offsetHeight);e.style.position=''});vp.style.minHeight=Math.max(52,h+12)+'px';
    if(els.length>1)setInterval(()=>{els[i].classList.remove('cur');i=(i+1)%els.length;els[i].classList.add('cur')},5000);
    return}
  let html=items.join('');tr.innerHTML=html;
  while(tr.scrollWidth<vp.clientWidth*1.2&&html.length<20000){html+=items.join('');tr.innerHTML=html}
  tr.innerHTML=html+html;tr.style.setProperty('--d',Math.max(12,tr.scrollWidth/2/70)+'s');
}

/* ---------- header / footer (same on every page) ---------- */
const PAGES=[['index.html','Home'],['schedule.html','Schedule'],['courses.html','Courses'],['records.html','Records'],['history.html','History'],['training.html','Training'],['parents.html','Parents & Athletes']];
function initChrome(){
  const here=(location.pathname.split('/').pop()||'index.html');
  const links=PAGES.map(([h,t])=>'<a href="'+h+'"'+(h===here?' aria-current="page"':'')+'>'+t+'</a>').join('');
  const top=document.getElementById('top');
  if(top)top.innerHTML='<div class="wrap"><a class="brand" href="index.html"><img src="img/logo.svg" alt=""><span>West Delaware<b>Girls Cross Country</b></span></a>'+
    '<button class="menu" aria-label="Menu" aria-expanded="false"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>'+
    '<nav class="nav">'+links+'</nav></div>';
  const btn=top&&top.querySelector('.menu'),nav=top&&top.querySelector('.nav');
  if(btn)btn.onclick=()=>{const o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)};
  const ft=document.getElementById('foot');
  if(ft)ft.innerHTML='<div class="wrap"><img src="img/logo.svg" alt=""><div><b>West Delaware Girls Cross Country</b><br>Hawks · Manchester, Iowa</div><nav>'+PAGES.map(([h,t])=>'<a href="'+h+'">'+t+'</a>').join('')+'</nav></div>';
  initTicker();
}
document.addEventListener('DOMContentLoaded',initChrome);
