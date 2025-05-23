/**
 * Navigation Module
 * Handles loading different screens and navigation between them.
 */

// Screen loading state
let currentScreen = null;

/**
 * Initialize navigation functionality
 */
function initNavigation() {
    console.log('Navigation initialized');
}

/**
 * Load a specific screen
 * @param {string} screenName - The name of the screen to load
 */
function loadScreen(screenName) {
    console.log(`Loading screen: ${screenName}`);
    
    // Update the current screen
    currentScreen = screenName;
    
    // Get the screen container
    const screenContainer = document.getElementById('screen-container');
    
    // Clear current content
    screenContainer.innerHTML = '';
    
    // Load the appropriate screen based on the name
    switch(screenName) {
        case 'login':
            screenContainer.innerHTML = createLoginScreen();
            break;
        case 'dashboard':
            screenContainer.innerHTML = createDashboardScreen();
            break;
        case 'documents':
            screenContainer.innerHTML = createDocumentsScreen();
            break;
        case 'document-import':
            screenContainer.innerHTML = createDocumentImportScreen();
            break;
        case 'document-processing':
            screenContainer.innerHTML = createDocumentProcessingScreen();
            break;
        case 'insights':
            screenContainer.innerHTML = createInsightsScreen();
            break;
        case 'insights-visualization':
            screenContainer.innerHTML = createInsightsVisualizationScreen();
            break;
        case 'stakeholder-trends':
            screenContainer.innerHTML = createStakeholderTrendsScreen();
            break;
        case 'report-generation':
            screenContainer.innerHTML = createReportGenerationScreen();
            break;
        case 'reports':
            screenContainer.innerHTML = createReportsScreen();
            break;
        case 'admin-tags':
            screenContainer.innerHTML = createAdminTagsScreen();
            break;
        case 'admin-errors':
            screenContainer.innerHTML = createAdminErrorsScreen();
            break;
        default:
            screenContainer.innerHTML = `<div class="screen-container">
                <div class="screen-header">
                    <h3 class="screen-title">Error</h3>
                </div>
                <div class="screen-body">
                    <p>Screen "${screenName}" not found.</p>
                </div>
            </div>`;
    }
    
    // After loading the screen, set up any required event listeners
    setTimeout(() => {
        setupScreenSpecificInteractions(screenName);
    }, 50);
}

/**
 * Set up event listeners specific to a particular screen
 * @param {string} screenName - The name of the current screen
 */
function setupScreenSpecificInteractions(screenName) {
    // Login screen interactions - Enhanced for automatic login
    if (screenName === 'login') {
        const loginForm = document.querySelector('.login-form form');
        const signInButton = document.querySelector('.login-form button[type="submit"]');
        
        if (loginForm) {
            loginForm.addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent actual form submission
                
                // Add a small loading effect (optional)
                if (signInButton) {
                    const originalText = signInButton.textContent;
                    signInButton.textContent = 'Signing in...';
                    signInButton.disabled = true;
                    
                    // Navigate to dashboard after a brief delay
                    setTimeout(() => {
                        loadScreen('dashboard');
                    }, 500); // Half-second delay for UX
                } else {
                    // If no button found, navigate immediately
                    loadScreen('dashboard');
                }
            });
        }
        
        // Also handle direct button click if form submission doesn't work
        if (signInButton) {
            signInButton.addEventListener('click', function(event) {
                // Only handle if it's not already handling form submission
                if (event.target.type !== 'submit') {
                    event.preventDefault();
                    loadScreen('dashboard');
                }
            });
        }
    }
    
    // Dashboard screen interactions
    if (screenName === 'dashboard') {
        const draftReportBtn = document.querySelector('.dashboard-actions .button');
        if (draftReportBtn) {
            draftReportBtn.addEventListener('click', function() {
                loadScreen('reports');
                setTimeout(() => {
                    showModal('report-generation-modal');
                }, 100);
            });
        }
    }
    
    // Insights visualization screen interactions
    if (screenName === 'insights-visualization') {
        // Wait for a moment to ensure the DOM is ready
        setTimeout(() => {
            // Create theme mentions chart
            if (document.getElementById('themeChart')) {
                createBarChart('themeChart', 
                    ['Efficacy', 'Safety', 'Data Gaps', 'Competitive', 'Dosing'],
                    [16, 12, 8, 10, 4],
                    'Theme Mentions by Stakeholder');
            }
        }, 100); // Short delay to ensure elements are rendered
    }
    
    // Insights stakeholder trends screen interactions
    if (screenName === 'stakeholder-trends') {
        // Wait for a moment to ensure the DOM is ready
        setTimeout(() => {
            // Create trend chart
            if (document.getElementById('trendChart')) {
                createLineChart('trendChart', 
                    ['Jan 2024', 'Apr 2024', 'Jul 2024', 'Oct 2024', 'Jan 2025'],
                    [60, 50, 30, 20, 10], // Lower values represent more positive sentiment
                    'Sentiment Evolution (Lower = More Positive)');
            }
        }, 100);
    }
    
    // Sidebar navigation (for screens that have sidebars)
    const sidebarItems = document.querySelectorAll('.sidebar-menu li');
    if (sidebarItems.length > 0) {
        sidebarItems.forEach(item => {
            item.addEventListener('click', function() {
                // Update active state
                sidebarItems.forEach(li => li.classList.remove('active'));
                this.classList.add('active');
                
                // Map menu item text to screen names
                const menuText = this.textContent.trim();
                const screenMap = {
                    'Dashboard': 'dashboard',
                    'Reports': 'reports',
                    'Insights': 'insights',
                    'Documents': 'documents',
                    'Settings': 'admin-tags'
                };
                
                // Load the corresponding screen
                if (screenMap[menuText]) {
                    loadScreen(screenMap[menuText]);
                }
            });
        });
    }
    
    // Improved tab navigation for insights screens
    const tabs = document.querySelectorAll('.tabs .tab');
    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const tabContainer = this.closest('.tabs');
                const allTabs = tabContainer.querySelectorAll('.tab');
                allTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                // For insights screen, switch between different insights views
                const activeTabText = this.textContent.trim();
                
                if (activeTabText.includes('Visualizations') && 
                    (currentScreen === 'insights' || currentScreen.startsWith('insight'))) {
                    loadScreen('insights-visualization');
                } 
                else if (activeTabText.includes('Stakeholder Trends') && 
                         (currentScreen === 'insights' || currentScreen.startsWith('insight'))) {
                    loadScreen('stakeholder-trends');
                } 
                else if (activeTabText.includes('Text Insights') && 
                         (currentScreen === 'insights-visualization' || currentScreen === 'stakeholder-trends')) {
                    loadScreen('insights');
                }
            });
        });
    }
    
    // Reports screen interactions
    if (screenName === 'reports') {
        // Set up click handlers for report items
        const reportItems = document.querySelectorAll('.item');
        reportItems.forEach(item => {
            item.addEventListener('click', function() {
                showModal('report-view-modal');
            });
        });
    }
}

/**
 * Navigate to a screen and open a modal
 * @param {string} screenName - The name of the screen to load
 * @param {string} modalId - The ID of the modal to show
 */
function navigateAndShowModal(screenName, modalId) {
    // First navigate to the screen
    loadScreen(screenName);
    
    // Then show the modal after a short delay to ensure the screen is loaded
    setTimeout(() => {
        showModal(modalId);
    }, 100);
}