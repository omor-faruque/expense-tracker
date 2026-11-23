const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const source = fs.readFileSync(`${__dirname}/script.js`, 'utf8');

function app(now = '2026-11-21T12:00:00') {
 const elements = new Map(['app', 'tabs'].map(id => [id, {
  innerHTML: '',
  addEventListener() {}
 }]));
 const context = vm.createContext({
  document: {
   getElementById: id => elements.get(id),
   querySelectorAll: () => [],
   addEventListener() {}
  },
  localStorage: {getItem: () => null, setItem() {}},
  matchMedia: () => ({matches: true}),
  navigator: {},
  window: {addEventListener() {}},
  requestAnimationFrame() {},
  Date: class extends Date {
   constructor(...args) {super(...(args.length ? args : [now]))}
  },
  console
 });
 vm.runInContext(source, context);
 return code => vm.runInContext(code, context);
}

test('category defaults migrate legacy expenses and preserve saved overrides', () => {
 const run = app();
 assert.deepEqual(JSON.parse(run('JSON.stringify(fresh().cats.map(c=>[c.name,c.spendingType]))')), [
  ['Groceries', 'necessary'], ['Rent', 'necessary'], ['Utilities', 'necessary'],
  ['Phone & Internet', 'necessary'], ['Gas', 'necessary'], ['Shopping', 'discretionary'],
  ['Dining Out', 'discretionary'], ['Transport', 'necessary'], ['TTC', 'necessary'],
  ['Health', 'necessary'], ['Fun', 'discretionary'], ['Miscellaneous', 'discretionary']
 ]);
 const types = run(`JSON.stringify(normalize({
  cats:[{id:1,name:' RENT ',icon:'home',color:'#312E81'},{id:'custom',name:'Pets'}],
  exp:[
   {id:'legacy',cat:1,amt:20,date:'2026-11-20'},
   {id:'override',cat:1,amt:10,date:'2026-11-20',spendingType:'discretionary'},
   {id:'invalid',cat:1,amt:10,date:'2026-11-20',spendingType:'<script>'},
   {id:'array',cat:1,amt:10,date:'2026-11-20',spendingType:['discretionary']},
   {id:'custom',cat:'custom',amt:10,date:'2026-11-20'},
   {id:'orphan',cat:'deleted',amt:10,date:'2026-11-20'}
  ]
 }).exp.map(e=>e.spendingType))`);
 assert.deepEqual(JSON.parse(types), ['necessary', 'discretionary', 'necessary', 'necessary', 'discretionary', 'discretionary']);
});

test('backup round trips, category renames, and deletions keep expense classifications', () => {
 const run = app();
 run(`S=normalize({cats:[{id:'rent',name:'Rent'}],exp:[
  {id:'legacy',cat:'rent',amt:20,date:'2026-11-20'},
  {id:'override',cat:'rent',amt:10,date:'2026-11-20',spendingType:'discretionary'}
 ]});S.cats[0].name='Holiday';S=normalize(JSON.parse(JSON.stringify(S)))`);
 assert.equal(run('S.cats[0].spendingType'), 'necessary');
 run('S.cats=[];S=normalize(JSON.parse(JSON.stringify(S)))');
 assert.equal(run('S.exp[0].spendingType'), 'necessary');
 assert.equal(run('S.exp[1].spendingType'), 'discretionary');
});

test('category changes reset the toggle but reselecting a category keeps an override', () => {
 const run = app();
 run("selCat='c0';selectSpendingType('discretionary');selectExpenseCategory('c0')");
 assert.equal(run('selectedSpendingType'), 'discretionary');
 run("selectExpenseCategory('c1')");
 assert.equal(run('selectedSpendingType'), 'necessary');
 run("selectExpenseCategory('c6')");
 assert.equal(run('selectedSpendingType'), 'discretionary');
});

