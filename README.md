# Pocketbook

Pocketbook is a framework-free expense tracker. No build step is required.

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
