chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "myContextMenu",
        title: "My Context Menu",
        contexts: ["all"]
    });
});

chrome.commands.onCommand.addListener((command) => {
    if (command === "toggle-context-menu") {
        chrome.contextMenus.toggle("myContextMenu");
    }
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "myContextMenu") {
        chrome.tabs.sendMessage(tab.id, { action: "contextMenuClicked" });
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "keyPress") {
        // Handle the Ctrl+Alt key press event
        console.log("Ctrl+Alt keys pressed");
    }
});