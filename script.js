document.querySelectorAll('.reveal-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Find the wrapper container just above the button
        const targetContainer = this.previousElementSibling;
        
        // 1. Unhide it structurally in the HTML
        targetContainer.classList.remove('hidden');
        
        // 2. Trigger the CSS transition smooth fade-in
        setTimeout(() => {
            targetContainer.classList.add('show');
        }, 10);
        
        // 3. Cleanly remove the button from layout
        this.style.display = 'none';
    });
});