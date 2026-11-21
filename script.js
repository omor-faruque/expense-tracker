const IC={cart:'<path d="M3 4h2l2.4 10.2a2 2 0 002 1.8h7.2a2 2 0 002-1.5L20 8H6"/><circle cx="10" cy="20" r="1.3"/><circle cx="17" cy="20" r="1.3"/>',
home:'<path d="M3 11l9-8 9 8M5 10v10h14V10M10 20v-6h4v6"/>',
bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
wifi:'<path d="M2 9a15 15 0 0120 0M5 12.5a10 10 0 0114 0M8.5 16a5 5 0 017 0"/><circle cx="12" cy="19.5" r="1"/>',
fuel:'<path d="M4 21V5a2 2 0 012-2h6a2 2 0 012 2v16M3 21h12M14 9h2.5a1.5 1.5 0 011.500 1.500v5a1.500 1.500 0 003 0V8l-3-3M6 8h6"/>',
bag:'<path d="M5 8h14l-1 12H6zM9 8V6a3 3 0 016 0v2"/>',
food:'<path d="M7 3v8a2 2 0 002 2v8M11 3v8a2 2 0 01-2 2M7 3v4M18 21V3c-2 1-3 4-3 8h3"/>',
car:'<path d="M4 16V12l2-5h12l2 5v4zM4 16v3M20 16v3"/><circle cx="8" cy="14" r=".6"/><circle cx="16" cy="14" r=".6"/>',
subway:'<rect x="5" y="3" width="14" height="16" rx="4"/><path d="M5 13h14M8 7h.01M16 7h.01M8 22l3-3m5 3-3-3"/>',
bus:'<rect x="3" y="4" width="18" height="15" rx="3"/><path d="M3 11h18M7 15h.01M17 15h.01M7 19l-2 2m12-2 2 2"/>',
bike:'<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-8 4 8H6m4-8h4l4 8m-7-11h3"/>',
coffee:'<path d="M5 8h12v8a4 4 0 01-4 4H9a4 4 0 01-4-4zM17 10h2a2 2 0 010 4h-2M9 4v2m4-2v2"/>',
shirt:'<path d="M8 4l4 2 4-2 5 4-3 4-2-2v11H8V10l-2 2-3-4z"/>',
music:'<path d="M9 18V5l12-2v13M9 8l12-2"/><ellipse cx="6" cy="18" rx="3" ry="2"/><ellipse cx="18" cy="16" rx="3" ry="2"/>',
camera:'<path d="M3 8h4l2-3h6l2 3h4v12H3z"/><circle cx="12" cy="14" r="4"/>',
briefcase:'<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2"/>',
leaf:'<path d="M20 4c-9 0-15 4-15 11a5 5 0 005 5c7 0 11-7 10-16zM5 20l8-8"/>',
wrench:'<path d="M14 6a5 5 0 006 6l-9 9a2 2 0 01-3-3l9-9a5 5 0 01-6-6l3 3 3-1 1-3z"/>',
baby:'<circle cx="12" cy="13" r="8"/><path d="M9 12h.01M15 12h.01M9 16c2 2 4 2 6 0M12 5V2m-3 1h6"/>',
dumbbell:'<path d="M3 9v6m4-9v12m10-12v12m4-9v6M7 12h10"/>',
phone:'<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 18h4"/>',
laptop:'<rect x="4" y="4" width="16" height="12" rx="2"/><path d="M2 20h20l-2-4H4z"/>',
graduation:'<path d="M2 10l10-6 10 6-10 6zM6 13v5c4 3 8 3 12 0v-5m4-3v6"/>',
wallet:'<rect x="3" y="6" width="18" height="15" rx="2"/><path d="M3 9V5a2 2 0 012-2h13M15 13h6v4h-6a2 2 0 010-4z"/>',
heart:'<path d="M12 20s-8-4.800-8-10.500A4.500 4.500 0 0112 7a4.500 4.500 0 018 2.500C20 15.200 12 20 12 20z"/>',
film:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/>',
gift:'<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v8h14v-8M12 8v12M12 8c-2-4-6-3-5 0 .5 1.500 3 1 5 0zM12 8c2-4 6-3 5 0-.5 1.500-3 1-5 0z"/>',
book:'<path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2zM4 21h15"/>',
plane:'<path d="M21 3L10 14M21 3l-7 18-4-7-7-4z"/>',
paw:'<circle cx="7" cy="10" r="1.800"/><circle cx="17" cy="10" r="1.800"/><circle cx="10.500" cy="6" r="1.800"/><circle cx="13.500" cy="6" r="1.800"/><path d="M12 12c-3 0-5 3-4 5.500 1 2 3 1.500 4 1.500s3 .5 4-1.500c1-2.500-1-5.500-4-5.500z"/>',
tag:'<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.500" cy="8.500" r="1"/>',
trash:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
edit:'<path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L8 18l-4 1 1-4z"/>',
plus:'<path d="M12 5v14M5 12h14"/>',
chart:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
list:'<path d="M8 6h13M8 12h13M8 18h13M3.500 6h.01M3.500 12h.01M3.500 18h.01"/>',
grid:'<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',
left:'<path d="M15 5l-7 7 7 7"/>',right:'<path d="M9 5l7 7-7 7"/>',
backspace:'<path d="M9 4H20a2 2 0 012 2v12a2 2 0 01-2 2H9l-7-8zM13 9l5 6M18 9l-5 6"/>',
search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/>',
x:'<path d="M6 6l12 12M18 6L6 18"/>',
up:'<path d="M7 17L17 7M9 7h8v8"/>',down:'<path d="M7 7l10 10M17 9v8H9"/>',
csv:'<path d="M6 3h8l4 4v14H6zM14 3v4h4M9 13h6M9 17h6"/>',
save:'<path d="M12 4v12M6 10l6 6 6-6M4 20h16"/>',
load:'<path d="M12 16V4M6 10l6-6 6 6M4 20h16"/>'};
const ic=n=>`<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${IC[n]||IC.tag}</svg>`;
const PICK=['cart','home','bolt','wifi','fuel','bag','food','car','subway','bus','bike','coffee','shirt','music','camera','briefcase','leaf','wrench','baby','dumbbell','phone','laptop','graduation','wallet','heart','film','gift','book','plane','paw','tag'];
const COL=['#059669','#312E81','#B45309','#1E9BFF','#0284C7','#F0529C','#E8503A','#0F766E','#EF4B6C','#A855F7','#64748B','#84CC16','#DC2626','#2563EB','#0E7490','#7C3AED','#C026D3','#EA580C','#65A30D','#DB2777','#334155','#92400E','#CA8A04'];
const LEGACY_COLORS=new Map([['Groceries',['#2FBF71',COL[0]]],['Rent',['#6C63FF',COL[1]]],['Utilities',['#F5B700',COL[2]]],['Gas',['#FF7A45',COL[4]]],['Transport',['#14B8A6',COL[7]]]]);
const DEF=[['Groceries','cart',0],['Rent','home',1],['Utilities','bolt',2],['Phone & Internet','wifi',3],['Gas','fuel',4],['Shopping','bag',5],['Dining Out','food',6],['Transport','car',7],['TTC','subway',12],['Health','heart',8],['Fun','film',9],['Miscellaneous','tag',10]];
const CUR=['USD','EUR','GBP','CAD','AUD','INR','BDT','JPY','CNY','CHF','MXN','BRL'];
const KEY='pocketbook.v1';
const DATE_RE=/^\d{4}-\d{2}-\d{2}$/;

