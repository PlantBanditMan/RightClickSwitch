document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('action-button');
    button.addEventListener('click', function() {
        // Handle button click event
        alert('Right-click on a webpage!\n- right-click: Site menu\n- Ctrl+Alt+right-click: Browser menu');
    });
});

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.altKey) {
        const contextMenuEvent = new MouseEvent('contextmenu', {
            bubbles: true,
            cancelable: true,
            clientX: window.innerWidth / 2,
            clientY: window.innerHeight / 2,
            button: 2
        });
        document.dispatchEvent(contextMenuEvent);
    }
});