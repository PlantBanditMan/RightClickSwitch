document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('myButton');
    button.addEventListener('click', function() {
        // Handle button click event
        alert('Button clicked!');
    });
});

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.altKey) {
        // Implement specific behavior for Ctrl+Alt key presses
        console.log('Ctrl+Alt pressed');
    }
});