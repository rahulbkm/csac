// Handle "Select All" checkbox functionality
document.addEventListener('DOMContentLoaded', function() {
    const selectAllCheckbox = document.getElementById('select-all');
    const rowCheckboxes = document.querySelectorAll('.data-grid tbody input[type="checkbox"]');
    
    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('change', function() {
            rowCheckboxes.forEach(checkbox => {
                checkbox.checked = selectAllCheckbox.checked;
            });
        });
    }
    
    // Update "Select All" checkbox state based on individual checkboxes
    rowCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const allChecked = Array.from(rowCheckboxes).every(cb => cb.checked);
            const someChecked = Array.from(rowCheckboxes).some(cb => cb.checked);
            
            selectAllCheckbox.checked = allChecked;
            selectAllCheckbox.indeterminate = someChecked && !allChecked;
        });
    });
    
    // Button click handlers (for demonstration)
    const buttons = document.querySelectorAll('.cmd-btn, .action-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            console.log('Button clicked:', e.target.textContent.trim());
        });
    });
    
    // Tab switching
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            console.log('Tab switched to:', this.textContent.trim());
        });
    });
    
    // Sidebar navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            console.log('Navigation to:', this.textContent.trim());
        });
    });
});
