# Right Click Switch

Easily pick between a web page's right-click context menu and the native context menu by pressing `Ctrl + Alt`.

## Project Structure

- `manifest.json`: Contains the metadata for the Edge extension, including the name, version, permissions, and content scripts.
- `content.js`: The content script that runs in the context of web pages, implementing the context menu event listener.
- `popup/`: Contains the files for the extension's popup interface.
  - `popup.html`: Defines the HTML structure for the popup.
  - `popup.js`: Contains the JavaScript logic for handling user interactions in the popup.

## Setup Instructions

1. Clone the repository or download the source code.
2. Open Microsoft Edge and navigate to `edge://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the `RightClickSwitch` directory.
5. The extension should now be loaded and ready to use.

## Usage

- To use the context menu, press `Ctrl + Alt` while on a web page to trigger the native menu.
- Interact with the popup by clicking on the extension icon in the toolbar.

## License

This project is licensed under the MIT License.