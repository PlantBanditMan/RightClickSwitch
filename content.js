document.addEventListener('contextmenu', function(event) {
    if (event.ctrlKey && event.altKey) {
        // Allow the native context menu to appear
        return;
    }
    // Prevent the default context menu from appearing
    event.preventDefault();
});