const fresh=()=>({cats:DEF.map((d,i)=>({id:'c'+i,name:d[0],icon:d[1],color:COL[d[2]]})),exp:[],currency:'CAD',categoryDefaultsAdded:true});
// Validates stored/imported data; colors and ids end up in HTML attributes, so they must be sanitized.
function normalize(d){
 if(!d||!Array.isArray(d.cats)||!Array.isArray(d.exp))return null;
 const addDefaultCategories=d.categoryDefaultsAdded!==true;
 const cats=d.cats.filter(c=>c&&c.id!=null&&c.name).map(c=>{
  const name=String(c.name).slice(0,24),migrateTtc=addDefaultCategories&&name.toLowerCase()==='ttc'&&c.icon==='car'&&c.color===COL[7];
  return{id:String(c.id),name,icon:migrateTtc?'subway':PICK.includes(c.icon)?c.icon:'tag',color:migrateTtc?COL[12]:/^#[0-9a-f]{6}$/i.test(c.color)?c.color:COL[10]};
 });
 if(addDefaultCategories)[['TTC','subway',COL[12]],['Miscellaneous','tag',COL[10]]].forEach(([name,icon,color],i)=>{
  if(!cats.some(c=>c.name.toLowerCase()===name.toLowerCase())){
   let id='c'+(DEF.length+i);
   while(cats.some(c=>c.id===id))id+='x';
   cats.push({id,name,icon,color});
  }
 });
 return{
  cats,
  exp:d.exp.filter(e=>e&&e.id!=null&&DATE_RE.test(e.date)&&isFinite(e.amt)&&+e.amt>0).map(e=>({id:String(e.id),cat:String(e.cat),amt:Math.round(+e.amt*100)/100,note:String(e.note||'').slice(0,40),date:e.date})),
  ...('budget' in d?{budget:Math.max(0,+d.budget||0)}:{}),
  currency:CUR.includes(d.currency)?d.currency:'CAD',
  categoryDefaultsAdded:true};
}
let S;
try{S=normalize(JSON.parse(localStorage.getItem(KEY)))}catch(e){S=null}
if(!S)S=fresh();
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){toast('Could not save – storage full?')}};

const $=id=>document.getElementById(id);
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let fmt,fmtC;
const setFmt=()=>{fmt=new Intl.NumberFormat('en-US',{style:'currency',currency:S.currency});fmtC=new Intl.NumberFormat('en-US',{style:'currency',currency:S.currency,notation:'compact',maximumFractionDigits:1})};
setFmt();
const money=n=>fmt.format(n);
const heroMoney=n=>fmt.formatToParts(n).map(p=>p.type==='currency'?`<span class="money-prefix">${esc(p.value)}</span>`:p.type==='decimal'||p.type==='fraction'?`<span class="money-cents">${esc(p.value)}</span>`:esc(p.value)).join('');
const sym=()=>fmt.formatToParts(0).find(p=>p.type==='currency').value;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const iso=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const today=()=>iso(new Date());
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,6);
const buzz=()=>navigator.vibrate&&navigator.vibrate(8);

