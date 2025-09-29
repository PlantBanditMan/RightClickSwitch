# Right Click Switch

A simple extension that lets you choose between a website's custom right-click menu and the browser's native context menu with an key combo.

**How it works:**  

- Right-click normally → Website's custom menu appears  
- Hold `Ctrl + Alt` while right-clicking → Browser's default menu appears  

## Installation

1. Download the extension files from the [Edge Add-ons store](https://microsoftedge.microsoft.com/addons/) (link coming soon) or clone this repository
2. Open Microsoft Edge and go to `edge://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the `RightClickSwitch` folder
5. The extension icon will appear in your toolbar

## Usage

Simply right-click on any webpage. Use `Ctrl + Alt + Right-click` when you want to use the normal right-click.

Click the extension icon in the toolbar for a quick reminder of how to use it.

## For Developers

This is a basic Manifest V3 Edge extension with a single content script.

### Project Structure

- `manifest.json`: Extension metadata and permissions
- `content.js`: Content script that handles context menu events
- `popup/`: Simple popup UI with usage instructions

### Building

No build process required - just load the unpacked extension in Edge/Chrome for development.

### Contributing

Free to fork and modify. Super simple stuff.
