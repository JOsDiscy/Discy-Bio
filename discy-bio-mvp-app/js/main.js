/**
 * Main JavaScript File
 * This is the entry point for the application's JavaScript.
 * It initializes the app and sets up event listeners.
 */

// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
    console.log('Discy Bio MVP Demo initialized');
    
    // Initialize the screen navigation
    initNavigation();
    
    // Load the default screen (login)
    loadScreen('login');
    
    // Set up event listeners for interactive components
    setupComponentInteractions();
    
    // Create and append modals to the document
    createAndAppendModals();
    
    // Initialize modal event listeners
    initializeModalListeners();
});

/**
 * Set up event listeners for interactive components
 * This function adds event listeners to make the demo interactive
 */
function setupComponentInteractions() {
    // Event delegation for the entire document
    document.addEventListener('click', function(event) {
        // Handle in-page button clicks
        if (event.target.closest('.button')) {
            const button = event.target.closest('.button');
            const buttonText = button.textContent.trim();
            
            // Draft Report button from dashboard
            if (buttonText.includes('Draft Report')) {
                // Navigate to reports screen and show report modal
                navigateAndShowModal('reports', 'report-generation-modal');
                return; // Prevent default behavior
            }
            
            // Generate Report button on insights screen
            if (buttonText.includes('Generate Report')) {
                // Navigate to reports screen and show report modal
                navigateAndShowModal('reports', 'report-generation-modal');
                return; // Prevent default behavior
            }
            
            // Import New Document button
            if (buttonText.includes('Import New Document')) {
                showModal('document-import-modal');
                return; // Prevent default behavior
            }
        }
        
        // Handle clicking on processing documents
        if (event.target.closest('.item-meta.status-processing')) {
            showModal('document-processing-modal');
        }
        
        // Handle report template selection
        if (event.target.closest('.report-template')) {
            const templates = document.querySelectorAll('.report-template');
            templates.forEach(template => template.classList.remove('selected'));
            event.target.closest('.report-template').classList.add('selected');
        }
        
        // Handle sentiment button selection
        if (event.target.closest('.sentiment-btn')) {
            const sentimentContainer = event.target.closest('.sentiment-selector');
            const buttons = sentimentContainer.querySelectorAll('.sentiment-btn');
            buttons.forEach(btn => btn.classList.remove('selected'));
            event.target.closest('.sentiment-btn').classList.add('selected');
        }
        
        // Handle document selection
        if (event.target.closest('.document-item')) {
            const checkbox = event.target.closest('.document-item').querySelector('input[type="checkbox"]');
            if (checkbox && event.target !== checkbox) {
                checkbox.checked = !checkbox.checked;
                
                // Toggle selected class on the document item
                if (checkbox.checked) {
                    event.target.closest('.document-item').classList.add('selected');
                } else {
                    event.target.closest('.document-item').classList.remove('selected');
                }
            }
        }
    });
    
    // Handle modal actions
    document.addEventListener('click', function(event) {
        // Listen for modal actions
        const modalAction = event.target.closest('[data-modal-action]');
        if (modalAction) {
            const action = modalAction.getAttribute('data-modal-action');
            
            if (action === 'close' && modalAction.closest('#report-generation-modal')) {
                // When closing the report generation modal, make sure we're on the reports screen
                loadScreen('reports');
                hideModal('report-generation-modal');
                return;
            }
            
            if (action === 'delete') {
                // Mock delete functionality
                if (confirm('Are you sure you want to delete this report?')) {
                    hideModal('report-generation-modal');
                    loadScreen('reports');
                }
                return;
            }
            
            if (action === 'share') {
                // Mock share functionality
                alert('Share functionality would be implemented here.');
                return;
            }
        }
    });
}