let tab='ov',mk=today().slice(0,7),selCat=null,newIcon='tag',newCol=COL[0],editing=null,editingCat=null,expenseStep=0,expenseCalendarMonth=today().slice(0,7),backspaceTimer=null,backspaceHoldTriggered=false,fcat=null,q='',undoFn=null,recentFilter=null;
const categoryColor=c=>{const legacy=LEGACY_COLORS.get(c.name);return legacy&&c.color.toUpperCase()===legacy[0]?legacy[1]:c.color};
const cat=id=>{const c=S.cats.find(c=>c.id===id)||{id,name:'Other',icon:'tag',color:'#94A3B8'};return {...c,color:categoryColor(c)}};
const iconAvailable=icon=>!S.cats.some(c=>c.id!==editingCat&&c.icon===icon);
const colorAvailable=color=>!S.cats.some(c=>c.id!==editingCat&&categoryColor(c).toUpperCase()===color.toUpperCase());
function ensureNewCategoryChoices(){
 if(!iconAvailable(newIcon))newIcon=PICK.find(iconAvailable)||null;
 if(!colorAvailable(newCol))newCol=COL.find(colorAvailable)||null;
}
const monthExp=k=>S.exp.filter(e=>e.date.slice(0,7)===k);
const sum=a=>a.reduce((t,e)=>t+e.amt,0);
const mlabel=k=>new Date(k+'-15T12:00').toLocaleDateString('en-US',{month:'long',year:'numeric'});
const shift=(k,n)=>{const d=new Date(k+'-15T12:00');d.setMonth(d.getMonth()+n);return iso(d).slice(0,7)};
const latestMonth=()=>S.exp.reduce((latest,e)=>e.date.slice(0,7)>latest?e.date.slice(0,7):latest,today().slice(0,7));
function dayLabel(s){
 const y=new Date();y.setDate(y.getDate()-1);
 if(s===today())return'Today';
 if(s===iso(y))return'Yesterday';
 return new Date(s+'T12:00').toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'});
}
function toast(m,undo){
 const t=$('toast');
 t.innerHTML=`<span>${esc(m)}</span>${undo?'<button data-a="undo">Undo</button>':''}`;
 undoFn=undo||null;
 t.classList.add('show');clearTimeout(t._h);
 t._h=setTimeout(()=>{t.classList.remove('show');undoFn=null},undo?4500:1800);
}
function count(el,to){
 if(reduced.matches){el.innerHTML=heroMoney(to);return}
 const t0=performance.now();
 (function f(t){const p=Math.min(1,(t-t0)/1000),e=1-Math.pow(1-p,3);el.innerHTML=heroMoney(to*e);if(p<1)requestAnimationFrame(f)})(t0);
}
function byCat(list){const m={};list.forEach(e=>m[e.cat]=(m[e.cat]||0)+e.amt);return Object.entries(m).map(([id,v])=>({id,v,c:cat(id)})).sort((a,b)=>b.v-a.v)}
function categoryPercentages(categories){
 const total=categories.reduce((n,x)=>n+x.v,0);
 const shares=categories.map(x=>{const exact=total?x.v/total*100:0,pct=Math.floor(exact);return {...x,pct,remainder:exact-pct}});
 const remaining=total?100-shares.reduce((n,x)=>n+x.pct,0):0;
 [...shares].sort((a,b)=>b.remainder-a.remainder).slice(0,remaining).forEach(x=>x.pct++);
 return shares;
}
const chartCategories=list=>categoryPercentages(byCat(list));
const empty=(msg,icon)=>`<div class="empty"><div class="eic">${ic(icon)}</div>${msg}</div>`;
const catIc=(c,cls='')=>`<div class="ic ${cls}" style="background:${categoryColor(c)}">${ic(c.icon)}</div>`;

function recentContent(list,categories){
 const colors=new Map(categories.map(x=>[x.id,x.c.color]));
 const filtered=list.filter(e=>!recentFilter||recentFilter.ids.includes(e.cat))
  .sort((a,b)=>b.date.localeCompare(a.date)||b.id.localeCompare(a.id)).slice(0,4);
 const filter=recentFilter?`<button class="recent-filter" data-a="clear-recent" aria-label="Clear ${esc(recentFilter.label)} filter">${esc(recentFilter.label)} ${ic('x')}<span>Clear filter</span></button>`:'';
 if(!filtered.length)return filter+empty(recentFilter?'No transactions in this category.':'No transactions yet this month.','list');
 return filter+`<div class="recent-list">${filtered.map(e=>{
  const c=cat(e.cat),date=new Date(e.date+'T12:00').toLocaleDateString('en-US',{month:'short',day:'numeric'});
  return `<button class="recent-row" data-a="ee" data-id="${esc(e.id)}">${catIc({...c,color:colors.get(e.cat)})}<span class="recent-details"><b>${esc(e.note||c.name)}</b><small>${esc(c.name)} · ${date}</small></span><span class="amt">${money(e.amt)}</span></button>`;
 }).join('')}</div>`;
}

function updateRecent(){
 const list=monthExp(mk);
 $('recent-body').innerHTML=recentContent(list,chartCategories(list));
}