test('monthly breakdown uses expense overrides, exact cents, and complementary percentages', () => {
 const run = app();
 run(`mk='2026-11';S.exp=[
  {id:'1',cat:'c6',amt:1926.60,date:'2026-11-20',spendingType:'necessary'},
  {id:'2',cat:'c1',amt:210,date:'2026-11-20',spendingType:'discretionary'},
  {id:'3',cat:'c1',amt:999,date:'2026-10-20',spendingType:'necessary'}
 ]`);
 const card = run('spendingBreakdownCard(monthExp(mk))');
 assert.match(card, /\$1,926\.60 · 90%/);
 assert.match(card, /\$210\.00 · 10%/);
 assert.match(card, /November 2026/);
 assert.doesNotMatch(card, /999/);
 run("reportMode='daily'");
 assert.equal(run('spendingBreakdownCard(monthExp(mk))'), card);
 const empty = run('spendingBreakdownCard([])');
 assert.match(empty, /No spending this month yet/);
 assert.equal((empty.match(/<strong>\$0\.00 · 0%<\/strong>/g) || []).length, 2);
 assert.doesNotMatch(empty, /NaN|Infinity/);
 const allNecessary = run("spendingBreakdownCard([{cat:'c0',amt:0.1},{cat:'c0',amt:0.2}])");
 assert.match(allNecessary, /\$0\.30 · 100%/);
 assert.match(allNecessary, /\$0\.00 · 0%/);
 const allDiscretionary = run("spendingBreakdownCard([{cat:'c6',amt:0.3}])");
 assert.match(allDiscretionary, /\$0\.30 · 100%/);
});

