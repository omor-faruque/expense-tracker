const IC={cart:'<path d="M3 4h2l2.4 10.2a2 2 0 002 1.8h7.2a2 2 0 002-1.5L20 8H6"/><circle cx="10" cy="20" r="1.3"/><circle cx="17" cy="20" r="1.3"/>',
home:'<path d="M3 11l9-8 9 8M5 10v10h14V10M10 20v-6h4v6"/>',
bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
wifi:'<path d="M2 9a15 15 0 0120 0M5 12.5a10 10 0 0114 0M8.5 16a5 5 0 017 0"/><circle cx="12" cy="19.5" r="1"/>',
fuel:'<path d="M4 21V5a2 2 0 012-2h6a2 2 0 012 2v16M3 21h12M14 9h2.5a1.5 1.5 0 011.500 1.500v5a1.500 1.500 0 003 0V8l-3-3M6 8h6"/>',
bag:'<path d="M5 8h14l-1 12H6zM9 8V6a3 3 0 016 0v2"/>',
food:'<path d="M7 3v8a2 2 0 002 2v8M11 3v8a2 2 0 01-2 2M7 3v4M18 21V3c-2 1-3 4-3 8h3"/>',
car:'<path d="M4 16V12l2-5h12l2 5v4zM4 16v3M20 16v3"/><circle cx="8" cy="14" r=".6"/><circle cx="16" cy="14" r=".6"/>',
heart:'<path d="M12 20s-8-4.800-8-10.500A4.500 4.500 0 0112 7a4.500 4.500 0 018 2.500C20 15.200 12 20 12 20z"/>',
film:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/>',
gift:'<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v8h14v-8M12 8v12M12 8c-2-4-6-3-5 0 .5 1.500 3 1 5 0zM12 8c2-4 6-3 5 0-.5 1.500-3 1-5 0z"/>',
book:'<path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2zM4 21h15"/>',
plane:'<path d="M21 3L10 14M21 3l-7 18-4-7-7-4z"/>',
paw:'<circle cx="7" cy="10" r="1.800"/><circle cx="17" cy="10" r="1.800"/><circle cx="10.500" cy="6" r="1.800"/><circle cx="13.500" cy="6" r="1.800"/><path d="M12 12c-3 0-5 3-4 5.500 1 2 3 1.500 4 1.500s3 .5 4-1.500c1-2.500-1-5.500-4-5.500z"/>',
tag:'<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.500" cy="8.500" r="1"/>',
trash:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
plus:'<path d="M12 5v14M5 12h14"/>',
chart:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
list:'<path d="M8 6h13M8 12h13M8 18h13M3.500 6h.01M3.500 12h.01M3.500 18h.01"/>',
grid:'<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',
left:'<path d="M15 5l-7 7 7 7"/>',right:'<path d="M9 5l7 7-7 7"/>',
search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
x:'<path d="M6 6l12 12M18 6L6 18"/>',
up:'<path d="M7 17L17 7M9 7h8v8"/>',down:'<path d="M7 7l10 10M17 9v8H9"/>',
csv:'<path d="M6 3h8l4 4v14H6zM14 3v4h4M9 13h6M9 17h6"/>',
save:'<path d="M12 4v12M6 10l6 6 6-6M4 20h16"/>',
load:'<path d="M12 16V4M6 10l6-6 6 6M4 20h16"/>'};
const ic=n=>`<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${IC[n]||IC.tag}</svg>`;
const PICK=['cart','home','bolt','wifi','fuel','bag','food','car','heart','film','gift','book','plane','paw','tag'];
const COL=['#2FBF71','#6C63FF','#F5B700','#1E9BFF','#FF7A45','#F0529C','#E8503A','#14B8A6','#EF4B6C','#A855F7','#64748B','#84CC16'];
const DEF=[['Groceries','cart',0],['Rent','home',1],['Utilities','bolt',2],['Phone & Internet','wifi',3],['Gas','fuel',4],['Shopping','bag',5],['Dining Out','food',6],['Transport','car',7],['Health','heart',8],['Fun','film',9]];
const CUR=['USD','EUR','GBP','CAD','AUD','INR','BDT','JPY','CNY','CHF','MXN','BRL'];
const KEY='pocketbook.v1';
const DATE_RE=/^\d{4}-\d{2}-\d{2}$/;