function overview(list,tot){
 const now=today(),cur=now.slice(0,7),[y,m]=mk.split('-').map(Number),dim=new Date(y,m,0).getDate();
 const elapsed=mk===cur?+now.slice(8):mk<cur?dim:0;
 const avg=elapsed?tot/elapsed:0;
 const prev=sum(monthExp(shift(mk,-1))),diff=prev?(tot-prev)/prev*100:null;
 let h=`<div class="card hero tv"><small>Spent in ${new Date(mk+'-15T12:00').toLocaleDateString('en-US',{month:'long'})}</small><div class="big" id="big">${heroMoney(0)}</div>`;
 const trend=diff==null?'<b class="no-prior">No prior data</b>':`<b class="${diff>0?'up':'dn'}">${ic(diff>0?'up':'down')}${Math.abs(Math.round(diff))}%</b>`;
 h+=`<div class="stats"><div class="stat"><small>Daily average</small><b>${money(avg)}</b></div><div class="stat"><small>Expenses</small><b>${list.length}</b></div><div class="stat"><small>vs last month</small>${trend}</div></div></div>`;
 const bc=chartCategories(list);
 h+=`<div class="card tv"><h2>Spending by category</h2>`;
 if(!bc.length)h+=empty('No expenses yet this month.<br>Tap the + button to add one.','chart');
 else if(!tot)h+=empty('No spending yet this month.','chart');
 else{
  const small=bc.filter(x=>x.v/tot<.05);
  const slices=small.length>1?bc.filter(x=>x.v/tot>=.05):[...bc];
  if(small.length>1)slices.push({v:small.reduce((n,x)=>n+x.v,0),pct:small.reduce((n,x)=>n+x.pct,0),c:{name:'Other',color:'#64748B'},group:true});
  const R=88,C=2*Math.PI*R;let off=0,seg='';
  slices.forEach(x=>{const share=x.v/tot*C,gap=slices.length>1?Math.min(3,share*.2):0,L=share-gap;seg+=`<circle class="slice" cx="115" cy="115" r="${R}" stroke="${x.c.color}" stroke-dasharray="0 ${C}" stroke-dashoffset="${-(off+gap/2)}" data-d="${L} ${C-L}" data-a="cs" ${x.group?'data-group="true"':`data-id="${esc(x.id)}"`} role="button" tabindex="0" aria-label="${esc(`${x.c.name}: ${money(x.v)}, ${x.pct}%`)}" aria-pressed="false"/>`;off+=share});
  const chartLabel=bc.map(x=>`${x.c.name}: ${money(x.v)} (${x.pct}%)`).join(', ');
  h+=`<div class="donutw"><svg viewBox="0 0 230 230" role="group" aria-label="${esc('Spending by category: '+chartLabel)}"><circle cx="115" cy="115" r="${R}" stroke="var(--sf2)"/>${seg}</svg><div class="ctr" id="chart-center" aria-live="polite"><span>Top category</span><b>${bc[0].pct}%</b><span>${esc(bc[0].c.name)}</span></div></div>
  <div class="legend" aria-label="Categories">${bc.map(x=>`<button class="lg" data-a="cs" data-id="${esc(x.id)}" aria-pressed="false">${catIc(x.c)}<span class="lg-main"><span class="lg-name">${esc(x.c.name)}</span><span class="lg-track"><i style="background:${x.c.color}" data-w="${x.v/tot*100}"></i></span></span><span class="lg-value"><span>${x.pct}%</span><strong>${money(x.v)}</strong></span></button>`).join('')}</div>`;
 }
 h+=`</div>`;
 const ms=[];for(let i=5;i>=0;i--)ms.push(shift(mk,-i));
 const vals=ms.map(k=>sum(monthExp(k))),mx=Math.max(...vals,1);
 h+=`<div class="card tv"><h2>Last 6 months</h2><div class="bars">${ms.map((k,i)=>{const height=vals[i]/mx*80;return `<button class="bar ${k===mk?'cur':''}" data-a="gm" data-v="${k}" aria-label="${mlabel(k)}: ${money(vals[i])}"><span class="bar-track"><em style="bottom:calc(${height}% + 4px)">${vals[i]?fmtC.format(vals[i]):''}</em><i data-h="${height}"></i></span><span>${new Date(k+'-15T12:00').toLocaleDateString('en-US',{month:'short'})}</span></button>`}).join('')}</div></div>`;
 h+=`<div class="card tv"><div class="recent-head"><h2>Recent transactions</h2><button class="see-all" data-a="all-recent">See all</button></div><div id="recent-body" aria-live="polite">${recentContent(list,bc)}</div></div>`;
 return h;
}

function selectChartCategory(id,group){
 const bc=categoryPercentages(byCat(monthExp(mk))),tot=sum(monthExp(mk));
 const small=bc.filter(x=>x.v/tot<.05);
 const selected=group?{v:small.reduce((n,x)=>n+x.v,0),pct:small.reduce((n,x)=>n+x.pct,0),c:{name:'Other'}}:bc.find(x=>x.id===id);
 if(!selected)return;
 $('chart-center').innerHTML=`<span>${group?'Grouped categories':'Selected category'}</span><b>${selected.pct}%</b><span>${esc(selected.c.name)}</span><span>${money(selected.v)}</span>${group?'':`<button class="chart-link" data-a="fc" data-id="${esc(id)}">View expenses</button>`}`;
 document.querySelectorAll('[data-a="cs"]').forEach(el=>{
  const active=group?el.dataset.group==='true':el.dataset.id===id;
  el.setAttribute('aria-pressed',String(active));
 });
 recentFilter={month:mk,ids:group?small.map(x=>x.id):[id],label:selected.c.name,group};
 updateRecent();
}

function exList(){
 const qq=q.trim().toLowerCase();
 const list=monthExp(mk).filter(e=>(!fcat||e.cat===fcat)&&(!qq||(e.note+' '+cat(e.cat).name+' '+e.amt).toLowerCase().includes(qq)))
  .sort((a,b)=>b.date.localeCompare(a.date)||b.id.localeCompare(a.id));
 let h=`<h2>${list.length} expense${list.length===1?'':'s'} · ${money(sum(list))}</h2>`;
 if(!list.length)return h+(qq||fcat?empty('No matches found.','search'):empty('Nothing here yet.<br>Add your first expense with the + button.','list'));
 let last='';
 list.forEach((e,i)=>{
  if(e.date!==last){last=e.date;h+=`<div class="dh"><span>${dayLabel(e.date)}</span><span>${money(sum(list.filter(x=>x.date===e.date)))}</span></div>`}
  const c=cat(e.cat);
  h+=`<div class="row tap li" role="button" tabindex="0" data-a="ee" data-id="${esc(e.id)}" style="animation-delay:${Math.min(i,10)*30}ms">${catIc(c)}<div class="rb"><b>${esc(e.note||c.name)}</b><small>${esc(c.name)}</small></div><div class="amt">${money(e.amt)}</div><button class="del" data-a="dx" data-id="${esc(e.id)}" aria-label="Delete expense">${ic('trash')}</button></div>`;
 });
 return h;
}

