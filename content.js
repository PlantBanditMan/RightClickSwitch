// Right Click Switch
// Ctrl+Alt forces the native browser context menu by silencing page handlers.

// Latched state: was combo held at initial press
let comboLatched = false;

function isCombo(e) {
  // Strict: both Ctrl and Alt, (ignore Meta so Mac users can use Control+Option)
  return e.ctrlKey && e.altKey;
}

// Stop site handlers (never preventDefault so native menu still shows)
function suppress(e) {
  e.stopPropagation();
  e.stopImmediatePropagation();
}

// Early press: latch combo & optionally silence page
function prePressHandler(e) {
  comboLatched = isCombo(e); // latch
  if (comboLatched) suppress(e); // keep native path open
}

// contextmenu: final check; reset latch
function contextMenuHandler(e) {
  const combo = isCombo(e) || comboLatched; // fallback if released after press
  if (combo) suppress(e); // allow native menu by silencing page handlers
  comboLatched = false; // reset
}

// Listener registrations
document.addEventListener("contextmenu", contextMenuHandler, true);

// Early press events (capture phase)
["pointerdown", "mousedown"].forEach(type => {
  document.addEventListener(type, prePressHandler, true);
});

// Clear latch if modifiers released before menu
document.addEventListener("keyup", (e) => {
  if (!isCombo(e)) comboLatched = false;
}, true);

// Stable name for DevTools
//# sourceURL=content.js