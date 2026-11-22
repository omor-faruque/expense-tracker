# Pocketbook

Pocketbook is a framework-free expense tracker. No build step is required.

## Spending types

Expenses are classified as Necessary or Discretionary. Rent, Groceries,
Utilities, Phone & Internet, Gas, Transport, TTC, and Health default to
Necessary; Dining Out, Shopping, Fun, Miscellaneous, and custom categories
default to Discretionary. Category names matching a Necessary default use
that default, including newly created categories.

Use the one-tap toggle on the category step to override an expense's type.
Choosing a different category applies its default again. Editing an expense
keeps its saved type unless you change it or choose another category.
Category renames and deletions do not reclassify saved expenses.

Home shows a subtle spending-type badge beside each recent expense's date.
Tap the Home spending banner to expand or collapse the selected month's split;
the budget setup button remains a separate action. The Expenses analytics
screen (Reports tab) also shows the selected month's split.
Older expenses and backups receive category defaults when loaded. Spending
types are included in JSON backups and the CSV export's Spending Type column.

## Spending analytics

The Home spending banner and Expenses screens use compact currency symbols
(for example, `$2,161.60` for CAD). KPI cards have single-line titles and
amounts that resize to fit narrow screens. The three KPI cards share a height;
the budget and unset remaining cards link to budget setup. Other currency
preferences are preserved. Spending by Category combines a donut with ranked,
selectable category rows, followed by a three-column Expense Insights card.

Spending Trend follows the page's month selector and defaults to cumulative
spending. The current month's curve and fill stop at today, with a glowing
endpoint; past months show all days, and future months have no spending curve
yet. Future-dated expenses remain in monthly summaries but are not plotted
before their date. With a monthly budget set, a dashed Monthly Budget Pace
line extends from zero to that budget at month end.

Both chart modes scale their currency axis to the visible spending data with
about 20% headroom and rounded tick intervals. In cumulative mode the scale
also includes the budget pace; an empty chart uses a `$1` ceiling. Axis labels
use the app font with tabular numerals. The curve draws in over 600ms; reduced-motion
preferences disable the animation. Hover, tap, or use the arrow keys to scrub
elapsed days with a guideline and exact-date tooltip. Future positions clamp
to the latest elapsed day.

Daily (Excl. Rent) shows daily spending excluding only the category named
Rent (case-insensitive), while its tooltip still shows the full cumulative
total. The budget pace is hidden in this mode, and its axis scales to daily
amounts to keep everyday spending visible. The toggle sits beside the chart
heading; the page's month selector is the only timeframe control.

Run the regression tests with `node --test script.test.js`.

## Install and use offline

Serve this directory over HTTPS, or use localhost for development (for example,
run `python3 -m http.server 8000` and visit `http://localhost:8000/`). Opening the
HTML file directly does not enable service workers. Use your browser's install
option, or on iOS use Safari's Share menu and choose Add to Home Screen.

After the first successful online visit, the app's local files are available
offline. The optional Google font requires a connection; a system font is used
otherwise. Expenses stay in browser storage, not in the app cache. Clearing
site data or using a separate browser or installed-app storage may remove or
separate that data, so export a backup before clearing site data or switching.