function expenses(){
 const fc=fcat&&cat(fcat);
 return`<div class="card tv"><div class="search">${ic('search')}<input id="q" type="search" placeholder="Search notes, categories, amounts" value="${esc(q)}" aria-label="Search expenses"></div>
 ${fc?`<button class="fchip" data-a="cf" aria-label="Clear category filter">${catIc(fc)}${esc(fc.name)}${ic('x')}</button>`:''}
 <div id="xl">${exList()}</div></div>`;
}

function manage(){
 const categoryToEdit=S.cats.find(c=>c.id===editingCat);
 if(editingCat&&!categoryToEdit)editingCat=null;
 ensureNewCategoryChoices();
 const spent={};monthExp(today().slice(0,7)).forEach(e=>spent[e.cat]=(spent[e.cat]||0)+e.amt);
 return`<div class="card tv"><h2>Your categories · this month</h2>${S.cats.length?`<div class="grid">${S.cats.map((c,i)=>`<div class="cc li" role="button" tabindex="0" data-a="fc" data-id="${esc(c.id)}" style="animation-delay:${i*30}ms">${catIc(c)}<span>${esc(c.name)}<small>${money(spent[c.id]||0)}</small></span><button class="del edit-category" data-a="ec" data-id="${esc(c.id)}" aria-label="Edit ${esc(c.name)}">${ic('edit')}</button><button class="del" data-a="dc" data-id="${esc(c.id)}" aria-label="Delete ${esc(c.name)}">${ic('trash')}</button></div>`).join('')}</div>`:empty('No categories yet.','grid')}</div>
 <div class="card tv"><h2>${categoryToEdit?'Edit category':'Add a category'}</h2><input id="cn" placeholder="Name, e.g. Pets" maxlength="24" aria-label="Category name" value="${categoryToEdit?esc(categoryToEdit.name):''}">
 <div class="pick" id="pi">${PICK.map(p=>`<button data-a="pi" data-v="${p}" class="${p===newIcon?'on':''}" aria-label="${p} icon" ${iconAvailable(p)?'':'disabled'}>${ic(p)}</button>`).join('')}</div>
 <div class="pick sw" id="pc">${COL.map(c=>`<button data-a="pcol" data-v="${c}" style="background:${c}" class="${c===newCol?'on':''}" aria-label="Color ${c}" ${colorAvailable(c)?'':'disabled'}></button>`).join('')}</div>
 <button class="btn" data-a="ac" ${newIcon&&newCol?'':'disabled'}>${categoryToEdit?'Save category':'Add category'}</button>${categoryToEdit?'<button class="btn ghost" data-a="cancel-edit-cat">Cancel</button>':''}</div>
 <div class="card tv"><h2>Preferences</h2>
 <label class="set"><span>Currency</span><select id="cur">${CUR.map(c=>`<option ${c===S.currency?'selected':''}>${c}</option>`).join('')}</select></label></div>
 <div class="card tv"><h2>Your data</h2><div class="acts">
 <button class="act" data-a="csv">${ic('csv')}Export CSV</button><button class="act" data-a="bk">${ic('save')}Backup</button><button class="act" data-a="rs">${ic('load')}Restore</button></div>
 <button class="btn ghost" data-a="reset">Reset all data</button>
 <p class="note">Everything is stored privately on this device.</p></div>`;
}

function render(){
 const a=$('app'),list=monthExp(mk),tot=sum(list);
 if(recentFilter&&recentFilter.month!==mk)recentFilter=null;
 const tabs=$('tabs');
 let h=tab==='cat'?`<header><h1>Manage</h1></header>`
  :`<header><h1>Pocketbook</h1><div class="hr"><div class="mon"><button data-a="pm" aria-label="Previous month">${ic('left')}</button><button class="ml" data-a="tm" title="Jump to this month" aria-label="${mlabel(mk)}">${new Date(mk+'-15T12:00').toLocaleDateString('en-US',{month:'short',year:'numeric'})}</button><button data-a="nm" aria-label="Next month" ${mk>=latestMonth()?'disabled':''}>${ic('right')}</button></div></div></header>`;
 h+=tab==='ov'?overview(list,tot):tab==='ex'?expenses():manage();
 a.innerHTML=h;
 requestAnimationFrame(()=>requestAnimationFrame(()=>{
  a.querySelectorAll('[data-d]').forEach(e=>e.setAttribute('stroke-dasharray',e.dataset.d));
  a.querySelectorAll('[data-w]').forEach(e=>e.style.width=e.dataset.w+'%');
  a.querySelectorAll('[data-h]').forEach(e=>e.style.height=e.dataset.h+'%');
  const b=$('big');if(b)count(b,tot);
 }));
 const T=[['ov','chart','Overview'],['ex','list','Expenses'],['add','plus','Add expense'],['cat','grid','Manage']];
 tabs.innerHTML=T.map(t=>t[0]==='add'?`<button class="fab" id="fab" data-a="add" aria-label="${t[2]}">${ic(t[1])}</button>`:`<button data-a="tab" data-v="${t[0]}" class="${tab===t[0]?'on':''}" aria-label="${t[2]}" ${tab===t[0]?'aria-current="page"':''}>${ic(t[1])}<span>${t[2]}</span></button>`).join('');
 if(tab==='ov'&&recentFilter){
  if(tot&&(recentFilter.group?a.querySelector('[data-group]'):list.some(e=>e.cat===recentFilter.ids[0])))selectChartCategory(recentFilter.ids[0],recentFilter.group);
  else{recentFilter=null;updateRecent()}
 }
}

