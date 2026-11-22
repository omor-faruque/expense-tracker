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
  localStorage: {getItem: () => null},
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
 assert.match(card, /\$1K/);
 assert.match(card, /\$2K/);
 assert.match(card, /\$3K/);
 assert.match(card, /\$4K/);
 assert.equal(run('reportModel().yMax'), 4000);
 assert.doesNotMatch(run('chartLinePath(chartCoordinates(reportModel().points))'), / C /);
 run('S.budget=7000');
 assert.equal(run('reportModel().budget'), 7000);
 assert.ok(run('reportModel().yMax') >= 7000);
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
 assert.equal(run('reportModel().yMax'), 4000);
 assert.ok(Math.abs(run('chartCoordinates(reportModel().visiblePoints).at(-1).x') - 457.6) < 0.000001);
 const card = run('reportChartCard()');
 assert.match(card, /report-endpoint/);
 assert.match(card, /report-line" pathLength="1000"/);
 assert.match(card, /L 457\.60 150 L 88 150 Z/);
 assert.match(card, /report-budget-pace" d="M 88 150 L 616 36\.25"/);
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