test('home hero breakdown follows the selected month and uses compact currency', () => {
 const run = app();
 run(`mk='2026-11';S.budget=3500;S.exp=[
  {id:'1',cat:'c6',amt:2056.60,date:'2026-11-20',spendingType:'necessary'},
  {id:'2',cat:'c1',amt:105,date:'2026-11-21',spendingType:'discretionary'},
  {id:'3',cat:'c0',amt:999,date:'2026-10-20'}
 ]`);
 const hero = run("overview(monthExp(mk),sum(monthExp(mk))).split('</section>')[0]");
 assert.match(hero, /aria-expanded="false" aria-controls="hero-breakdown"/);
 assert.match(hero, /id="hero-breakdown" aria-hidden="true"/);
 assert.match(hero, /\$2,056\.60 · 95%/);
 assert.match(hero, /\$105\.00 · 5%/);
 assert.match(hero, /\$2,161\.60 spent/);
 assert.match(hero, /of \$3,500\.00/);
 assert.doesNotMatch(hero, /CA\$|\$999\.00/);
 assert.match(run('heroMoney(2161.6)'), /money-prefix">\$/);
 assert.doesNotMatch(run('heroMoney(2161.6)'), /CA\$/);
 run("S.currency='EUR';setFmt()");
 assert.match(run('heroMoney(2161.6)'), /money-prefix">€/);
 assert.match(run('overview([],0)'), /€0\.00 · 0%/);
 assert.doesNotMatch(run('overview([],0)'), /NaN|Infinity/);
});

test('hero glass strength defaults safely and controls the Home hero appearance', () => {
 const run = app();
 assert.equal(run('fresh().heroGlass'), 50);
 assert.equal(run("normalize({cats:[],exp:[]}).heroGlass"), 50);
 assert.equal(run("normalize({cats:[],exp:[],heroGlass:140}).heroGlass"), 100);
 assert.equal(run("normalize({cats:[],exp:[],heroGlass:-10}).heroGlass"), 0);
 assert.equal(run("normalize({cats:[],exp:[],heroGlass:'70'}).heroGlass"), 50);

 run('S.heroGlass=72');
 assert.match(run('overview([],0)'), /--hero-glass-blur:22\.4px/);
 assert.match(run('overview([],0)'), /--hero-glass-light:0\.74/);
 assert.match(run('manage()'), /id="hero-glass" type="range" min="0" max="100" step="1" value="72"/);
 assert.match(run('manage()'), /id="hero-glass-output"[^>]*>72%/);
});

test('home hero toggle updates its expanded state and survives rerendering', () => {
 const run = app();
 run(`const panel={setAttribute(name,value){this[name]=value}};
 const hero={classList:{toggle(name,value){this[name]=value}}};
 const button={setAttribute(name,value){this[name]=value},closest(){return hero}};
 const originalGet=document.getElementById;
 document.getElementById=id=>id==='hero-breakdown'?panel:originalGet(id);
 toggleHeroBreakdown(button)`);
 assert.equal(run("button['aria-expanded']"), 'true');
 assert.equal(run("panel['aria-hidden']"), 'false');
 assert.equal(run("hero.classList.expanded"), true);
 assert.match(run('overview([],0)'), /aria-expanded="true"/);
 run('toggleHeroBreakdown(button)');
 assert.equal(run("button['aria-expanded']"), 'false');
 assert.equal(run("panel['aria-hidden']"), 'true');
 assert.equal(run("hero.classList.expanded"), false);
});

test('recent rows show type and date without duplicate category; CSV includes saved type', () => {
 const run = app();
 run(`S.exp=[{id:'1',cat:'c6',amt:20,date:'2026-11-20',note:'',spendingType:'necessary'}]`);
 const rows = run('recentExpenses(S.exp)');
 assert.equal((rows.match(/Dining Out/g) || []).length, 1);
 assert.match(rows, /20 Nov 2026/);
 assert.match(rows, /spending-badge necessary">Necessary/);
 run("let exported;download=(name,text)=>{exported=text};toast=()=>{};exportCsv()");
 assert.match(run('exported'), /"Currency","Spending Type"/);
 assert.match(run('exported'), /"CAD","Necessary"/);
});

test('Reports and Expenses tabs have distinct matching headings', () => {
 const run = app();
 run("tab='reports';render()");
 assert.match(run("document.getElementById('app').innerHTML"), /<h1>Reports<\/h1>/);
 run("tab='ex';render()");
 assert.match(run("document.getElementById('app').innerHTML"), /<h1>Expenses<\/h1>/);
});

test('all screens use compact currency symbols and the same month controls', () => {
 const run = app();
 run("mk='2026-11';S.exp=[{id:'1',cat:'c0',amt:50,date:'2026-11-20',note:''}]");
 assert.match(run('recentExpenses(S.exp)'), /<strong>\$50\.00<\/strong>/);
 assert.doesNotMatch(run('recentExpenses(S.exp)'), /CA\$|>CAD</);
 assert.doesNotMatch(run('manage()'), /CA\$/);
 assert.equal(run('sym()'), '$');
 for (const tab of ['ov', 'ex', 'reports']) {
  run(`tab='${tab}';render()`);
  const html = run("document.getElementById('app').innerHTML");
  assert.match(html, /data-a="pm" aria-label="Previous month"/);
  assert.match(html, /data-a="nm" aria-label="Next month"/);
  assert.match(html, /data-a="month-picker".*Nov 2026/);
 }
 run("S.currency='EUR';setFmt()");
 assert.equal(run('money(50)'), '€50.00');
 assert.equal(run('sym()'), '€');
});

test('spending type chips combine with category and search filters', () => {
 const run = app();
 run(`mk='2026-11';S.exp=[
  {id:'1',cat:'c0',amt:50,date:'2026-11-20',note:'Market',spendingType:'necessary'},
  {id:'2',cat:'c0',amt:20,date:'2026-11-20',note:'Treat',spendingType:'discretionary'},
  {id:'3',cat:'c6',amt:10,date:'2026-11-20',note:'Lunch',spendingType:'discretionary'}
 ]`);
 assert.match(run('expenses()'), /Filter by spending type/);
 run("spendingFilter='discretionary';fcat='c0'");
 assert.match(run('exList()'), /1 expense · \$20\.00/);
 assert.match(run('exList()'), /Treat/);
 assert.doesNotMatch(run('exList()'), /Market|Lunch/);
 run("q='market'");
 assert.match(run('exList()'), /No matches found/);
});

test('category editor is collapsed by default and supports editing', () => {
 const run = app();
 assert.match(run('manage()'), /aria-expanded="false"/);
 assert.doesNotMatch(run('manage()'), /id="pi"/);
 run("categoryEditorOpen=true;editingCat='c0';newIcon=S.cats[0].icon;newCol=S.cats[0].color");
 const html = run('manage()');
 assert.match(html, /aria-expanded="true"/);
 assert.match(html, /Edit category/);
 assert.match(html, /value="Groceries"/);
 assert.match(html, /Save category/);
});

test('budget validation updates, rejects invalid values, and removes budgets', () => {
 const run = app();
 run("toast=()=>{};let input={validity:{badInput:false},value:'50.25',focus(){this.focused=true}}");
 assert.equal(run('saveBudget(input)'), true);
 assert.equal(run('S.budget'), 50.25);
 run("input.value='0.001'");
 assert.equal(run('saveBudget(input)'), false);
 assert.equal(run('S.budget'), 50.25);
 assert.equal(run('input.focused'), true);
 run("input.value='';input.validity.badInput=true");
 assert.equal(run('saveBudget(input)'), false);
 assert.equal(run('S.budget'), 50.25);
 run("input.validity.badInput=false");
 assert.equal(run('saveBudget(input)'), true);
 assert.equal(run("'budget' in S"), false);
});

test('budget modal saves both limits atomically and allows either to be removed', () => {
 const run = app();
 run(`S.budget=500;S.discretionaryBudget=100;toast=()=>{};
 const inputs={'budget-modal-input':{validity:{badInput:false},value:'600',focus(){}},'cap-modal-input':{validity:{badInput:false},value:'0',focus(){}}};
 const getOriginal=document.getElementById;document.getElementById=id=>inputs[id]||getOriginal(id)`);
 assert.equal(run('saveBudgets()'), false);
 assert.equal(run('S.budget'), 500);
 assert.equal(run('S.discretionaryBudget'), 100);
 run("inputs['cap-modal-input'].value=''");
 assert.equal(run('saveBudgets()'), true);
 assert.equal(run('S.budget'), 600);
 assert.equal(run("'discretionaryBudget' in S"), false);
});

test('recurring bills backfill only due months, clamp month ends, and survive backup and deletion', () => {
 const run = app();
 run(`S.recurring=[{id:'bill',cat:'c1',amt:70,note:'Rent',spendingType:'necessary',day:31,nextMonth:'2026-01',paused:false}]`);
 assert.equal(run("generateRecurring('2026-03-30')"), 2);
 assert.deepEqual(JSON.parse(run('JSON.stringify(S.exp.map(e=>e.date))')), ['2026-01-31', '2026-02-28']);
 assert.equal(run("generateRecurring('2026-03-30')"), 0);
 run("S.exp.splice(1,1);S=normalize(JSON.parse(JSON.stringify(S)))");
 assert.equal(run("generateRecurring('2026-03-31')"), 1);
 assert.deepEqual(JSON.parse(run('JSON.stringify(S.exp.map(e=>e.date))')), ['2026-01-31', '2026-03-31']);
 assert.equal(run("generateRecurring('2026-03-31')"), 0);
 assert.equal(run("recurringDate('2028-02',31)"), '2028-02-29');
 assert.match(run('recentExpenses(S.exp)'), /aria-label="Recurring expense"/);
});

test('render persists due occurrences and deleting one does not recreate it', () => {
 const run = app();
 run(`S.recurring=[{id:'bill',cat:'c1',amt:70,note:'Rent',spendingType:'necessary',day:10,nextMonth:'2026-10',paused:false}];
 let saved;localStorage.setItem=(key,value)=>saved=value;toast=()=>{};
 const getOriginal=document.getElementById;
 document.getElementById=id=>id==='ov'?{classList:{contains:()=>false}}:getOriginal(id);
 render()`);
 assert.deepEqual(JSON.parse(run('JSON.stringify(S.exp.map(e=>e.date))')), ['2026-10-10', '2026-11-10']);
 assert.equal(JSON.parse(run('saved')).recurring[0].nextMonth, '2026-12');
 run('delExp(S.exp[1].id);render()');
 assert.deepEqual(JSON.parse(run('JSON.stringify(S.exp.map(e=>e.date))')), ['2026-10-10']);
 assert.equal(JSON.parse(run('saved')).exp.length, 1);
});

test('paused bills skip paused months and resume without duplicating an already logged month', () => {
 const run = app();
 run(`S.recurring=[{id:'bill',cat:'c1',amt:70,note:'Rent',spendingType:'necessary',day:15,nextMonth:'2026-01',paused:false}]`);
 assert.equal(run("generateRecurring('2026-01-15')"), 1);
 run('S.recurring[0].paused=true');
 assert.equal(run("generateRecurring('2026-04-10')"), 0);
 run("resumeRecurring(S.recurring[0],'2026-04-10')");
 assert.equal(run("generateRecurring('2026-04-14')"), 0);
 assert.equal(run("generateRecurring('2026-04-15')"), 1);
 assert.deepEqual(JSON.parse(run('JSON.stringify(S.exp.map(e=>e.date))')), ['2026-01-15', '2026-04-15']);
 run("S.recurring[0].paused=true;resumeRecurring(S.recurring[0],'2026-04-15')");
 assert.equal(run("generateRecurring('2026-04-15')"), 0);
});

test('editing a clamped recurring expense preserves the scheduled day and updates the template', () => {
 const run = app('2026-02-28T12:00:00');
 run(`S.recurring=[{id:'bill',cat:'c1',amt:70,note:'Rent',spendingType:'necessary',day:31,nextMonth:'2026-03',paused:false}];
 S.exp=[{id:'e',recurringId:'bill',cat:'c1',amt:70,note:'Rent',spendingType:'necessary',date:'2026-02-28'}];
 editing='e';selCat='c1';selectedSpendingType='necessary';toast=()=>{};
 const fields={ea:{value:'75'},ed:{value:'2026-02-28'},en:{value:'Updated rent'},'repeat-monthly':{checked:true},ov:{classList:{remove(){}},inert:false}};
 const getOriginal=document.getElementById;
 document.getElementById=id=>fields[id]||getOriginal(id);
 saveExp()`);
 assert.equal(run('S.recurring[0].day'), 31);
 assert.equal(run('S.recurring[0].amt'), 75);
 assert.equal(run('S.recurring[0].note'), 'Updated rent');
 assert.equal(run("generateRecurring('2026-03-31')"), 1);
 assert.equal(run('S.exp.at(-1).date'), '2026-03-31');
 assert.equal(run('S.exp.at(-1).amt'), 75);
});

test('budgets and recurring schedules round trip through normalization', () => {
 const run = app();
 run(`S.cats[0].budget=100;S.discretionaryBudget=400;S.recurring=[{id:'r',cat:'c0',amt:25,note:'Bill',spendingType:'discretionary',day:31,nextMonth:'2027-02',paused:true}];
 S.exp=[{id:'e',cat:'c0',amt:25,note:'Bill',spendingType:'discretionary',date:'2026-11-21',recurringId:'r'}];
 S=normalize(JSON.parse(JSON.stringify(S)))`);
 assert.equal(run('S.cats[0].budget'), 100);
 assert.equal(run('S.discretionaryBudget'), 400);
 assert.equal(run('S.recurring[0].paused'), true);
 assert.equal(run('S.recurring[0].nextMonth'), '2027-02');
 assert.equal(run('S.exp[0].recurringId'), 'r');
});

test('budget progress uses exact category and discretionary thresholds', () => {
 const run = app();
 assert.equal(run("budgetProgress(79,100,'#123456').color"), '#123456');
 assert.equal(run("budgetProgress(80,100,'#123456').color"), '#F59E0B');
 assert.equal(run("budgetProgress(100,100,'#123456').color"), '#EF4444');
 assert.equal(run("budgetProgress(120,100,'#123456').width"), 100);
 run("S.discretionaryBudget=100;S.cats[0].budget=100");
 assert.match(run('discretionaryCap(9000)'), /background:#F59E0B/);
 assert.match(run('discretionaryCap(9001)'), /background:#EF4444/);
 const report = run("reports([{cat:'c0',amt:80,date:'2026-11-20',spendingType:'discretionary'}],80)");
 assert.match(report, /\$80\.00<\/strong><small>\/ \$100\.00 · 80% of limit/);
 assert.match(report, /width:80%;background:#F59E0B/);
 assert.match(report, /\$80\.00 of \$100\.00 cap/);
 assert.match(run('reports([],0)'), /\$0\.00<\/strong><small>\/ \$100\.00/);
});

test('all Expenses cards use compact dollar symbols without changing other currency preferences', () => {
 const run = app();
 run("mk='2026-11';S.budget=3500");
 const kpis = run('reports([],2161.6).split(\'<section class="card spending-breakdown">\')[0]');
 assert.match(kpis, /<strong>\$2,161\.60<\/strong>/);
 assert.match(kpis, /<strong>\$3,500\.00<\/strong>/);
 assert.match(kpis, /<small>Remaining<\/small><strong>\$1,338\.40<\/strong>/);
 assert.doesNotMatch(kpis, /CA\$/);
 assert.match(run('reports([],4000)'), /<strong>\$500\.00<\/strong><span>Over budget/);
 run(`S.exp=[{id:'1',cat:'c0',amt:2056.6,date:'2026-11-20',note:''},{id:'2',cat:'c6',amt:105,date:'2026-11-20',note:''}]`);
 const report = run('reports(monthExp(mk),sum(monthExp(mk)))');
 assert.doesNotMatch(report, /CA\$/);
 assert.match(report, /\$2,056\.60/);
 assert.match(report, /\$105\.00/);
 assert.doesNotMatch(run('exList()'), /CA\$/);
 run("S.currency='EUR';setFmt()");
 assert.equal(run('shortMoney(2161.6)'), '€2,161.60');
});

test('monthly chart accumulates exact daily cents and scales to the linear budget pace', () => {
 const run = app();
 run(`mk='2026-11';S.budget=3500;S.exp=[
  {cat:'c1',amt:1800,date:'2026-11-01'},
  {cat:'c0',amt:0.1,date:'2026-11-03'},
  {cat:'c0',amt:0.2,date:'2026-11-03'},
  {cat:'c2',amt:361.3,date:'2026-11-20'},
  {cat:'c0',amt:999,date:'2026-10-20'}
 ]`);
 const points = JSON.parse(run('JSON.stringify(reportModel().points)'));
 assert.equal(points.length, 30);
 assert.equal(points[0].value, 1800);
 assert.equal(points[1].daily, 0);
 assert.equal(points[1].value, 1800);
 assert.equal(points[2].daily, 0.3);
 assert.equal(points[2].cumulative, 1800.3);
 assert.equal(points[29].value, 2161.6);
 assert.equal(run('reportModel().budget'), 3500);
 assert.ok(run('reportModel().yMax') >= 3500);
 const card = run('reportChartCard()');
 assert.match(card, /Monthly Budget Pace/);
 assert.match(card, /report-budget-pace" d="M 88 150 L 616 /);
 assert.match(card, /\$0/);
 assert.match(card, /\$1\.5K/);
 assert.match(card, /\$3K/);
 assert.match(card, /\$4\.5K/);
 assert.match(card, /\$6K/);
 assert.equal(run('reportModel().yMax'), 6000);
 assert.doesNotMatch(run('chartLinePath(chartCoordinates(reportModel().points))'), / C /);
 run('S.budget=7000');
 assert.equal(run('reportModel().budget'), 7000);
 assert.ok(run('reportModel().yMax') >= 7000);
});

test('chart uses a nice scale with headroom for visible values in each mode', () => {
 const run = app();
 run("mk='2026-11';S.exp=[{cat:'c0',amt:70,date:'2026-11-21'},{cat:'c0',amt:10000,date:'2026-11-25'}]");
 assert.deepEqual(JSON.parse(run('JSON.stringify(reportModel().yTicks)')), [0, 25, 50, 75, 100]);
 const card = run('reportChartCard()');
 for (const value of ['$0', '$25', '$50', '$75', '$100']) assert.ok(card.includes(value));
 assert.match(card, /report-area/);
 assert.match(card, /report-endpoint/);
 run("reportMode='daily';S.exp=[{cat:'c0',amt:0.01,date:'2026-11-21'}]");
 assert.deepEqual(JSON.parse(run('JSON.stringify(reportModel().yTicks)')), [0, 0.01, 0.02, 0.03, 0.04]);
 for (const value of ['$0', '$0.01', '$0.02', '$0.03', '$0.04']) assert.ok(run('reportChartCard()').includes(value));
 run("S.exp=[]");
 assert.equal(run('reportModel().yMax'), 1);
});

test('report combines ranked categories and donut with a separate insights card', () => {
 const run = app();
 run(`mk='2026-11';S.exp=[
  {id:'1',cat:'c0',amt:50,date:'2026-11-20',note:'Market'},
  {id:'2',cat:'c6',amt:20,date:'2026-11-21',note:'Lunch'}
 ]`);
 const report = run('reports(monthExp(mk),sum(monthExp(mk)))');
 assert.match(report, /2 expenses/);
 assert.match(report, /No budget set/);
 assert.match(report, /data-a="budget-setup"><small>Remaining<\/small>.*Tap to set →/);
 assert.equal((report.match(/Spending by Category/g) || []).length, 1);
 assert.doesNotMatch(report, /Top Spending|Category Breakdown/);
 assert.match(report, /report-donut/);
 assert.match(report, /data-a="fc" data-id="c0"/);
 assert.match(report, /\$50\.00<\/strong><small>71%/);
 assert.match(report, /\$20\.00<\/strong><small>29%/);
 assert.match(report, /Expense Insights/);
 assert.match(report, /Highest Expense<\/small><strong>\$50\.00<\/strong>/);
 assert.match(report, /Lowest Expense<\/small><strong>\$20\.00<\/strong>/);
 assert.match(report, /Average Daily Spend<\/small><strong>\$3\.33<\/strong>/);
 const emptyReport = run('reports([],0)');
 assert.match(emptyReport, /No expenses for this period/);
 assert.doesNotMatch(emptyReport, /NaN|Infinity|report-donut/);
});

test('daily mode excludes only Rent and follows the page month selector', () => {
 const run = app();
 run(`mk='2026-11';S.budget=3500;S.cats[1].name=' rEnT ';S.exp=[
  {cat:'c1',amt:1800,date:'2026-11-01'},
  {cat:'c0',amt:20,date:'2026-11-01'},
  {cat:'c2',amt:100,date:'2026-11-02'},
  {cat:'c3',amt:50,date:'2026-11-03'}
 ];reportMode='daily'`);
 assert.equal(run('reportModel().points[0].value'), 20);
 assert.equal(run('reportModel().points[0].cumulative'), 1820);
 assert.equal(run('reportModel().points[1].value'), 100);
 assert.equal(run('reportModel().points[2].value'), 50);
 assert.equal(run('reportModel().budget'), null);
 assert.doesNotMatch(run('reportChartCard()'), /report-budget-pace|Monthly Budget Pace/);
 run("reportMode='cumulative'");
 assert.equal(run('reportModel().points[0].value'), 1820);
 assert.doesNotMatch(run('reportChartCard()'), /report-range|This Month|<select/);
 run("mk='2026-10';S.exp=[{cat:'c0',amt:20,date:'2026-10-30'},{cat:'c1',amt:1800,date:'2026-10-31'}]");
 assert.equal(run('reportModel().visiblePoints.length'), 31);
 assert.equal(run('reportModel().points.at(-1).cumulative'), 1820);
 run("reportMode='daily'");
 assert.equal(run('reportModel().points.at(-2).value'), 20);
 assert.equal(run('reportModel().points.at(-1).value'), 0);
});

test('empty and over-budget charts stay finite and respect month lengths', () => {
 const run = app();
 for (const [month, days] of [['2026-02', 28], ['2028-02', 29], ['2026-11', 30], ['2026-12', 31]]) {
  run(`mk='${month}';S.exp=[];delete S.budget`);
  assert.equal(run('reportModel().points.length'), days);
  assert.equal(run('reportModel().points.at(-1).cumulative'), 0);
  assert.doesNotMatch(run('reportChartCard()'), /NaN|Infinity|Monthly Budget Pace/);
 }
 run("S.budget=100;S.exp=[{cat:'c1',amt:200,date:'2026-12-01'}]");
 assert.ok(run('reportModel().yMax') >= 200);
 assert.ok(run('chartCoordinates(reportModel().points).every(p=>p.y>=CHART.top&&p.y<=CHART.bottom)'));
});

test('current month stops at today while the budget pace and axes span the full month', () => {
 const run = app();
 run(`mk='2026-11';S.budget=3500;S.exp=[
  {cat:'c1',amt:1800,date:'2026-11-01'},
  {cat:'c0',amt:100,date:'2026-11-21'},
  {cat:'c0',amt:9000,date:'2026-11-28'}
 ]`);
 assert.equal(run('reportModel().visiblePoints.length'), 21);
 assert.equal(run('reportModel().visiblePoints.at(-1).cumulative'), 1900);
 assert.equal(run('reportModel().yMax'), 6000);
 assert.ok(Math.abs(run('chartCoordinates(reportModel().visiblePoints).at(-1).x') - 457.6) < 0.000001);
 const card = run('reportChartCard()');
 assert.match(card, /report-endpoint/);
 assert.match(card, /report-line" pathLength="1000"/);
 assert.match(card, /L 457\.60 150 L 88 150 Z/);
 assert.match(card, /report-budget-pace" d="M 88 150 L 616 74\.17"/);
 assert.match(card, />30<\/span>/);
 run("mk='2026-10'");
 assert.equal(run('reportModel().visiblePoints.length'), 31);
 assert.doesNotMatch(run('reportChartCard()'), /report-endpoint/);
 run("mk='2026-12'");
 assert.equal(run('reportModel().visiblePoints.length'), 0);
 assert.doesNotMatch(run('reportChartCard()'), /class="report-line"|report-endpoint|NaN/);
 assert.match(run('reportChartCard()'), /This month has not started yet/);
});

test('first and final days of the month use their correct endpoint coordinates', () => {
 const first = app('2026-11-01T12:00:00');
 first("mk='2026-11'");
 assert.equal(first('reportModel().visiblePoints.length'), 1);
 assert.equal(first('chartCoordinates(reportModel().visiblePoints)[0].x'), 105.6);
 const last = app('2026-11-30T12:00:00');
 last("mk='2026-11'");
 assert.equal(last('reportModel().visiblePoints.length'), 30);
 assert.equal(last('chartCoordinates(reportModel().visiblePoints).at(-1).x'), 616);
});

test('monthly tooltip shows cumulative and daily amounts and stays within plot bounds', () => {
 const run = app();
 run(`mk='2026-11';S.exp=[
  {cat:'c1',amt:1800,date:'2026-11-01'},
  {cat:'c0',amt:20,date:'2026-11-02'}
 ];
 const tooltip={innerHTML:'',style:{},offsetWidth:210};
 const marker={setAttribute(){}};
 const plot={clientWidth:248,clientHeight:164,dataset:{},setAttribute(){},querySelector:selector=>selector==='.report-tooltip'?tooltip:marker};
 showReportPoint(plot,1)`);
 assert.match(run('tooltip.innerHTML'), /Cumulative: \$1,820\.00/);
 assert.match(run('tooltip.innerHTML'), /Daily spend: \$20\.00/);
 assert.ok(run('parseFloat(tooltip.style.left)>=tooltip.offsetWidth/2'));
 assert.ok(run('parseFloat(tooltip.style.left)<=plot.clientWidth-tooltip.offsetWidth/2'));
 run("reportMode='daily';showReportPoint(plot,0)");
 assert.match(run('tooltip.innerHTML'), /Cumulative: \$1,800\.00/);
 assert.match(run('tooltip.innerHTML'), /Daily \(Excl\. Rent\): \$0\.00/);
 run("reportMode='cumulative';showReportPoint(plot,29)");
 assert.match(run('tooltip.innerHTML'), /November 21, 2026/);
 assert.equal(run('plot.dataset.activeIndex'), '20');
});
