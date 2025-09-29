// Right Click Switch
// Ctrl+Alt forces the native browser context menu by silencing page handlers.

// Combo "Latched" just means "wiggle room" for the shortcut; in case you release one key slightly too early.
let comboLatched = false;

function isCombo(e) {
  return e.ctrlKey && e.altKey;
}

// Stop site handlers (don't let page preventDefault so native menu still shows)
function suppress(e) {
  e.stopPropagation();
  e.stopImmediatePropagation();
}

// Set the context menu that will appear ahead of time.
function preMouseDownHandler(e) {
  comboLatched = isCombo(e);
  if (comboLatched) suppress(e); // Block handlers for custom menu
}
// Decide which menu will appear upon actually clicking.
function contextMenuHandler(e) {
  const combo = isCombo(e) || comboLatched; // Check for currently or recently held combo.
  if (combo) suppress(e); // allow native menu by suppressing page handlers
  comboLatched = false; // Reset for next interaction
}

// Listener registrations
document.addEventListener("contextmenu", contextMenuHandler, true);

// Early press events (capture phase)
["pointerdown", "mousedown"].forEach((type) => {
  document.addEventListener(type, preMouseDownHandler, true);
});

// Clear latch if you let go of the keys.
document.addEventListener(
  "keyup",
  (e) => {
    if (!isCombo(e)) comboLatched = false;
  },
  true
);

// Stable name for DevTools
//# sourceURL=content.js
