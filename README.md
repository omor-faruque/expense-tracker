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
the budget setup button remains a separate action. The Reports screen also
shows the selected month's split. Adjust the Home hero's blur and transparency
in More under Hero appearance; the preference is included in JSON backups.
On Expenses, use the All, Necessary, and Discretionary chips alongside search
and category filters. Deleted expenses can be restored using Undo.
Older expenses and backups receive category defaults when loaded. Spending
types are included in JSON backups and the CSV export's Spending Type column.

## Recurring expenses

Turn on Repeat monthly on the final expense step to create a monthly schedule.
When the app is opened, revisited, or refreshed, it logs all due occurrences
since the last check; it cannot log bills while the app is closed. Days that
do not exist in a month use its last day. Editing a recurring expense updates
that expense and the schedule for future occurrences, not past entries.
Turning Repeat monthly off while editing pauses the schedule.
Deleting an individual occurrence skips it permanently. Pause, resume, or
delete schedules in More; paused months are not backfilled, and deleting a
schedule keeps its existing expenses.

Recurring schedules, their progress, spending caps, and category limits are
included in JSON backups. CSV exports contain the logged expenses, not schedules.

## Spending analytics

All screens use compact currency symbols (for example, `$2,161.60` for CAD).
Home, Expenses, and Reports share month arrows and a month picker. Set or remove
the overall monthly budget and discretionary cap in More or using the quick
budget sheet on Home and Reports. Optional category limits can be set while
adding or editing categories. Category progress turns amber at 80% and red at
100%; discretionary cap progress turns red above 90%.
In More, use Add category to expand the category editor; existing categories
can also be edited there. KPI cards have single-line titles and
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
