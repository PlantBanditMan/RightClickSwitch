document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('action-button');
    button.addEventListener('click', function() {
        // Handle button click event
        alert('Right-click on a webpage!\n- Normal right-click: Browser menu\n- Ctrl+Alt+right-click: Site menu');
    });
});

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.altKey) {
        // Implement specific behavior for Ctrl+Alt key presses
        console.log('Ctrl+Alt pressed');
    }
});