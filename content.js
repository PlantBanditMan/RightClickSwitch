document.addEventListener("contextmenu", function (e) {
  // If Ctrl+Alt are pressed, let the browser handle it
  if (e.ctrlKey && e.altKey) {
    return true; // native menu
  }

  // Otherwise, stop the site's override and allow default menu
  e.stopPropagation();
  e.stopImmediatePropagation();
  // Don't call preventDefault(), so the browser menu still appears
}, true);