const fresh=()=>({cats:DEF.map((d,i)=>({id:'c'+i,name:d[0],icon:d[1],color:COL[d[2]]})),exp:[],currency:'USD'});
// Validates stored/imported data; colors and ids end up in HTML attributes, so they must be sanitized.
function normalize(d){
 if(!d||!Array.isArray(d.cats)||!Array.isArray(d.exp))return null;
 return{
  cats:d.cats.filter(c=>c&&c.id!=null&&c.name).map(c=>({id:String(c.id),name:String(c.name).slice(0,24),icon:PICK.includes(c.icon)?c.icon:'tag',color:/^#[0-9a-f]{6}$/i.test(c.color)?c.color:COL[10]})),
  exp:d.exp.filter(e=>e&&e.id!=null&&DATE_RE.test(e.date)&&isFinite(e.amt)&&+e.amt>0).map(e=>({id:String(e.id),cat:String(e.cat),amt:Math.round(+e.amt*100)/100,note:String(e.note||'').slice(0,40),date:e.date})),
  ...('budget' in d?{budget:Math.max(0,+d.budget||0)}:{}),
  currency:CUR.includes(d.currency)?d.currency:'USD'};
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
const sym=()=>fmt.formatToParts(0).find(p=>p.type==='currency').value;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const iso=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const today=()=>iso(new Date());
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,6);
const buzz=()=>navigator.vibrate&&navigator.vibrate(8);

let tab='ov',mk=today().slice(0,7),selCat=null,newIcon='tag',newCol=COL[0],editing=null,fcat=null,q='',undoFn=null;
const cat=id=>S.cats.find(c=>c.id===id)||{id,name:'Other',icon:'tag',color:'#94A3B8'};
const monthExp=k=>S.exp.filter(e=>e.date.slice(0,7)===k);
const sum=a=>a.reduce((t,e)=>t+e.amt,0);
const mlabel=k=>new Date(k+'-15T12:00').toLocaleDateString('en-US',{month:'long',year:'numeric'});
const shift=(k,n)=>{const d=new Date(k+'-15T12:00');d.setMonth(d.getMonth()+n);return iso(d).slice(0,7)};
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
 if(reduced.matches){el.textContent=money(to);return}
 const t0=performance.now();
 (function f(t){const p=Math.min(1,(t-t0)/1000),e=1-Math.pow(1-p,3);el.textContent=money(to*e);if(p<1)requestAnimationFrame(f)})(t0);
}
function byCat(list){const m={};list.forEach(e=>m[e.cat]=(m[e.cat]||0)+e.amt);return Object.entries(m).map(([id,v])=>({id,v,c:cat(id)})).sort((a,b)=>b.v-a.v)}
const empty=(msg,icon)=>`<div class="empty"><div class="eic">${ic(icon)}</div>${msg}</div>`;
const catIc=(c,cls='')=>`<div class="ic ${cls}" style="background:${c.color}">${ic(c.icon)}</div>`;

function overview(list,tot){
 const now=today(),cur=now.slice(0,7),[y,m]=mk.split('-').map(Number),dim=new Date(y,m,0).getDate();
 const elapsed=mk===cur?+now.slice(8):mk<cur?dim:0;
 const avg=elapsed?tot/elapsed:0;
 const prev=sum(monthExp(shift(mk,-1))),diff=prev?(tot-prev)/prev*100:null;
 let h=`<div class="card hero tv"><small>Spent in ${new Date(mk+'-15T12:00').toLocaleDateString('en-US',{month:'long'})}</small><div class="big" id="big">${money(0)}</div></div>`;
 const trend=diff==null?'<b>—</b>':`<b class="${diff>0?'up':'dn'}">${ic(diff>0?'up':'down')}${Math.abs(Math.round(diff))}%</b>`;
 h+=`<div class="stats tv"><div class="stat"><small>Daily average</small><b>${money(avg)}</b></div><div class="stat"><small>Expenses</small><b>${list.length}</b></div><div class="stat"><small>vs last month</small>${trend}</div></div>`;
 const bc=byCat(list);
 h+=`<div class="card tv"><h2>By category</h2>`;
 if(!bc.length)h+=empty('No expenses yet this month.<br>Tap the + button to add one.','chart');
 else{
  const R=88,C=2*Math.PI*R;let off=0,seg='';
  bc.forEach(x=>{const share=x.v/tot*C,gap=bc.length>1?Math.min(3,share*.2):0,L=share-gap;seg+=`<circle cx="115" cy="115" r="${R}" stroke="${x.c.color}" stroke-dasharray="0 ${C}" stroke-dashoffset="${-(off+gap/2)}" data-d="${L} ${C-L}"/>`;off+=share});
  const chartLabel=bc.map(x=>`${x.c.name}: ${money(x.v)} (${Math.round(x.v/tot*100)}%)`).join(', ');
  h+=`<div class="donutw" role="img" aria-label="${esc('Spending by category: '+chartLabel)}"><svg viewBox="0 0 230 230" aria-hidden="true"><circle cx="115" cy="115" r="${R}" stroke="var(--sf2)"/>${seg}</svg><div class="ctr"><span>Top category</span><b>${Math.round(bc[0].v/tot*100)}%</b><span>${esc(bc[0].c.name)}</span></div></div>
  <div class="legend">${bc.map(x=>`<button class="lg" data-a="fc" data-id="${esc(x.id)}"><i style="background:${x.c.color}"></i>${esc(x.c.name)} ${Math.round(x.v/tot*100)}%</button>`).join('')}</div>`;
 }
 h+=`</div>`;
 const ms=[];for(let i=5;i>=0;i--)ms.push(shift(mk,-i));
 const vals=ms.map(k=>sum(monthExp(k))),mx=Math.max(...vals,1);
 h+=`<div class="card tv"><h2>Last 6 months</h2><div class="bars">${ms.map((k,i)=>`<button class="bar ${k===mk?'cur':''}" data-a="gm" data-v="${k}" aria-label="${mlabel(k)}: ${money(vals[i])}"><em>${vals[i]?fmtC.format(vals[i]):''}</em><i data-h="${Math.max(vals[i]/mx*72,vals[i]?4:2)}"></i>${new Date(k+'-15T12:00').toLocaleDateString('en-US',{month:'short'})}</button>`).join('')}</div></div>`;
 if(bc.length)h+=`<div class="card tv"><h2>Top categories</h2>${bc.slice(0,5).map(x=>`<div class="row tap" role="button" tabindex="0" data-a="fc" data-id="${esc(x.id)}">${catIc(x.c)}<div class="rb"><b>${esc(x.c.name)}</b><div class="pg"><i style="background:${x.c.color}" data-w="${x.v/bc[0].v*100}"></i></div></div><div class="amt">${money(x.v)}</div></div>`).join('')}</div>`;
 return h;
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
 const spent={};monthExp(today().slice(0,7)).forEach(e=>spent[e.cat]=(spent[e.cat]||0)+e.amt);
 return`<div class="card tv"><h2>Your categories · this month</h2>${S.cats.length?`<div class="grid">${S.cats.map((c,i)=>`<div class="cc li" role="button" tabindex="0" data-a="fc" data-id="${esc(c.id)}" style="animation-delay:${i*30}ms">${catIc(c)}<span>${esc(c.name)}<small>${money(spent[c.id]||0)}</small></span><button class="del" data-a="dc" data-id="${esc(c.id)}" aria-label="Delete ${esc(c.name)}">${ic('trash')}</button></div>`).join('')}</div>`:empty('No categories yet.','grid')}</div>
 <div class="card tv"><h2>Add a category</h2><input id="cn" placeholder="Name, e.g. Pets" maxlength="24" aria-label="Category name">
 <div class="pick" id="pi">${PICK.map(p=>`<button data-a="pi" data-v="${p}" class="${p===newIcon?'on':''}" aria-label="${p} icon">${ic(p)}</button>`).join('')}</div>
 <div class="pick sw" id="pc">${COL.map(c=>`<button data-a="pcol" data-v="${c}" style="background:${c}" class="${c===newCol?'on':''}" aria-label="Color ${c}"></button>`).join('')}</div>
 <button class="btn" data-a="ac">Add category</button></div>
 <div class="card tv"><h2>Preferences</h2>
 <label class="set"><span>Currency</span><select id="cur">${CUR.map(c=>`<option ${c===S.currency?'selected':''}>${c}</option>`).join('')}</select></label></div>
 <div class="card tv"><h2>Your data</h2><div class="acts">
 <button class="act" data-a="csv">${ic('csv')}Export CSV</button><button class="act" data-a="bk">${ic('save')}Backup</button><button class="act" data-a="rs">${ic('load')}Restore</button></div>
 <button class="btn ghost" data-a="reset">Reset all data</button>
 <p class="note">Everything is stored privately on this device.</p></div>`;
}

function render(){
 const a=$('app'),list=monthExp(mk),tot=sum(list);
 let h=tab==='cat'?`<header><h1>Manage</h1></header>`
  :`<header><h1>Pocketbook</h1><div class="hr"><div class="mon"><button data-a="pm" aria-label="Previous month">${ic('left')}</button><button class="ml" data-a="tm" title="Jump to this month" aria-label="${mlabel(mk)}">${new Date(mk+'-15T12:00').toLocaleDateString('en-US',{month:'short',year:'numeric'})}</button><button data-a="nm" aria-label="Next month">${ic('right')}</button></div></div></header>`;
 h+=tab==='ov'?overview(list,tot):tab==='ex'?expenses():manage();
 a.innerHTML=h;
 requestAnimationFrame(()=>requestAnimationFrame(()=>{
  a.querySelectorAll('[data-d]').forEach(e=>e.setAttribute('stroke-dasharray',e.dataset.d));
  a.querySelectorAll('[data-w]').forEach(e=>e.style.width=e.dataset.w+'%');
  a.querySelectorAll('[data-h]').forEach(e=>e.style.height=e.dataset.h+'%');
  const b=$('big');if(b)count(b,tot);
 }));
 const T=[['ov','chart','Overview'],['ex','list','Expenses'],['cat','grid','Manage']];
 $('tabs').innerHTML=T.map(t=>`<button data-a="tab" data-v="${t[0]}" class="${tab===t[0]?'on':''}" aria-label="${t[2]}" ${tab===t[0]?'aria-current="page"':''}>${ic(t[1])}<span>${t[2]}</span></button>`).join('');
 $('fab').style.display=tab==='cat'?'none':'grid';
}

function openSheet(id){
 if(!S.cats.length){toast('Add a category first');tab='cat';render();return}
 const e=id?S.exp.find(x=>x.id===id):null;
 const transport=S.cats.find(c=>/^transport(?:ation)?$/i.test(c.name));
 editing=e?e.id:null;
 selCat=e?e.cat:selCat&&S.cats.some(c=>c.id===selCat)?selCat:S.cats[0].id;
 $('sheet').innerHTML=`<div class="shtop"><h3 id="shh">${e?'Edit expense':'New expense'}</h3><button class="del" data-a="close" aria-label="Close">${ic('x')}</button></div>
 <label class="amtw"><span>${esc(sym())}</span><input id="ea" type="number" inputmode="decimal" placeholder="0.00" step="0.01" min="0" aria-label="Amount" value="${e?e.amt:''}"></label>
 <div class="chips" id="chips">${S.cats.map(c=>`<button class="chip ${c.id===selCat?'on':''}" data-a="sc" data-id="${esc(c.id)}">${catIc(c)}${esc(c.name)}</button>`).join('')}</div>
 ${!e&&transport?`<button class="quick-add" data-a="qa" data-id="${esc(transport.id)}">${catIc(transport)}Add ${esc(transport.name)} · ${money(6.6)}</button>`:''}
 <input id="en" placeholder="Note (optional)" maxlength="40" aria-label="Note" value="${e?esc(e.note):''}" style="margin-bottom:10px"><input id="ed" type="date" aria-label="Date" value="${e?e.date:mk===today().slice(0,7)?today():mk+'-01'}" style="margin-bottom:14px">
 <button class="btn" data-a="se">${e?'Save changes':'Save expense'}</button>${e?`<button class="btn ghost" data-a="dx" data-id="${esc(e.id)}">Delete expense</button>`:''}`;
 $('ov').classList.add('open');
 const on=$('chips').querySelector('.on');if(on)on.scrollIntoView({block:'nearest'});
 setTimeout(()=>$('ea').focus(),350);
}
const close=()=>{$('ov').classList.remove('open');editing=null};

function saveExp(quick){
 const amt=parseFloat($('ea').value),date=DATE_RE.test($('ed').value)?$('ed').value:today();
 const amount=quick?6.6:amt;
 if(!(amount>0)){toast('Enter an amount');$('ea').focus();return}
 const data={cat:quick||selCat,amt:Math.round(amount*100)/100,note:quick?'':$('en').value.trim(),date};
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
 save();buzz();render();
 toast(item.name+' deleted',()=>S.cats.splice(i,0,item));
}
function addCat(){
 const n=$('cn').value.trim();
 if(!n){toast('Give it a name');$('cn').focus();return}
 if(S.cats.some(c=>c.name.toLowerCase()===n.toLowerCase())){toast('That category already exists');return}
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

document.addEventListener('click',ev=>{
 if(ev.target===$('ov')){close();return}
 const b=ev.target.closest('[data-a]');if(!b)return;
 const a=b.dataset.a,id=b.dataset.id,v=b.dataset.v;
 if(a==='tab'){tab=v;fcat=null;q='';render();scrollTo({top:0})}
 else if(a==='pm'){mk=shift(mk,-1);render()}
 else if(a==='nm'){mk=shift(mk,1);render()}
 else if(a==='tm'){mk=today().slice(0,7);render()}
 else if(a==='gm'){mk=v;render()}
 else if(a==='fc'){fcat=id;q='';tab='ex';render();scrollTo({top:0})}
 else if(a==='cf'){fcat=null;render()}
 else if(a==='ee')openSheet(id);
 else if(a==='close')close();
 else if(a==='sc'){selCat=id;document.querySelectorAll('.chip').forEach(c=>c.classList.toggle('on',c===b))}
 else if(a==='qa')saveExp(id);
 else if(a==='se')saveExp();
 else if(a==='dx')delExp(id);
 else if(a==='dc')delCat(id);
 else if(a==='pi'){newIcon=v;document.querySelectorAll('#pi button').forEach(x=>x.classList.toggle('on',x===b))}
 else if(a==='pcol'){newCol=v;document.querySelectorAll('#pc button').forEach(x=>x.classList.toggle('on',x===b))}
 else if(a==='ac')addCat();
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
document.addEventListener('input',ev=>{if(ev.target.id==='q'){q=ev.target.value;$('xl').innerHTML=exList()}});
document.addEventListener('keydown',ev=>{
 const t=ev.target;
 if($('ov').classList.contains('open')){
  if(ev.key==='Escape'){close();$('fab').focus();return}
  if(ev.key==='Enter'&&t.tagName==='INPUT'){ev.preventDefault();saveExp();return}
 }
 if(ev.key==='Enter'&&t.id==='cn'){addCat();return}
 if((ev.key==='Enter'||ev.key===' ')&&t.matches('[role=button][data-a]')){ev.preventDefault();t.click()}
});
let sx=0,sy=0;
$('app').addEventListener('touchstart',e=>{sx=e.touches[0].clientX;sy=e.touches[0].clientY},{passive:true});
$('app').addEventListener('touchend',e=>{
 if(tab==='cat')return;
 const dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;
 if(Math.abs(dx)>70&&Math.abs(dy)<40){mk=shift(mk,dx<0?1:-1);render()}
},{passive:true});
$('fab').addEventListener('click',()=>openSheet());
render();
