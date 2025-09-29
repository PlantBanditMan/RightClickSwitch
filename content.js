// Right Click Switch – robust content script
// Strategy:
//  - Default: allow site to handle right-click (site/custom menu)
//  - Ctrl+Alt: force native browser menu by suppressing site handlers
//  - We intercept early (document_start) and in all frames (see manifest)
//  - Also handle pointer/mouse down paths some sites use to block native menu

// Debug logging removed for a lean production-friendly script.

// Tracks whether the modifier combo was held at the time of the initiating press
let comboActive = false;

function isCombo(e) {
  // Strict: both Ctrl and Alt, (ignore Meta so Mac users can use Control+Option)
  return e.ctrlKey && e.altKey;
}

// Some sites attach mousedown/pointerdown and call preventDefault to kill native menu.
// If our combo is active we stop propagation so they never see it.
function prePressInterceptor(e) {
  comboActive = isCombo(e);
  if (comboActive) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    // Intentionally do NOT preventDefault – we still want the eventual contextmenu event to produce native menu.
  }
}

// Final decision at contextmenu.
document.addEventListener("contextmenu", function (e) {
  const combo = isCombo(e) || comboActive; // fallback to earlier state in case keys released milliseconds before
  if (combo) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    // Do not preventDefault: allows browser menu
  }
  comboActive = false; // reset after each contextmenu
}, true);

// Intercept early pointer/mouse events to block site prevention when combo held
// Use capture to beat page listeners.
["pointerdown", "mousedown"].forEach(type => {
  document.addEventListener(type, prePressInterceptor, true);
});

// Clean up comboActive if user releases keys before contextmenu triggers.
document.addEventListener("keyup", (e) => {
  if (!isCombo(e)) comboActive = false;
}, true);

// Helpful for DevTools to show a stable filename instead of "VM..." or "setup.js"
//# sourceURL=content.js