function openSheet(id){
 if(!S.cats.length){toast('Add a category first');tab='cat';render();return}
 const e=id?S.exp.find(x=>x.id===id):null;
 editing=e?e.id:null;
 expenseStep=0;
 const initialDate=e?e.date:mk===today().slice(0,7)?today():mk+'-01';
 expenseCalendarMonth=initialDate.slice(0,7);
 selCat=e?e.cat:selCat&&S.cats.some(c=>c.id===selCat)?selCat:S.cats[0].id;
 $('sheet').innerHTML=`<div class="shtop"><h3 id="shh">${e?'Edit expense':'New expense'}</h3><button class="del" data-a="close" aria-label="Close">${ic('x')}</button></div>
 <div class="expense-step" data-step="0">
  <label class="amtw"><span>${esc(sym())}</span><input id="ea" type="text" inputmode="decimal" placeholder="0.00" aria-label="Amount" value="${e?e.amt:''}" readonly><span class="amt-cursor" aria-hidden="true">|</span></label>
  <div class="quick-amounts" aria-label="Quick add amount">${[5,10,20,50].map(n=>`<button type="button" data-a="quick-amount" data-amount="${n}">+$${n}</button>`).join('')}</div>
  <div class="calc" aria-label="Amount calculator">
   ${['1','2','3','4','5','6','7','8','9','.','0','back'].map(k=>k==='back'?`<button type="button" data-a="calc" data-key="back" aria-label="Delete digit">${ic('backspace')}</button>`:`<button type="button" data-a="calc" data-key="${k}">${k}</button>`).join('')}
  </div>
  <button class="btn" id="amount-next" data-a="expense-next" disabled>Next</button>
 </div>
 <div class="expense-step" data-step="1" hidden>
  <button type="button" class="amount-context" data-a="expense-back"><strong id="amount-context-value">${esc(money(expenseAmount()))}</strong><span>· Edit</span></button>
  <div class="chips" id="chips">${S.cats.map(c=>`<button class="chip ${c.id===selCat?'on':''}" data-a="sc" data-id="${esc(c.id)}" aria-pressed="${c.id===selCat}">${catIc(c)}${esc(c.name)}</button>`).join('')}</div>
  <div class="step-actions"><button class="btn ghost back-btn" data-a="expense-back">Back</button><button class="btn" data-a="expense-next">Next</button></div>
 </div>
 <div class="expense-step" data-step="2" hidden>
  <div class="flow-context" id="date-context"></div>
  <div class="calendar" id="expense-calendar"></div>
  <input id="ed" type="hidden" value="${initialDate}">
  <div class="step-actions"><button class="btn ghost back-btn" data-a="expense-back">Back</button><button class="btn" data-a="expense-next">Next</button></div>
 </div>
 <div class="expense-step" data-step="3" hidden>
  <input id="en" placeholder="Note (optional)" maxlength="40" aria-label="Note" value="${e?esc(e.note):''}">
  <button class="btn" id="save-exp" data-a="se" style="margin-top:10px">${e?'Save changes':'Save expense'}</button>
  <div class="step-actions"><button class="btn ghost back-btn" data-a="expense-back">Back</button>${e?`<button class="btn ghost" data-a="dx" data-id="${esc(e.id)}">Delete expense</button>`:''}</div>
 </div>`;
 $('ov').classList.add('open');
 updateExpenseForm();
 renderExpenseCalendar();
 showExpenseStep(0);
}
const close=()=>{$('ov').classList.remove('open');editing=null};

