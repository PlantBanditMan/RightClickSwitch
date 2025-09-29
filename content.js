document.addEventListener("contextmenu", function (e) {
  console.log("Right Click Switch: Context menu event fired", { ctrlKey: e.ctrlKey, altKey: e.altKey });
  // If Ctrl+Alt are pressed, show native menu
  if (e.ctrlKey && e.altKey) {
    console.log("Right Click Switch: Showing native menu");
    e.stopPropagation();
    e.stopImmediatePropagation();
    // Don't call preventDefault(), so the browser menu still appears
  } else {
    console.log("Right Click Switch: Letting site menu appear");
  }
  // Otherwise, let the site's menu appear
}, true);

// Helpful for DevTools to show a stable filename instead of "VM..." or "setup.js"
//# sourceURL=content.js