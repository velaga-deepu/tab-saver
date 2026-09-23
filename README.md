# Tab Saver - Save Tabs for Later

A Chrome/Edge browser extension to save the current tab's title and URL for
later, then revisit or remove them from a simple popup.

## Features
- Save the currently active tab with one click
- View all saved tabs in a clean popup list
- Click any saved tab to reopen it
- Remove individual saved tabs

## Built With
- HTML, CSS, JavaScript (vanilla, no frameworks)
- Chrome Extensions Manifest V3
- `chrome.storage` API for persisting saved tabs
- `chrome.tabs` API for reading the active tab

## How It Works
The popup script reads the current tab's title and URL via `chrome.tabs`,
stores it in `chrome.storage.local`, and re-renders the saved list whenever
a tab is added or removed.

## Installation (Load Unpacked)
1. Clone or download this repository
2. Go to `chrome://extensions` (or `edge://extensions`)
3. Enable **Developer mode**
4. Click **Load unpacked** and select the project folder
5. Pin the extension and click it from any tab to start saving

## Project Structure
```
tab-saver/
│
├── manifest.json
├── popup.html
├── popup.css
└── popup.js
```

## Purpose
Built to practice browser extension development using the Chrome Extensions
API — a different tool/skillset from the Python-based projects in the rest
of this portfolio.