function selectExpenseCategory(id){
 selCat=id;
 document.querySelectorAll('#chips .chip').forEach(c=>{
  const selected=c.dataset.id===id;c.classList.toggle('on',selected);c.setAttribute('aria-pressed',String(selected));
 });
 updateDateContext();
}
const expenseAmount=()=>Number.parseFloat($('ea')?.value||'')||0;
function updateDateContext(){
 const context=$('date-context');if(!context)return;
 context.innerHTML=`<strong>${esc(money(expenseAmount()))}</strong><span>·</span><span>${esc(cat(selCat).name)}</span>`;
}
function showExpenseStep(step){
 if(step>0&&expenseAmount()<=0){toast('Enter an amount greater than zero');return}
 expenseStep=Math.max(0,Math.min(3,step));
 document.querySelectorAll('.expense-step').forEach(el=>{el.hidden=Number(el.dataset.step)!==expenseStep});
 const titles=['Enter amount','Select category','Select date','Add a note'];
 $('shh').textContent=titles[expenseStep];
}
function renderExpenseCalendar(){
 const [year,month]=expenseCalendarMonth.split('-').map(Number);
 const firstDay=new Date(year,month-1,1).getDay();
 const dayCount=new Date(year,month,0).getDate();
 const selected=$('ed').value;
 const weeks=Math.max(5,Math.ceil((firstDay+dayCount)/7));
 const cells=Array.from({length:weeks*7},(_,i)=>{
  const day=i-firstDay+1;
  if(day<1||day>dayCount)return'<span class="calendar-empty"></span>';
  const date=`${expenseCalendarMonth}-${String(day).padStart(2,'0')}`;
  return`<button type="button" class="calendar-day${selected===date?' selected':''}${date===today()?' today':''}" data-a="cal-day" data-date="${date}" aria-label="${new Date(year,month-1,day).toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric',year:'numeric'})}" aria-pressed="${selected===date}">${day}</button>`;
 }).join('');
 $('expense-calendar').innerHTML=`<div class="calendar-head"><button type="button" data-a="cal-prev" aria-label="Previous month">${ic('left')}</button><strong>${new Date(year,month-1,1).toLocaleDateString('en-US',{month:'long',year:'numeric'})}</strong><button type="button" data-a="cal-next" aria-label="Next month">${ic('right')}</button></div><div class="calendar-grid calendar-weekdays" aria-hidden="true">${['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d=>`<span>${d}</span>`).join('')}</div><div class="calendar-grid calendar-days weeks-${weeks}">${cells}</div>`;
}
function enterCalculatorKey(key){
 const input=$('ea');if(!input)return;
 let value=input.value;
 if(key==='back'){input.value=value.slice(0,-1)}
 else if(key==='.'&&!value.includes('.')){input.value=value?value+'.':'0.'}
 else if(key!=='.'||value){
  if(value.includes('.')){
  if(value.split('.')[1].length>=2)return;
  }
  if(value==='0'&&key!=='0'&&key!=='.')value='';
  input.value=(value||'')+key;
 }
 updateExpenseForm();
}
function updateExpenseForm(){
 const amount=expenseAmount();
 $('ea')?.closest('.amtw').classList.toggle('filled',amount>0);
 if($('amount-context-value'))$('amount-context-value').textContent=money(amount);
 updateDateContext();
 if($('amount-next'))$('amount-next').disabled=!Number.isFinite(amount)||Math.round(amount*100)<=0;
 if($('save-exp'))$('save-exp').disabled=!Number.isFinite(amount)||Math.round(amount*100)<=0;
}
function addQuickAmount(amount){
 const current=Math.round(expenseAmount()*100);
 $('ea').value=((current+amount*100)/100).toFixed(2);
 updateExpenseForm();
}
function saveExp(){
 const amount=expenseAmount(),date=$('ed').value;
 if(!Number.isFinite(amount)||Math.round(amount*100)<=0){toast('Enter an amount greater than zero');$('ea').focus();return}
 if(!DATE_RE.test(date)){toast('Choose a date');$('ed').focus();return}
 const data={cat:selCat,amt:Math.round(amount*100)/100,note:$('en').value.trim(),date};
 const e=editing&&S.exp.find(x=>x.id===editing);
 if(e)Object.assign(e,data);else S.exp.push({id:uid(),...data});
 save();buzz();close();mk=date.slice(0,7);render();toast(e?'Changes saved':'Expense saved');
}
function delExp(id){
 const i=S.exp.findIndex(e=>e.id===id);if(i<0)return;
 const [item]=S.exp.splice(i,1);
 save();buzz();if($('ov').classList.contains('open'))close();render();
 toast('Expense deleted',()=>S.exp.splice(i,0,item));
}
function delCat(id){
 const i=S.cats.findIndex(c=>c.id===id);if(i<0)return;
 const n=S.exp.filter(e=>e.cat===id).length;
 if(n&&!confirm(`${S.cats[i].name} has ${n} expense${n>1?'s':''}. They'll show as “Other”. Delete anyway?`))return;
 const [item]=S.cats.splice(i,1);
 if(editingCat===id)editingCat=null;
 save();buzz();render();
 toast(item.name+' deleted',()=>S.cats.splice(i,0,item));
}
function editCat(id){
 const category=S.cats.find(c=>c.id===id);if(!category)return;
 editingCat=id;newIcon=category.icon;newCol=categoryColor(category);render();
 $('cn').focus({preventScroll:true});
 $('cn').scrollIntoView({behavior:'smooth',block:'center'});
}
function saveCat(){
 const n=$('cn').value.trim();
 if(!n){toast('Give it a name');$('cn').focus();return}
 if(S.cats.some(c=>c.id!==editingCat&&c.name.toLowerCase()===n.toLowerCase())){toast('That category already exists');return}
 if(!newIcon||!newCol||!iconAvailable(newIcon)||!colorAvailable(newCol)){toast('Choose an unused icon and color');return}
 const category=editingCat&&S.cats.find(c=>c.id===editingCat);
 if(category){
  Object.assign(category,{name:n,icon:newIcon,color:newCol});editingCat=null;
  save();buzz();render();toast(n+' updated');return;
 }
 S.cats.push({id:'c'+uid(),name:n,icon:newIcon,color:newCol});save();buzz();render();toast(n+' added');
}
function download(name,text,type){
 const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([text],{type}));a.download=name;
 document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),1000);
}
// Quote CSV cells and neutralize formula injection when opened in spreadsheets.
const cell=v=>{let s=String(v);if(/^[=+\-@]/.test(s))s="'"+s;return'"'+s.replace(/"/g,'""')+'"'};
function exportCsv(){
 if(!S.exp.length){toast('No expenses to export');return}
 const rows=[['Date','Category','Note','Amount','Currency'],...[...S.exp].sort((a,b)=>a.date.localeCompare(b.date)).map(e=>[e.date,cat(e.cat).name,e.note,e.amt.toFixed(2),S.currency])];
 download(`pocketbook-${today()}.csv`,rows.map(r=>r.map(cell).join(',')).join('\n'),'text/csv');toast('CSV exported');
}
function restore(){
 const inp=document.createElement('input');inp.type='file';inp.accept='.json,application/json';
 inp.onchange=async()=>{
  const f=inp.files[0];if(!f)return;
  let d;try{d=normalize(JSON.parse(await f.text()))}catch(e){d=null}
  if(!d){toast('That file is not a valid backup');return}
  if(!confirm(`Replace current data with ${d.exp.length} expenses and ${d.cats.length} categories from this backup?`))return;
  S=d;setFmt();save();render();toast('Backup restored');
 };
 inp.click();
}

document.addEventListener('pointerdown',ev=>{
 if(!ev.target.closest('[data-a="calc"][data-key="back"]'))return;
 if(backspaceTimer)clearTimeout(backspaceTimer);
 backspaceHoldTriggered=false;
 backspaceTimer=setTimeout(()=>{
  if(!$('ea'))return;
  $('ea').value='';updateExpenseForm();backspaceHoldTriggered=true;backspaceTimer=null;
 },550);
});
document.addEventListener('pointerup',()=>{
 if(backspaceTimer){clearTimeout(backspaceTimer);backspaceTimer=null}
});
document.addEventListener('pointercancel',()=>{
 if(backspaceTimer){clearTimeout(backspaceTimer);backspaceTimer=null}
 backspaceHoldTriggered=false;
});
document.addEventListener('contextmenu',ev=>{
 if(ev.target.closest('[data-a="calc"][data-key="back"]'))ev.preventDefault();
});
document.addEventListener('click',ev=>{
 if(ev.target===$('ov')){close();return}
 const b=ev.target.closest('[data-a]');if(!b)return;
 const a=b.dataset.a,id=b.dataset.id,v=b.dataset.v;
 if(backspaceHoldTriggered&&!(a==='calc'&&b.dataset.key==='back'))backspaceHoldTriggered=false;
 if(a==='tab'){tab=v;fcat=null;q='';render();scrollTo({top:0})}
 else if(a==='add')openSheet();
 else if(a==='pm'){mk=shift(mk,-1);render()}
 else if(a==='nm'&&mk<latestMonth()){mk=shift(mk,1);render()}
 else if(a==='tm'){mk=today().slice(0,7);render()}
 else if(a==='gm'){mk=v;render()}
 else if(a==='cs')selectChartCategory(id,b.dataset.group==='true');
 else if(a==='clear-recent'){
  recentFilter=null;updateRecent();
  document.querySelectorAll('[data-a="cs"]').forEach(el=>el.setAttribute('aria-pressed','false'));
  const top=chartCategories(monthExp(mk))[0];
  if(top)$('chart-center').innerHTML=`<span>Top category</span><b>${top.pct}%</b><span>${esc(top.c.name)}</span>`;
 }
 else if(a==='all-recent'){recentFilter=null;fcat=null;q='';tab='ex';render();scrollTo({top:0})}
 else if(a==='fc'){fcat=id;q='';tab='ex';render();scrollTo({top:0})}
 else if(a==='ec')editCat(id);
 else if(a==='cf'){fcat=null;render()}
 else if(a==='ee')openSheet(id);
 else if(a==='close')close();
 else if(a==='sc')selectExpenseCategory(id);
 else if(a==='calc'){
  if(b.dataset.key==='back'&&backspaceHoldTriggered)backspaceHoldTriggered=false;
  else enterCalculatorKey(b.dataset.key);
 }
 else if(a==='quick-amount')addQuickAmount(Number(b.dataset.amount));
 else if(a==='expense-next')showExpenseStep(expenseStep+1);
 else if(a==='expense-back')showExpenseStep(expenseStep-1);
 else if(a==='cal-prev'){expenseCalendarMonth=shift(expenseCalendarMonth,-1);renderExpenseCalendar()}
 else if(a==='cal-next'){expenseCalendarMonth=shift(expenseCalendarMonth,1);renderExpenseCalendar()}
 else if(a==='cal-day'){$('ed').value=b.dataset.date;updateExpenseForm();renderExpenseCalendar()}
 else if(a==='se')saveExp();
 else if(a==='dx')delExp(id);
 else if(a==='dc')delCat(id);
 else if(a==='pi'&&iconAvailable(v)){newIcon=v;document.querySelectorAll('#pi button').forEach(x=>x.classList.toggle('on',x===b))}
 else if(a==='pcol'&&colorAvailable(v)){newCol=v;document.querySelectorAll('#pc button').forEach(x=>x.classList.toggle('on',x===b))}
 else if(a==='ac')saveCat();
 else if(a==='cancel-edit-cat'){editingCat=null;render()}
 else if(a==='undo'&&undoFn){undoFn();undoFn=null;save();render();toast('Restored')}
 else if(a==='csv')exportCsv();
 else if(a==='bk'){download(`pocketbook-backup-${today()}.json`,JSON.stringify(S,null,1),'application/json');toast('Backup saved')}
 else if(a==='rs')restore();
 else if(a==='reset'){if(confirm('Delete all expenses and categories? This cannot be undone.')){const{currency}=S;S={...fresh(),currency};save();render();toast('All data reset')}}
});
document.addEventListener('change',ev=>{
 const t=ev.target;
 if(t.id==='cur'){S.currency=t.value;setFmt();save();render();toast('Currency: '+S.currency)}
});
document.addEventListener('input',ev=>{
 if(ev.target.id==='q'){q=ev.target.value;$('xl').innerHTML=exList()}
 else if(ev.target.id==='ea')updateExpenseForm();
});
document.addEventListener('keydown',ev=>{
 const t=ev.target;
 if($('ov').classList.contains('open')){
  if(ev.key==='Escape'){close();$('fab').focus();return}
  if(ev.key==='Enter'&&t.tagName==='INPUT'){ev.preventDefault();if(expenseStep<3)showExpenseStep(expenseStep+1);else saveExp();return}
 }
 if(ev.key==='Enter'&&t.id==='cn'){saveCat();return}
 if((ev.key==='Enter'||ev.key===' ')&&t.matches('[role=button][data-a]')){ev.preventDefault();t.dispatchEvent(new MouseEvent('click',{bubbles:true}))}
});
let sx=0,sy=0;
$('app').addEventListener('touchstart',e=>{sx=e.touches[0].clientX;sy=e.touches[0].clientY},{passive:true});
$('app').addEventListener('touchend',e=>{
 if(tab==='cat')return;
 const dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;
 if(Math.abs(dx)>70&&Math.abs(dy)<40&&(dx>0||mk<latestMonth())){mk=shift(mk,dx<0?1:-1);render()}
},{passive:true});
render();
