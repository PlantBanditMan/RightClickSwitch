document.addEventListener("contextmenu", function (e) {
  // If Ctrl+Alt are pressed, show native menu
  if (e.ctrlKey && e.altKey) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    // Don't call preventDefault(), so the browser menu still appears
  }
  // Otherwise, let the site's menu appear
}, true);