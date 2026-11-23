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
const MONTH_RE=/^[1-9]\d{3}-(0[1-9]|1[0-2])$/;
const SPENDING_TYPES={necessary:'Necessary',discretionary:'Discretionary'};
const NECESSARY_CATEGORIES=new Set(['rent','groceries','utilities','phone & internet','gas','transport','ttc','health']);
const defaultSpendingType=name=>NECESSARY_CATEGORIES.has(name.trim().toLowerCase())?'necessary':'discretionary';
const validSpendingType=value=>typeof value==='string'&&Object.hasOwn(SPENDING_TYPES,value);
const spendingTypeFor=(expense,categories)=>validSpendingType(expense.spendingType)?expense.spendingType:categories.find(c=>c.id===expense.cat)?.spendingType||'discretionary';

const fresh=()=>({cats:DEF.map((d,i)=>({id:'c'+i,name:d[0],icon:d[1],color:COL[d[2]],spendingType:defaultSpendingType(d[0])})),exp:[],recurring:[],currency:'CAD',categoryDefaultsAdded:true});
const validAmount=value=>Number.isFinite(Number(value))&&Number(value)>0&&Math.round(Number(value)*100)>0;
const roundedAmount=value=>Math.round(Number(value)*100)/100;
// Validates stored/imported data; colors and ids end up in HTML attributes, so they must be sanitized.
function normalize(d){
 if(!d||!Array.isArray(d.cats)||!Array.isArray(d.exp))return null;
 const addDefaultCategories=d.categoryDefaultsAdded!==true;
 const cats=d.cats.filter(c=>c&&c.id!=null&&c.name).map(c=>{
  const name=String(c.name).slice(0,24),migrateTtc=addDefaultCategories&&name.toLowerCase()==='ttc'&&c.icon==='car'&&c.color===COL[7];
  return{id:String(c.id),name,icon:migrateTtc?'subway':PICK.includes(c.icon)?c.icon:'tag',color:migrateTtc?COL[12]:/^#[0-9a-f]{6}$/i.test(c.color)?c.color:COL[10],spendingType:validSpendingType(c.spendingType)?c.spendingType:defaultSpendingType(name),...(validAmount(c.budget)?{budget:roundedAmount(c.budget)}:{})};
 });
 if(addDefaultCategories)[['TTC','subway',COL[12]],['Miscellaneous','tag',COL[10]]].forEach(([name,icon,color],i)=>{
  if(!cats.some(c=>c.name.toLowerCase()===name.toLowerCase())){
   let id='c'+(DEF.length+i);
   while(cats.some(c=>c.id===id))id+='x';
   cats.push({id,name,icon,color,spendingType:defaultSpendingType(name)});
  }
 });
 return{
  cats,
  exp:d.exp.filter(e=>e&&e.id!=null&&DATE_RE.test(e.date)&&isFinite(e.amt)&&+e.amt>0).map(e=>({id:String(e.id),cat:String(e.cat),amt:Math.round(+e.amt*100)/100,note:String(e.note||'').slice(0,40),date:e.date,spendingType:spendingTypeFor({...e,cat:String(e.cat)},cats),...(e.recurringId!=null?{recurringId:String(e.recurringId)}:{})})),
  recurring:Array.isArray(d.recurring)?d.recurring.filter(r=>r&&r.id!=null&&r.cat!=null&&validAmount(r.amt)&&Number.isInteger(r.day)&&r.day>=1&&r.day<=31&&MONTH_RE.test(r.nextMonth)).map(r=>({id:String(r.id),cat:String(r.cat),amt:roundedAmount(r.amt),note:String(r.note||'').slice(0,40),spendingType:spendingTypeFor({...r,cat:String(r.cat)},cats),day:r.day,nextMonth:r.nextMonth,paused:r.paused===true})):[],
  ...('budget' in d?{budget:Math.max(0,+d.budget||0)}:{}),
  ...(validAmount(d.discretionaryBudget)?{discretionaryBudget:roundedAmount(d.discretionaryBudget)}:{}),
  currency:CUR.includes(d.currency)?d.currency:'CAD',
  categoryDefaultsAdded:true};
}
let S;
try{S=normalize(JSON.parse(localStorage.getItem(KEY)))}catch(e){S=null}
if(!S)S=fresh();
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){toast('Could not save – storage full?')}};

const $=id=>document.getElementById(id);
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let fmt,axisFmt;
const setFmt=()=>{
 fmt=new Intl.NumberFormat('en-US',{style:'currency',currency:S.currency});
 axisFmt=new Intl.NumberFormat('en-US',{style:'currency',currency:S.currency,notation:'compact',maximumFractionDigits:2,minimumFractionDigits:0});
};
setFmt();
const shortCurrency=parts=>parts.map(p=>p.type==='currency'&&p.value.includes('$')?'$':p.value).join('');
const shortMoney=n=>shortCurrency(fmt.formatToParts(n));
const money=shortMoney;
const axisMoney=n=>shortCurrency(axisFmt.formatToParts(n));
const heroMoney=n=>fmt.formatToParts(n).map(p=>p.type==='currency'?`<span class="money-prefix">${esc(shortCurrency([p]))}</span>`:p.type==='decimal'||p.type==='fraction'?`<span class="money-cents">${esc(p.value)}</span>`:esc(p.value)).join('');
const sym=()=>shortCurrency([fmt.formatToParts(0).find(p=>p.type==='currency')]);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const iso=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const today=()=>iso(new Date());
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,6);
const buzz=()=>navigator.vibrate&&navigator.vibrate(8);

let tab='ov',mk=today().slice(0,7),selCat=null,newIcon='tag',newCol=COL[0],editing=null,editingCat=null,expenseStep=0,expenseCalendarMonth=today().slice(0,7),backspaceTimer=null,backspaceHoldTriggered=false,reportCache=null,fcat=null,q='',undoFn=null;
let selectedSpendingType='necessary';
let reportMode='cumulative';
let heroExpanded=false;
let spendingFilter='all',categoryEditorOpen=false,budgetModalOpen=false,budgetTrigger=null;
let monthPickerYear=Number(mk.slice(0,4)),monthPickerOpen=false,monthPickerTriggerId='';
const categoryColor=c=>{const legacy=LEGACY_COLORS.get(c.name);return legacy&&c.color.toUpperCase()===legacy[0]?legacy[1]:c.color};
const cat=id=>{const c=S.cats.find(c=>c.id===id)||{id,name:'Other',icon:'tag',color:'#94A3B8',spendingType:'discretionary'};return {...c,color:categoryColor(c)}};
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
function recurringDate(month,day){
 const [year,number]=month.split('-').map(Number),last=new Date(year,number,0).getDate();
 return`${month}-${String(Math.min(day,last)).padStart(2,'0')}`;
}
const validExpenseDate=date=>DATE_RE.test(date)&&MONTH_RE.test(date.slice(0,7))&&Number(date.slice(8))>=1&&recurringDate(date.slice(0,7),Number(date.slice(8)))===date;
function generateRecurring(asOf=today()){
 let changed=false,created=0;
 for(const template of S.recurring){
  if(template.paused)continue;
  while(recurringDate(template.nextMonth,template.day)<=asOf){
   const date=recurringDate(template.nextMonth,template.day);
   S.exp.push({id:uid(),cat:template.cat,amt:template.amt,note:template.note,date,spendingType:template.spendingType,recurringId:template.id});
   template.nextMonth=shift(template.nextMonth,1);changed=true;created++;
  }
 }
 if(changed)save();
 return created;
}
function resumeRecurring(template,asOf=today()){
 const month=asOf.slice(0,7),next=recurringDate(month,template.day)>=asOf?month:shift(month,1);
 if(template.nextMonth<next)template.nextMonth=next;
 template.paused=false;
}
const latestMonth=()=>S.exp.reduce((latest,e)=>e.date.slice(0,7)>latest?e.date.slice(0,7):latest,today().slice(0,7));
function dayLabel(s){
 const y=new Date();y.setDate(y.getDate()-1);
 if(s===today())return'Today';
 if(s===iso(y))return'Yesterday';
 return new Date(s+'T12:00').toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'});
}
function toast(m,undo){
 const t=$('toast');
 t.innerHTML=`<span>${esc(m)}${undo?' ·':''}</span>${undo?'<button data-a="undo">Undo</button>':''}`;
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
const empty=(msg,icon)=>`<div class="empty"><div class="eic">${ic(icon)}</div>${msg}</div>`;
const catIc=(c,cls='')=>`<div class="ic ${cls}" style="background:${categoryColor(c)}">${ic(c.icon)}</div>`;
const REPORT_COLORS=['#4F46E5','#F59E0B','#10B981','#0EA5E9'];
const catBadge=c=>`<div class="cat-badge" style="--cat-color:${categoryColor(c)};background:${categoryColor(c)}1A">${ic(c.icon)}</div>`;
const spendingBadge=expense=>{const type=spendingTypeFor(expense,S.cats);return`<span class="spending-badge ${type}">${SPENDING_TYPES[type]}</span>`};
const recurringBadge=expense=>expense.recurringId?'<span class="recurring-badge" aria-label="Recurring expense" title="Recurring expense">↻</span>':'';
function budgetProgress(value,limit,color){
 const ratio=value/limit;
 return{width:Math.min(ratio*100,100),color:ratio>=1?'#EF4444':ratio>=.8?'#F59E0B':color};
}
function discretionaryCap(cents,hero=false){
 if(!S.discretionaryBudget)return'';
 const value=cents/100,ratio=value/S.discretionaryBudget,color=ratio>.9?'#EF4444':'#F59E0B';
 return`<div class="cap-progress ${hero?'hero-cap':''}"><span>${shortMoney(value)} of ${shortMoney(S.discretionaryBudget)} cap</span><div class="cap-track" role="progressbar" aria-label="Discretionary spending cap" aria-valuemin="0" aria-valuemax="${S.discretionaryBudget}" aria-valuenow="${Math.min(value,S.discretionaryBudget)}" aria-valuetext="${esc(`${shortMoney(value)} of ${shortMoney(S.discretionaryBudget)}`)}"><i style="width:${Math.min(ratio*100,100)}%;background:${color}"></i></div></div>`;
}

function reportModel(){
 const asOf=today();
 if(reportCache?.asOf===asOf&&reportCache.mode===reportMode&&reportCache.month===mk&&reportCache.budget===S.budget&&reportCache.expenses===S.exp)return reportCache.model;
 const [year,month]=mk.split('-').map(Number),days=new Date(year,month,0).getDate(),dayTotals=new Map(),dailyWithoutRent=new Map();
 monthExp(mk).forEach(e=>{
  const cents=Math.round(e.amt*100);
  dayTotals.set(e.date,(dayTotals.get(e.date)||0)+cents);
  if(cat(e.cat).name.trim().toLowerCase()!=='rent')dailyWithoutRent.set(e.date,(dailyWithoutRent.get(e.date)||0)+cents);
 });
 let cumulativeCents=0;
 const points=Array.from({length:days},(_,i)=>{
  const date=`${mk}-${String(i+1).padStart(2,'0')}`;
  cumulativeCents+=dayTotals.get(date)||0;
  const daily=(dayTotals.get(date)||0)/100,dailyExRent=(dailyWithoutRent.get(date)||0)/100,cumulative=cumulativeCents/100;
  return{date,detail:new Date(year,month-1,i+1).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'}),label:String(i+1),daily,dailyExRent,cumulative,value:reportMode==='cumulative'?cumulative:dailyExRent};
 });
 const ticks=[0,7,14,21,days-1].filter((index,i,all)=>all.indexOf(index)===i).map(index=>({index,label:points[index].label}));
 const visiblePoints=points.filter(point=>point.date<=asOf);
 const budget=reportMode==='cumulative'&&S.budget>0?S.budget:null;
 const peak=Math.max(...visiblePoints.map(point=>point.value),budget||0),rawStep=peak?peak*1.2/4:0.25,magnitude=10**Math.floor(Math.log10(rawStep));
 const step=Math.max(0.01,[1,1.5,2,2.5,5,10].find(n=>n*magnitude>=rawStep)*magnitude);
 const yTicks=Array.from({length:5},(_,i)=>i*step);
 const model={mode:reportMode,points,visiblePoints,days,ticks,budget,yTicks,yMax:step*4,currentMonth:mk===asOf.slice(0,7)};
 reportCache={asOf,mode:reportMode,month:mk,budget:S.budget,expenses:S.exp,model};
 return model;
}
const CHART={left:88,right:616,top:20,bottom:150,width:640,height:170};
const chartY=(value,max)=>CHART.bottom-value/max*(CHART.bottom-CHART.top);
function chartCoordinates(points,max=reportModel().yMax,days=reportModel().days){
 return points.map(point=>({...point,x:CHART.left+Number(point.label)/days*(CHART.right-CHART.left),y:chartY(point.value,max)}));
}
function chartLinePath(points){
 return points.length?`M ${CHART.left} ${CHART.bottom} `+points.map(point=>`L ${point.x.toFixed(2)} ${point.y.toFixed(2)}`).join(' '):'';
}
function reportChartCard(){
 const model=reportModel(),points=chartCoordinates(model.visiblePoints,model.yMax,model.days),axisPoints=chartCoordinates(model.points,model.yMax,model.days),endpoint=points.at(-1);
 const line=chartLinePath(points),area=endpoint?`${line} L ${endpoint.x.toFixed(2)} ${CHART.bottom} L ${CHART.left} ${CHART.bottom} Z`:'';
 const chartLabel=reportMode==='cumulative'?'Cumulative monthly spending chart':'Daily spending excluding Rent chart';
 const pace=model.budget?`<path class="report-budget-pace" d="M ${CHART.left} ${CHART.bottom} L ${CHART.right} ${chartY(model.budget,model.yMax).toFixed(2)}"/>`:'';
 const endpointDot=endpoint&&model.currentMonth&&reportMode==='cumulative'?`<span class="report-endpoint" aria-hidden="true" style="left:${endpoint.x/CHART.width*100}%;top:${endpoint.y/CHART.height*100}%"></span>`:'';
 return`<div class="card report-chart"><div class="report-chart-head"><h2>Spending Trend</h2>
 <div class="report-mode" role="group" aria-label="Monthly chart mode">${[['cumulative','Cumulative'],['daily','Daily (Excl. Rent)']].map(([mode,label])=>`<button type="button" data-a="report-mode" data-v="${mode}" class="${mode===reportMode?'on':''}" aria-pressed="${mode===reportMode}">${label}</button>`).join('')}</div></div>
 <div class="report-legend"><span class="spending-key">${reportMode==='cumulative'?'Cumulative spending':'Daily (Excl. Rent)'}</span>${model.budget?'<span class="pace-key">Monthly Budget Pace</span>':''}</div>
 <div class="report-plot" id="report-plot" role="group" tabindex="0" aria-label="${chartLabel}" aria-describedby="report-tooltip"><svg viewBox="0 0 640 170" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="report-gradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#6366F1" stop-opacity=".24"/><stop offset="100%" stop-color="#6366F1" stop-opacity=".01"/></linearGradient></defs>
 ${model.yTicks.map(value=>`<line class="report-gridline" x1="${CHART.left}" y1="${chartY(value,model.yMax)}" x2="${CHART.right}" y2="${chartY(value,model.yMax)}"/>`).join('')}${line?`<path class="report-area" d="${area}"/>`:''}${pace}${line?`<path class="report-line" pathLength="1000" d="${line}"/>`:''}<line class="report-indicator" x1="0" y1="16" x2="0" y2="150" visibility="hidden"/><circle class="report-dot" cx="0" cy="0" r="5" visibility="hidden"/></svg>
 <div class="report-y-axis" aria-hidden="true">${model.yTicks.map(value=>`<span style="top:${chartY(value,model.yMax)/CHART.height*100}%">${esc(axisMoney(value))}</span>`).join('')}</div>${endpointDot}<div class="report-tooltip" id="report-tooltip" role="tooltip" hidden></div></div>
 <div class="report-axis">${model.ticks.map((tick,i)=>`<span class="${i===0?'first':''} ${i===model.ticks.length-1?'last':''}" style="left:${axisPoints[tick.index].x/CHART.width*100}%">${esc(tick.label)}</span>`).join('')}</div>${points.length?'':'<p class="spending-empty">This month has not started yet.</p>'}</div>`;
}
function scrubReport(plot,clientX){
 const rect=plot.querySelector('svg').getBoundingClientRect(),points=chartCoordinates(reportModel().visiblePoints),x=(clientX-rect.left)/rect.width*CHART.width;
 if(!points.length)return;
 const index=points.reduce((best,point,i)=>Math.abs(point.x-x)<Math.abs(points[best].x-x)?i:best,0);
 showReportPoint(plot,index,points);
}
function showReportPoint(plot,index,points=chartCoordinates(reportModel().visiblePoints)){
 if(!points.length)return;
 index=Math.max(0,Math.min(points.length-1,index));const point=points[index];
 const indicator=plot.querySelector('.report-indicator'),dot=plot.querySelector('.report-dot'),tooltip=plot.querySelector('.report-tooltip');
 indicator.setAttribute('x1',point.x);indicator.setAttribute('x2',point.x);indicator.setAttribute('visibility','visible');
 dot.setAttribute('cx',point.x);dot.setAttribute('cy',point.y);dot.setAttribute('visibility','visible');
 const details=[`Cumulative: ${shortMoney(point.cumulative)}`,`${reportMode==='daily'?'Daily (Excl. Rent)':'Daily spend'}: ${shortMoney(reportMode==='daily'?point.dailyExRent:point.daily)}`];
 tooltip.innerHTML=`<strong>${esc(point.detail)}</strong>${details.map(text=>`<span>${esc(text)}</span>`).join('')}`;tooltip.hidden=false;
 const half=tooltip.offsetWidth/2;
 tooltip.style.left=`${Math.max(half,Math.min(plot.clientWidth-half,point.x/CHART.width*plot.clientWidth))}px`;tooltip.style.top=`${point.y/CHART.height*plot.clientHeight}px`;
 const vertical=point.y<70?'translateY(8px)':'translateY(calc(-100% - 8px))';tooltip.style.transform=`translateX(-50%) ${vertical}`;
 plot.setAttribute('aria-label',`${point.detail}: ${details.join('; ')}`);plot.dataset.activeIndex=String(index);
}
function hideReportPoint(plot){
 plot.querySelector('.report-indicator')?.setAttribute('visibility','hidden');
 plot.querySelector('.report-dot')?.setAttribute('visibility','hidden');
 plot.querySelector('.report-tooltip').hidden=true;plot.removeAttribute('data-active-index');
}
function recentExpenses(list){
 const rows=[...list].sort((a,b)=>b.date.localeCompare(a.date)||b.id.localeCompare(a.id)).slice(0,4);
 if(!rows.length)return empty('No expenses yet this month.<br>Tap + to add your first one.','list');
 return`<div class="home-expenses">${rows.map(expense=>{
  const category=cat(expense.cat),date=new Date(expense.date+'T12:00').toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'});
  return`<button class="home-expense" data-a="ee" data-id="${esc(expense.id)}">${catBadge(category)}<span class="home-expense-main"><b>${esc(expense.note||category.name)}</b><span class="home-expense-meta"><small>${date}</small>${spendingBadge(expense)}${recurringBadge(expense)}</span></span><span class="home-expense-amount"><strong>${money(expense.amt)}</strong></span></button>`;
 }).join('')}</div>`;
}

function budgetMeter(list,tot){
 const categories=byCat(list);let shown=categories;
 if(categories.length>4){
  const top=categories.slice(0,3),rest=categories.slice(3);
  shown=[...top,{v:rest.reduce((n,x)=>n+x.v,0),c:{name:'Other'}}];
 }
 const progress=S.budget>0?Math.min(tot/S.budget,1):tot?1:0;
 const segments=shown.map((item,index)=>`<span title="${esc(item.c.name)}" style="width:${tot?progress*item.v/tot*100:0}%;background:${REPORT_COLORS[index]}"></span>`).join('');
 const label=S.budget>0?`${Math.round(progress*100)}% of monthly budget used`:'Category spending proportions; monthly budget not set';
 return`<div class="budget-meter" role="img" aria-label="${esc(label)}">${segments}</div>`;
}
function overview(list,tot){
 const prev=sum(monthExp(shift(mk,-1))),diff=prev?(tot-prev)/prev*100:null;
 const trend=diff==null?'<span class="hero-trend muted">No prior month data</span>':`<span class="hero-trend">${ic(diff>=0?'up':'down')} ${Math.abs(Math.round(diff))}% vs last month</span>`;
 const {necessaryCents,discretionaryCents,totalCents,necessaryShare,necessaryPct,discretionaryPct}=spendingBreakdown(list);
 return`<section class="card hero tv ${heroExpanded?'expanded':''}">
  <button type="button" class="hero-toggle" data-a="hero-toggle" aria-label="Toggle Necessary vs. Discretionary breakdown" aria-expanded="${heroExpanded}" aria-controls="hero-breakdown"></button>
  <div class="hero-summary"><div><small>Spent This Month</small><div class="big" id="big">${heroMoney(0)}</div></div>${trend}</div>
  ${budgetMeter(list,tot)}
  <div class="budget-label"><strong>${shortMoney(tot)} spent</strong>${S.budget>0?`<span>of ${shortMoney(S.budget)}</span>`:'<button data-a="budget-setup">Set a monthly budget</button>'}</div>
  <div class="hero-breakdown-wrap" id="hero-breakdown" aria-hidden="${!heroExpanded}"><div class="hero-breakdown-inner"><div class="hero-breakdown">
   <div class="hero-split">${[['necessary',necessaryCents,necessaryPct],['discretionary',discretionaryCents,discretionaryPct]].map(([type,cents,pct])=>`<div><span class="hero-split-label ${type}">${SPENDING_TYPES[type]}</span><strong>${shortMoney(cents/100)} · ${pct}%</strong></div>`).join('')}</div>
   <div class="hero-split-bar" aria-hidden="true"><span class="necessary" style="width:${necessaryShare}%"></span><span class="discretionary" style="width:${totalCents?100-necessaryShare:0}%;${S.discretionaryBudget&&discretionaryCents/100/S.discretionaryBudget>.9?'background:#EF4444':''}"></span></div>
   ${discretionaryCap(discretionaryCents,true)}
  </div></div></div>
 </section>
 <div class="quick-actions" aria-label="Quick actions">
  <button class="quick-action" data-a="add">${ic('plus')}<span>Add Expense</span></button>
  <button class="quick-action" data-a="category-settings">${ic('grid')}<span>Categories</span></button>
  <button class="quick-action" data-a="budget-setup">${ic('wallet')}<span>Budgets</span></button>
  <button class="quick-action" data-a="tab" data-v="reports">${ic('chart')}<span>Reports</span></button>
 </div>
 <section class="home-section"><div class="section-heading"><h2>Recent Expenses</h2><button class="see-all" data-a="all-recent">See All</button></div>${recentExpenses(list)}</section>`;
}
function toggleHeroBreakdown(button){
 heroExpanded=!heroExpanded;
 button.setAttribute('aria-expanded',String(heroExpanded));
 button.closest('.hero').classList.toggle('expanded',heroExpanded);
 $('hero-breakdown').setAttribute('aria-hidden',String(!heroExpanded));
}

function categoryCard(categories,tot){
 if(!categories.length)return`<section class="card category-card"><h2>Spending by Category</h2>${empty('No expenses for this period.','chart')}</section>`;
 const spentCategories=categories.filter(item=>item.v>0);
 const R=42,C=2*Math.PI*R;let offset=0;
 const segments=spentCategories.map(item=>{
  const share=item.v/tot*C,gap=spentCategories.length>1?Math.min(2,share*.16):0,length=share-gap;
  const markup=`<circle cx="60" cy="60" r="${R}" stroke="${item.c.color}" stroke-dasharray="${length} ${C-length}" stroke-dashoffset="${-(offset+gap/2)}"/>`;
  offset+=share;return markup;
 }).join('');
 const ranked=categoryPercentages(categories).map((item,index)=>{
  const progress=item.c.budget?budgetProgress(item.v,item.c.budget,item.c.color):{width:tot?item.v/tot*100:0,color:item.c.color};
  return`<button class="ranked-row" data-a="fc" data-id="${esc(item.id)}"><span class="rank-number">${String(index+1).padStart(2,'0')}</span>${catBadge(item.c)}<span class="rank-category"><strong>${esc(item.c.name)}</strong><span class="rank-track"><i style="width:${progress.width}%;background:${progress.color}"></i></span></span><span class="rank-value"><strong>${shortMoney(item.v)}</strong><small>${item.c.budget?`/ ${shortMoney(item.c.budget)} · ${Math.floor(item.v/item.c.budget*100)}% of limit`:`${item.pct}%`}</small></span></button>`;
 }).join('');
 const donut=tot?`<div class="report-donut"><svg viewBox="0 0 120 120" role="img" aria-label="${esc(spentCategories.map(item=>`${item.c.name}: ${shortMoney(item.v)}`).join(', '))}"><circle class="donut-track" cx="60" cy="60" r="${R}"/>${segments}</svg><div><strong>${spentCategories.length}</strong><span>categories</span></div></div>`:'';
 return`<section class="card category-card"><h2>Spending by Category</h2>${donut}<div class="ranked-list">${ranked}</div></section>`;
}
function insightsCard(list,tot){
 const [year,month]=mk.split('-').map(Number),daysInMonth=new Date(year,month,0).getDate(),daysElapsed=mk===today().slice(0,7)?Number(today().slice(8)):mk<today().slice(0,7)?daysInMonth:0;
 const highest=[...list].sort((a,b)=>b.amt-a.amt)[0],lowest=[...list].sort((a,b)=>a.amt-b.amt)[0];
 const detail=expense=>expense?`<strong>${shortMoney(expense.amt)}</strong><span title="${esc(expense.note||cat(expense.cat).name)}">${esc(expense.note||cat(expense.cat).name)}</span>`:'<strong>—</strong>';
 return`<section class="card insights-card"><h2>Expense Insights</h2><div class="insight-list">
  <div><small>Highest Expense</small>${detail(highest)}</div>
  <div><small>Lowest Expense</small>${detail(lowest)}</div>
  <div><small>Average Daily Spend</small><strong>${daysElapsed?shortMoney(tot/daysElapsed):'—'}</strong></div>
 </div></section>`;
}
function spendingBreakdown(list){
 const necessaryCents=list.reduce((total,e)=>total+(spendingTypeFor(e,S.cats)==='necessary'?Math.round(e.amt*100):0),0);
 const totalCents=list.reduce((total,e)=>total+Math.round(e.amt*100),0),discretionaryCents=totalCents-necessaryCents;
 const necessaryShare=totalCents?necessaryCents/totalCents*100:0,necessaryPct=Math.round(necessaryShare),discretionaryPct=totalCents?100-necessaryPct:0;
 return{necessaryCents,totalCents,discretionaryCents,necessaryShare,necessaryPct,discretionaryPct};
}
function spendingBreakdownCard(list){
 const {necessaryCents,totalCents,discretionaryCents,necessaryShare,necessaryPct,discretionaryPct}=spendingBreakdown(list);
 const label=`Necessary: ${shortMoney(necessaryCents/100)} · ${necessaryPct}%; Discretionary: ${shortMoney(discretionaryCents/100)} · ${discretionaryPct}%`;
 return`<section class="card spending-breakdown"><h2>Necessary vs. Discretionary</h2><p class="spending-period">${esc(mlabel(mk))}</p>
 <div class="spending-split">${[['necessary',necessaryCents,necessaryPct],['discretionary',discretionaryCents,discretionaryPct]].map(([type,cents,pct])=>`<div><span class="spending-badge ${type}">${SPENDING_TYPES[type]}</span><strong>${shortMoney(cents/100)} · ${pct}%</strong></div>`).join('')}</div>
 <div class="spending-bar" role="img" aria-label="${esc(label)}"><span class="necessary" style="width:${necessaryShare}%"></span><span class="discretionary" style="width:${totalCents?100-necessaryShare:0}%;${S.discretionaryBudget&&discretionaryCents/100/S.discretionaryBudget>.9?'background:#EF4444':''}"></span></div>
 ${discretionaryCap(discretionaryCents)}
 ${totalCents?'':'<p class="spending-empty">No spending this month yet.</p>'}</section>`;
}
function reports(list,tot){
 const categories=byCat(list),budget=S.budget>0?S.budget:null,remaining=budget?budget-tot:null;
 S.cats.filter(c=>c.budget&&!categories.some(item=>item.id===c.id)).forEach(c=>categories.push({id:c.id,v:0,c:cat(c.id)}));
 const progress=budget?Math.min(tot/budget,1)*100:0;
 const remainingText=remaining==null?'Set budget':shortMoney(Math.abs(remaining));
 return`<div class="report-summary-grid">
  <section class="card report-stat"><small>Total Expenses</small><strong>${shortMoney(tot)}</strong><span>${list.length} ${list.length===1?'expense':'expenses'}</span></section>
  <button class="card report-stat budget-stat" data-a="budget-setup"><small>Monthly Budget</small><strong>${budget?shortMoney(budget):'Not set'}</strong><span>${budget?`${Math.round(progress)}% used`:'No budget set'}</span></button>
  ${budget?`<section class="card report-stat remaining-stat ${remaining<0?'over':''}"><small>Remaining</small><strong>${remainingText}</strong><span>${remaining<0?'Over budget':`${Math.round(progress)}% used`}</span></section>`:`<button class="card report-stat remaining-stat" data-a="budget-setup"><small>Remaining</small><strong>${remainingText}</strong><span class="set-budget-action">Tap to set →</span></button>`}
 </div>
 ${spendingBreakdownCard(list)}
 ${reportChartCard()}
 ${categoryCard(categories,tot)}
 ${insightsCard(list,tot)}`;
}

function exList(){
 const qq=q.trim().toLowerCase();
 const list=monthExp(mk).filter(e=>(!fcat||e.cat===fcat)&&(spendingFilter==='all'||spendingTypeFor(e,S.cats)===spendingFilter)&&(!qq||(e.note+' '+cat(e.cat).name+' '+e.amt).toLowerCase().includes(qq)))
  .sort((a,b)=>b.date.localeCompare(a.date)||b.id.localeCompare(a.id));
 let h=`<h2>${list.length} expense${list.length===1?'':'s'} · ${shortMoney(sum(list))}</h2>`;
 if(!list.length)return h+(qq||fcat||spendingFilter!=='all'?empty('No matches found.','search'):empty('Nothing here yet.<br>Add your first expense with the + button.','list'));
 let last='';
 list.forEach((e,i)=>{
  if(e.date!==last){last=e.date;h+=`<div class="dh"><span>${dayLabel(e.date)}</span><span>${shortMoney(sum(list.filter(x=>x.date===e.date)))}</span></div>`}
  const c=cat(e.cat);
  h+=`<div class="row tap li" role="button" tabindex="0" data-a="ee" data-id="${esc(e.id)}" style="animation-delay:${Math.min(i,10)*30}ms">${catIc(c)}<div class="rb"><b>${esc(e.note||c.name)}</b><span class="expense-meta">${e.note?`<small>${esc(c.name)}</small>`:''}${spendingBadge(e)}${recurringBadge(e)}</span></div><div class="amt">${shortMoney(e.amt)}</div><button class="del" data-a="dx" data-id="${esc(e.id)}" aria-label="Delete expense">${ic('trash')}</button></div>`;
 });
 return h;
}

function expenses(){
 const fc=fcat&&cat(fcat);
 return`<div class="card tv"><div class="search">${ic('search')}<input id="q" type="search" placeholder="Search notes, categories, amounts" value="${esc(q)}" aria-label="Search expenses"></div>
 <div class="filter-chips" role="group" aria-label="Filter by spending type">${[['all','All'],...Object.entries(SPENDING_TYPES)].map(([value,label])=>`<button type="button" data-a="filter-spending" data-v="${value}" class="${spendingFilter===value?'on':''}" aria-pressed="${spendingFilter===value}">${label}</button>`).join('')}</div>
 ${fc?`<button class="fchip" data-a="cf" aria-label="Clear category filter">${catIc(fc)}${esc(fc.name)}${ic('x')}</button>`:''}
 <div id="xl">${exList()}</div></div>`;
}

function budgetInput(id,key='budget',label='Monthly budget',value=S[key]){
 return`<label class="budget-input"><span>${esc(sym())}</span><input id="${id}" type="number" min="0.01" step="0.01" inputmode="decimal" placeholder="Not set" value="${value>0?esc(value):''}" aria-label="${esc(label)}"></label>`;
}
function recurringCard(){
 const rows=S.recurring.map(r=>`<div class="recurring-row"><div class="recurring-info"><strong>${esc(r.note||cat(r.cat).name)}</strong><small>${shortMoney(r.amt)} · Day ${r.day}${r.paused?' · Paused':''}</small></div><button type="button" class="switch" role="switch" aria-checked="${!r.paused}" aria-label="${esc(`${r.paused?'Resume':'Pause'} ${r.note||cat(r.cat).name}`)}" data-a="toggle-recurring" data-id="${esc(r.id)}"><span></span></button><button type="button" class="del" data-a="delete-recurring" data-id="${esc(r.id)}" aria-label="${esc(`Delete recurring ${r.note||cat(r.cat).name}`)}">${ic('trash')}</button></div>`).join('');
 return`<section class="card" id="recurring-card"><h2>Recurring expenses</h2>${rows||'<p class="note budget-note">No recurring expenses yet.</p>'}</section>`;
}
function manage(){
 const categoryToEdit=S.cats.find(c=>c.id===editingCat);
 if(editingCat&&!categoryToEdit)editingCat=null;
 ensureNewCategoryChoices();
 const spent={};monthExp(today().slice(0,7)).forEach(e=>spent[e.cat]=(spent[e.cat]||0)+e.amt);
 return`<div class="card tv" id="categories-card"><div class="category-heading"><h2>Your categories · this month</h2><button class="add-category" data-a="add-category" aria-expanded="${categoryEditorOpen}" aria-controls="category-editor">+ Add category</button></div>${S.cats.length?`<div class="grid">${S.cats.map((c,i)=>{
  const amount=spent[c.id]||0,progress=c.budget?budgetProgress(amount,c.budget,categoryColor(c)):null;
  return`<div class="cc li" role="button" tabindex="0" data-a="fc" data-id="${esc(c.id)}" style="animation-delay:${i*30}ms">${catIc(c)}<span>${esc(c.name)}<small>${money(amount)}${c.budget?` / ${money(c.budget)}`:''}</small></span>${progress?`<div class="rank-track category-limit-track"><i style="width:${progress.width}%;background:${progress.color}"></i></div>`:''}<button class="del edit-category" data-a="ec" data-id="${esc(c.id)}" aria-label="Edit ${esc(c.name)}">${ic('edit')}</button><button class="del" data-a="dc" data-id="${esc(c.id)}" aria-label="Delete ${esc(c.name)}">${ic('trash')}</button></div>`;
 }).join('')}</div>`:empty('No categories yet.','grid')}
 ${categoryEditorOpen?`<div class="category-editor" id="category-editor"><h2>${categoryToEdit?'Edit category':'Add a category'}</h2><input id="cn" placeholder="Name, e.g. Pets" maxlength="24" aria-label="Category name" value="${categoryToEdit?esc(categoryToEdit.name):''}">
 <div class="budget-field"><span>Monthly category limit <small>Optional</small></span>${budgetInput('category-budget','budget','Monthly category limit',categoryToEdit?.budget||null)}</div>
 <div class="pick" id="pi">${PICK.map(p=>`<button data-a="pi" data-v="${p}" class="${p===newIcon?'on':''}" aria-label="${p} icon" ${iconAvailable(p)?'':'disabled'}>${ic(p)}</button>`).join('')}</div>
 <div class="pick sw" id="pc">${COL.map(c=>`<button data-a="pcol" data-v="${c}" style="background:${c}" class="${c===newCol?'on':''}" aria-label="Color ${c}" ${colorAvailable(c)?'':'disabled'}></button>`).join('')}</div>
 <button class="btn" data-a="ac" ${newIcon&&newCol?'':'disabled'}>${categoryToEdit?'Save category':'Add category'}</button><button class="btn ghost" data-a="cancel-edit-cat">Cancel</button></div>`:'<div id="category-editor" hidden></div>'}</div>
 ${recurringCard()}
 <div class="card tv" id="monthly-budget-card"><h2>Monthly budget</h2><p class="note budget-note">Track monthly spending targets across Home and Reports.</p><div class="budget-field"><span>Monthly budget</span>${budgetInput('monthly-budget')}</div><div class="budget-field"><span>Discretionary spending cap</span>${budgetInput('discretionary-budget','discretionaryBudget','Discretionary spending cap')}</div><small class="budget-help">Leave blank to remove a limit. Limits are not shared or synced.</small></div>
 <div class="card tv"><h2>Preferences</h2>
 <label class="set"><span>Currency</span><select id="cur">${CUR.map(c=>`<option ${c===S.currency?'selected':''}>${c}</option>`).join('')}</select></label></div>
 <div class="card tv"><h2>Your data</h2><div class="acts">
 <button class="act" data-a="csv">${ic('csv')}Export CSV</button><button class="act" data-a="bk">${ic('save')}Backup</button><button class="act" data-a="rs">${ic('load')}Restore</button></div>
 <button class="btn ghost" data-a="reset">Reset all data</button>
 <p class="note">Everything is stored privately on this device.</p></div>`;
}

function fitReportStats(){
 document.querySelectorAll('.report-stat>strong,.report-stat>small').forEach(el=>{
  el.style.fontSize='';
  if(el.scrollWidth>el.clientWidth&&el.clientWidth>0)el.style.fontSize=`${parseFloat(getComputedStyle(el).fontSize)*(el.clientWidth-1)/el.scrollWidth}px`;
 });
}
function monthSwitcher(){
 const label=new Date(mk+'-15T12:00').toLocaleDateString('en-US',{month:'short',year:'numeric'});
 return`<div class="mon"><button type="button" data-a="pm" aria-label="Previous month" ${mk<='2000-01'?'disabled':''}>${ic('left')}</button><button type="button" class="ml" id="month-switcher" data-a="month-picker" aria-label="Select month, ${esc(mlabel(mk))}" aria-haspopup="dialog">${esc(label)}</button><button type="button" data-a="nm" aria-label="Next month" ${mk>=latestMonth()?'disabled':''}>${ic('right')}</button></div>`;
}
function render(){
 reportCache=null;
 generateRecurring();
 const a=$('app'),list=monthExp(mk),tot=sum(list);
 const tabs=$('tabs');
 let h;
 if(tab==='ov')h=`<header class="home-header"><h1>Pocketbook</h1>${monthSwitcher()}</header>`;
 else if(tab==='ex')h=`<header class="page-header"><h1>Expenses</h1>${monthSwitcher()}</header>`;
 else if(tab==='reports')h=`<header class="report-header"><h1>Reports</h1>${monthSwitcher()}</header>`;
 else h=`<header><h1>More</h1></header>`;
 h+=tab==='ov'?overview(list,tot):tab==='ex'?expenses():tab==='reports'?reports(list,tot):manage();
 a.innerHTML=h;
 fitReportStats();
 requestAnimationFrame(()=>requestAnimationFrame(()=>{
  const b=$('big');if(b)count(b,tot);
 }));
 const T=[['ov','home','Home'],['ex','list','Expenses'],['add','plus','Add Expense'],['reports','chart','Reports'],['more','grid','More']];
 tabs.innerHTML=T.map(t=>t[0]==='add'?`<button class="nav-add" data-a="add" aria-label="Add Expense">${ic(t[1])}</button>`:`<button class="nav-item ${tab===t[0]?'on':''}" data-a="tab" data-v="${t[0]}" aria-label="${t[2]}" ${tab===t[0]?'aria-current="page"':''}>${ic(t[1])}<span>${t[2]}</span></button>`).join('');
}

function renderMonthPicker(){
 const max=latestMonth(),maxYear=Number(max.slice(0,4));
 const months=Array.from({length:12},(_,i)=>{
  const value=`${monthPickerYear}-${String(i+1).padStart(2,'0')}`,name=new Date(monthPickerYear,i,1).toLocaleDateString('en-US',{month:'long'});
  return`<button type="button" class="month-choice ${value===mk?'on':''}" data-a="mp-select" data-v="${value}" aria-pressed="${value===mk}" ${value>max?'disabled':''}>${name}</button>`;
 }).join('');
 $('sheet').innerHTML=`<div class="shtop"><h3 id="shh">Select month</h3><button class="del" data-a="close" aria-label="Close">${ic('x')}</button></div>
 <div class="month-year"><button type="button" data-a="mp-year" data-v="-1" aria-label="Previous year" ${monthPickerYear<=2000?'disabled':''}>${ic('left')}</button><strong>${monthPickerYear}</strong><button type="button" data-a="mp-year" data-v="1" aria-label="Next year" ${monthPickerYear>=maxYear?'disabled':''}>${ic('right')}</button></div>
 <div class="month-grid" role="group" aria-label="Months in ${monthPickerYear}">${months}</div>`;
}
function openMonthPicker(){
 monthPickerYear=Number(mk.slice(0,4));
 monthPickerTriggerId='month-switcher';
 monthPickerOpen=true;
 renderMonthPicker();
 $('ov').inert=false;$('ov').classList.add('open');
 requestAnimationFrame(()=>$('sheet').querySelector('.month-choice.on')?.focus());
}

function openBudgetModal(trigger){
 budgetModalOpen=true;budgetTrigger=trigger;
 $('sheet').innerHTML=`<div class="shtop"><h3 id="shh">Monthly budgets</h3><button class="del" data-a="close" aria-label="Close">${ic('x')}</button></div><p class="note budget-note">Leave a field blank to remove that limit.</p><div class="budget-field"><span>Monthly budget</span>${budgetInput('budget-modal-input')}</div><div class="budget-field"><span>Discretionary spending cap</span>${budgetInput('cap-modal-input','discretionaryBudget','Discretionary spending cap')}</div><button class="btn budget-save" data-a="save-budget">Save budgets</button>`;
 $('ov').inert=false;$('ov').classList.add('open');
 requestAnimationFrame(()=>$('budget-modal-input')?.focus());
}
function readLimit(input){
 if(input.validity.badInput){toast('Enter a valid budget');input.focus();return false}
 const value=input.value.trim();
 if(!value)return null;
 if(!validAmount(value)){toast('Enter a budget greater than zero');input.focus();return false}
 return roundedAmount(value);
}
function setLimit(target,key,value){
 if(value===null)delete target[key];else target[key]=value;
}
function saveBudget(input,key='budget'){
 const value=readLimit(input);if(value===false)return false;
 setLimit(S,key,value);save();toast(value===null?'Budget removed':'Budget updated');return true;
}
function saveBudgets(){
 const budget=readLimit($('budget-modal-input'));if(budget===false)return false;
 const cap=readLimit($('cap-modal-input'));if(cap===false)return false;
 setLimit(S,'budget',budget);setLimit(S,'discretionaryBudget',cap);
 save();toast('Budgets updated');return true;
}

function openSheet(id){
 if(!S.cats.length){toast('Add a category first');tab='more';render();return}
 const e=id?S.exp.find(x=>x.id===id):null;
 editing=e?e.id:null;
 expenseStep=0;
 const initialDate=e?e.date:mk===today().slice(0,7)?today():mk+'-01';
 expenseCalendarMonth=initialDate.slice(0,7);
 selCat=e?e.cat:selCat&&S.cats.some(c=>c.id===selCat)?selCat:S.cats[0].id;
 selectedSpendingType=e?spendingTypeFor(e,S.cats):cat(selCat).spendingType;
 $('sheet').innerHTML=`<div class="shtop"><h3 id="shh">${e?'Edit expense':'New expense'}</h3><button class="del" data-a="close" aria-label="Close">${ic('x')}</button></div>
 <div class="expense-step" data-step="0">
  <label class="amtw"><span>${esc(sym())}</span><input id="ea" type="text" inputmode="decimal" placeholder="0.00" aria-label="Amount" value="${e?e.amt:''}" readonly><span class="amt-cursor" aria-hidden="true">|</span></label>
  <div class="quick-amounts" aria-label="Quick add amount">${[5,10,20,50].map(n=>`<button type="button" data-a="quick-amount" data-amount="${n}">+${esc(axisMoney(n))}</button>`).join('')}</div>
  <div class="calc" aria-label="Amount calculator">
   ${['1','2','3','4','5','6','7','8','9','.','0','back'].map(k=>k==='back'?`<button type="button" data-a="calc" data-key="back" aria-label="Delete digit">${ic('backspace')}</button>`:`<button type="button" data-a="calc" data-key="${k}">${k}</button>`).join('')}
  </div>
  <button class="btn" id="amount-next" data-a="expense-next" disabled>Next</button>
 </div>
 <div class="expense-step" data-step="1" hidden>
  <button type="button" class="amount-context" data-a="expense-back"><strong id="amount-context-value">${esc(money(expenseAmount()))}</strong><span>· Edit</span></button>
  <div class="chips" id="chips">${S.cats.map(c=>`<button class="chip ${c.id===selCat?'on':''}" data-a="sc" data-id="${esc(c.id)}" aria-pressed="${c.id===selCat}">${catBadge(c)}<span>${esc(c.name)}</span></button>`).join('')}</div>
  <div class="spending-toggle" id="spending-toggle" role="group" aria-label="Spending type">${Object.entries(SPENDING_TYPES).map(([type,label])=>`<button type="button" data-a="spending-type" data-v="${type}" class="${type===selectedSpendingType?'on':''}" aria-pressed="${type===selectedSpendingType}">${label}</button>`).join('')}</div>
  <div class="step-actions"><button class="btn ghost back-btn" data-a="expense-back">Back</button><button class="btn" data-a="expense-next">Next</button></div>
 </div>
 <div class="expense-step" data-step="2" hidden>
  <div class="flow-context" id="date-context"></div>
  <div class="calendar" id="expense-calendar"></div>
  <input id="ed" type="hidden" value="${initialDate}">
  <div class="step-actions"><button class="btn ghost back-btn" data-a="expense-back">Back</button><button class="btn" data-a="expense-next">Next</button></div>
 </div>
 <div class="expense-step" data-step="3" hidden>
  <div class="details-context" id="detail-context"></div>
  <input id="en" placeholder="Note (optional)" maxlength="40" aria-label="Note" value="${e?esc(e.note):''}">
  <label class="repeat-setting"><span><strong>Repeat monthly</strong><small>Auto-log on this day every month</small></span><input id="repeat-monthly" type="checkbox" ${e?.recurringId&&S.recurring.some(r=>r.id===e.recurringId&&!r.paused)?'checked':''}><span class="switch-visual" aria-hidden="true"></span></label>
  <button class="btn" id="save-exp" data-a="se" style="margin-top:10px">${e?'Save changes':'Save expense'}</button>
  <div class="step-actions"><button class="btn ghost back-btn" data-a="expense-back">Back</button>${e?`<button class="btn ghost" data-a="dx" data-id="${esc(e.id)}">Delete expense</button>`:''}</div>
 </div>`;
 $('ov').inert=false;$('ov').classList.add('open');
 updateExpenseForm();
 renderExpenseCalendar();
 showExpenseStep(0);
}
const close=()=>{
 $('ov').classList.remove('open');$('ov').inert=true;editing=null;
 const triggerId=monthPickerOpen?monthPickerTriggerId:null;
 monthPickerOpen=false;monthPickerTriggerId='';
 if(triggerId)requestAnimationFrame(()=>$(triggerId)?.focus());
 const trigger=budgetTrigger;budgetModalOpen=false;budgetTrigger=null;
 if(trigger)requestAnimationFrame(()=>(trigger.isConnected?trigger:document.querySelector('[data-a="budget-setup"]'))?.focus());
};

function selectExpenseCategory(id){
 if(id!==selCat)selectSpendingType(cat(id).spendingType);
 selCat=id;
 document.querySelectorAll('#chips .chip').forEach(c=>{
  const selected=c.dataset.id===id;c.classList.toggle('on',selected);c.setAttribute('aria-pressed',String(selected));
 });
 updateDateContext();
}
function selectSpendingType(type){
 if(!validSpendingType(type)){toast('Choose a spending type');return}
 selectedSpendingType=type;
 document.querySelectorAll('#spending-toggle button').forEach(button=>{
  const selected=button.dataset.v===type;button.classList.toggle('on',selected);button.setAttribute('aria-pressed',String(selected));
 });
}
const expenseAmount=()=>Number.parseFloat($('ea')?.value||'')||0;
function updateDateContext(){
 const context=$('date-context');if(!context)return;
 context.innerHTML=`<strong>${esc(money(expenseAmount()))}</strong><span>·</span><span>${esc(cat(selCat).name)}</span>`;
}
function showExpenseStep(step){
 if(step>0&&expenseAmount()<=0){toast('Enter an amount greater than zero');return}
 expenseStep=Math.max(0,Math.min(3,step));
 if(expenseStep===3){
  const date=new Date($('ed').value+'T12:00').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
  $('detail-context').textContent=`${date} · ${SPENDING_TYPES[selectedSpendingType]}`;
 }
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
 if(!validExpenseDate(date)){toast('Choose a valid date');$('ed').focus();return}
 const data={cat:selCat,amt:Math.round(amount*100)/100,note:$('en').value.trim(),date,spendingType:selectedSpendingType};
 generateRecurring();
 const e=editing&&S.exp.find(x=>x.id===editing),entry=e||{id:uid()},previousDate=entry.date;
 const template=entry.recurringId&&S.recurring.find(r=>r.id===entry.recurringId);
 Object.assign(entry,data);
 if(template){
  Object.assign(template,{cat:data.cat,amt:data.amt,note:data.note,spendingType:data.spendingType,day:date===previousDate?template.day:Number(date.slice(8))});
  const next=shift(date.slice(0,7),1);
  if(template.nextMonth<next)template.nextMonth=next;
 }
 if($('repeat-monthly').checked){
  if(template){
   if(template.paused)resumeRecurring(template);
  }else{
   const recurringId=uid();
   S.recurring.push({id:recurringId,cat:data.cat,amt:data.amt,note:data.note,spendingType:data.spendingType,day:Number(date.slice(8)),nextMonth:shift(date.slice(0,7),1),paused:false});
   entry.recurringId=recurringId;
  }
 }else if(template)template.paused=true;
 if(!e)S.exp.push(entry);
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
 if(editingCat===id){editingCat=null;categoryEditorOpen=false}
 save();buzz();render();
 toast(item.name+' deleted',()=>S.cats.splice(i,0,item));
}
function editCat(id){
 const category=S.cats.find(c=>c.id===id);if(!category)return;
 editingCat=id;categoryEditorOpen=true;newIcon=category.icon;newCol=categoryColor(category);render();
 $('cn').focus({preventScroll:true});
 $('cn').scrollIntoView({behavior:'smooth',block:'center'});
}
function saveCat(){
 const n=$('cn').value.trim();
 if(!n){toast('Give it a name');$('cn').focus();return}
 if(S.cats.some(c=>c.id!==editingCat&&c.name.toLowerCase()===n.toLowerCase())){toast('That category already exists');return}
 if(!newIcon||!newCol||!iconAvailable(newIcon)||!colorAvailable(newCol)){toast('Choose an unused icon and color');return}
 const limit=readLimit($('category-budget'));if(limit===false)return;
 const category=editingCat&&S.cats.find(c=>c.id===editingCat);
 if(category){
  Object.assign(category,{name:n,icon:newIcon,color:newCol});setLimit(category,'budget',limit);editingCat=null;categoryEditorOpen=false;
  save();buzz();render();toast(n+' updated');return;
 }
 const created={id:'c'+uid(),name:n,icon:newIcon,color:newCol,spendingType:defaultSpendingType(n)};setLimit(created,'budget',limit);
 S.cats.push(created);categoryEditorOpen=false;save();buzz();render();toast(n+' added');
}
function download(name,text,type){
 const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([text],{type}));a.download=name;
 document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),1000);
}
// Quote CSV cells and neutralize formula injection when opened in spreadsheets.
const cell=v=>{let s=String(v);if(/^[=+\-@]/.test(s))s="'"+s;return'"'+s.replace(/"/g,'""')+'"'};
function exportCsv(){
 if(!S.exp.length){toast('No expenses to export');return}
 const rows=[['Date','Category','Note','Amount','Currency','Spending Type'],...[...S.exp].sort((a,b)=>a.date.localeCompare(b.date)).map(e=>[e.date,cat(e.cat).name,e.note,e.amt.toFixed(2),S.currency,SPENDING_TYPES[spendingTypeFor(e,S.cats)]])];
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
 if(a==='tab'){tab=v;fcat=null;q='';spendingFilter='all';render();scrollTo({top:0})}
 else if(a==='hero-toggle')toggleHeroBreakdown(b);
 else if(a==='add')openSheet();
 else if(a==='month-picker')openMonthPicker();
 else if(a==='mp-year'){monthPickerYear+=Number(v);renderMonthPicker()}
 else if(a==='mp-select'&&/^\d{4}-\d{2}$/.test(v)&&v>='2000-01'&&v<=latestMonth()){mk=v;close();render();scrollTo({top:0})}
 else if(a==='budget-setup')openBudgetModal(b);
 else if(a==='save-budget'){if(saveBudgets()){close();render()}}
 else if(a==='category-settings'){tab='more';render();requestAnimationFrame(()=>$('categories-card')?.scrollIntoView({behavior:'smooth',block:'start'}))}
 else if(a==='pm'&&mk>'2000-01'){mk=shift(mk,-1);render()}
 else if(a==='nm'&&mk<latestMonth()){mk=shift(mk,1);render()}
 else if(a==='tm'){mk=today().slice(0,7);render()}
 else if(a==='all-recent'){fcat=null;q='';spendingFilter='all';tab='ex';render();scrollTo({top:0})}
 else if(a==='fc'){fcat=id;q='';spendingFilter='all';tab='ex';render();scrollTo({top:0})}
 else if(a==='filter-spending'&&(v==='all'||validSpendingType(v))){
  spendingFilter=v;document.querySelectorAll('.filter-chips button').forEach(button=>{const selected=button.dataset.v===v;button.classList.toggle('on',selected);button.setAttribute('aria-pressed',String(selected))});$('xl').innerHTML=exList();
 }
 else if(a==='ec')editCat(id);
 else if(a==='toggle-recurring'){
  generateRecurring();
  const template=S.recurring.find(r=>r.id===id);
  if(template){if(template.paused)resumeRecurring(template);else template.paused=true;save();render();toast(template.paused?'Recurring expense paused':'Recurring expense resumed')}
 }
 else if(a==='delete-recurring'){
  const index=S.recurring.findIndex(r=>r.id===id);
  if(index>=0&&confirm('Delete this recurring schedule? Existing expenses will be kept.')){generateRecurring();S.recurring.splice(index,1);save();render();toast('Recurring schedule deleted')}
 }
 else if(a==='add-category'){
  const wasEditing=!!editingCat;editingCat=null;categoryEditorOpen=wasEditing||!categoryEditorOpen;render();
  if(categoryEditorOpen)$('cn').focus({preventScroll:true});
 }
 else if(a==='cf'){fcat=null;render()}
 else if(a==='ee')openSheet(id);
 else if(a==='close')close();
 else if(a==='sc')selectExpenseCategory(id);
 else if(a==='spending-type')selectSpendingType(v);
 else if(a==='report-mode'&&['cumulative','daily'].includes(v)){reportMode=v;render()}
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
 else if(a==='cancel-edit-cat'){editingCat=null;categoryEditorOpen=false;render();document.querySelector('[data-a="add-category"]')?.focus()}
 else if(a==='undo'&&undoFn){undoFn();undoFn=null;save();render();toast('Restored')}
 else if(a==='csv')exportCsv();
 else if(a==='bk'){download(`pocketbook-backup-${today()}.json`,JSON.stringify(S,null,1),'application/json');toast('Backup saved')}
 else if(a==='rs')restore();
 else if(a==='reset'){if(confirm('Delete all expenses and categories? This cannot be undone.')){const{currency}=S;S={...fresh(),currency};save();render();toast('All data reset')}}
});
document.addEventListener('change',ev=>{
 const t=ev.target;
 if(t.id==='cur'){S.currency=t.value;setFmt();save();render();toast('Currency: '+S.currency)}
 else if(t.id==='monthly-budget'){
  if(saveBudget(t))t.value=S.budget||'';
 }
 else if(t.id==='discretionary-budget'){
  if(saveBudget(t,'discretionaryBudget'))t.value=S.discretionaryBudget||'';
 }
});
document.addEventListener('input',ev=>{
 if(ev.target.id==='q'){q=ev.target.value;$('xl').innerHTML=exList()}
 else if(ev.target.id==='ea')updateExpenseForm();
});
document.addEventListener('pointermove',ev=>{
 const plot=ev.target.closest?.('.report-plot');
 if(plot)scrubReport(plot,ev.clientX);
});
document.addEventListener('pointerdown',ev=>{
 const plot=ev.target.closest?.('.report-plot');
 if(plot)scrubReport(plot,ev.clientX);
});
document.addEventListener('pointerout',ev=>{
 const plot=ev.target.closest?.('.report-plot');
 if(plot&&ev.pointerType==='mouse'&&!plot.contains(ev.relatedTarget))hideReportPoint(plot);
});
document.addEventListener('keydown',ev=>{
 const t=ev.target;
 const plot=t.closest?.('.report-plot');
 if(plot&&['ArrowLeft','ArrowRight','Escape'].includes(ev.key)){
  ev.preventDefault();
  if(ev.key==='Escape')hideReportPoint(plot);
  else{const current=Number(plot.dataset.activeIndex),index=Number.isFinite(current)?current+(ev.key==='ArrowRight'?1:-1):(ev.key==='ArrowRight'?0:reportModel().visiblePoints.length-1);showReportPoint(plot,index)}
  return;
 }
 if($('ov').classList.contains('open')){
  if(ev.key==='Escape'){const wasPickerOrBudget=monthPickerOpen||budgetModalOpen;close();if(!wasPickerOrBudget)document.querySelector('.nav-add')?.focus();return}
  if(ev.key==='Enter'&&budgetModalOpen&&(t.id==='budget-modal-input'||t.id==='cap-modal-input')){ev.preventDefault();if(saveBudgets()){close();render()}return}
  if(ev.key==='Enter'&&!monthPickerOpen&&!budgetModalOpen&&t.tagName==='INPUT'){ev.preventDefault();if(expenseStep<3)showExpenseStep(expenseStep+1);else saveExp();return}
 }
 if(ev.key==='Enter'&&t.id==='cn'){saveCat();return}
 if((ev.key==='Enter'||ev.key===' ')&&t.matches('[role=button][data-a]')){ev.preventDefault();t.dispatchEvent(new MouseEvent('click',{bubbles:true}))}
});
let sx=0,sy=0;
$('app').addEventListener('touchstart',e=>{sx=e.touches[0].clientX;sy=e.touches[0].clientY},{passive:true});
$('app').addEventListener('touchend',e=>{
 if(tab==='more')return;
 const dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;
 if(Math.abs(dx)>70&&Math.abs(dy)<40&&(dx>0?mk>'2000-01':mk<latestMonth())){mk=shift(mk,dx<0?1:-1);render()}
},{passive:true});
window.addEventListener('resize',fitReportStats);
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&generateRecurring())render()});
document.fonts?.ready.then(fitReportStats);
render();
if('serviceWorker' in navigator){
 navigator.serviceWorker.register('./service-worker.js').catch(error=>console.error('Service worker registration failed:',error));
}
