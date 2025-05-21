/**
 * Screens Module
 * Contains functions for creating the HTML content for each screen.
 */

/**
 * Create the login screen
 * @returns {string} HTML content for the login screen
 */
function createLoginScreen() {
    return `
    <div class="screen-container">
        <div class="screen-header">
            <h3 class="screen-title">Discy Bio | Login</h3>
        </div>
        <div class="screen-body login-container">
            <div class="login-form">
                <div class="login-logo">
                    Discy Bio
                </div>
                <div class="mb-3">
                    <p>Unlock your clinical data. Reduce decision cycles</p>
                </div>
                <div class="login-box">
                    <form>
                        <div class="mb-3">
                            <label for="email" class="text-left mb-1 font-weight-bold">Email</label>
                            <input type="email" id="email" placeholder="your.email@example.com">
                        </div>
                        <div class="mb-3">
                            <label for="password" class="text-left mb-1 font-weight-bold">Password</label>
                            <input type="password" id="password" placeholder="••••••••••••">
                        </div>
                        <button type="submit" class="button" style="width: 100%;">Sign In</button>
                        <div class="login-links">
                            <a href="#">Forgot your password?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;
}

/**
 * Create the dashboard screen
 * @returns {string} HTML content for the dashboard screen
 */
function createDashboardScreen() {
    return `
    <div class="screen-container">
        <div class="screen-header">
            <a href="#" class="header-logo">
                <span>Discy Bio</span>
            </a>
            <div class="header-right">
                <div>Medical Affairs</div>
                <div class="user-avatar">JD</div>
            </div>
        </div>
        <div class="screen-layout">
            <div class="sidebar">
                <ul class="sidebar-menu">
                    <li class="active">Dashboard</li>
                    <li>Reports</li>
                    <li>Insights</li>
                    <li>Documents</li>
                    <li>Settings</li>
                </ul>
            </div>
            <div class="main-content">
                <div class="welcome-section">
                    <h2>Welcome, Dr. Gene Boe</h2>
                    <p>Access your recent reports or start creating a new one.</p>
                </div>
                
                <div class="dashboard-metrics">
                    <div class="metric-card">
                        <div class="metric-value">14</div>
                        <div class="metric-label">Documents Processed</div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-value">86</div>
                        <div class="metric-label">Insights Generated</div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-value">5</div>
                        <div class="metric-label">Reports Created</div>
                    </div>
                </div>
                
                <div class="dashboard-actions mt-4 mb-4">
                    <button class="button">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Draft Report
                    </button>
                </div>
                
                <div class="recent-items">
                    <h3>Recent Reports</h3>
                    
                    <div class="item">
                        <div class="item-icon">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16 13H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16 17H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10 9H9H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="item-info">
                            <h4 class="item-title">KOL Advisory Board Insights - May 2025</h4>
                            <div class="item-meta">
                                <span class="item-status status-published">Completed</span>
                                <span class="review-badge badge-reviewed">Reviewed</span>
                                <span>32 insights included</span>
                            </div>
                        </div>
                        <div class="item-date">2 days ago</div>
                    </div>
                    
                    <div class="item">
                        <div class="item-icon">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16 13H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16 17H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10 9H9H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="item-info">
                            <h4 class="item-title">Efficacy Data Analysis - Compound XJ-542</h4>
                            <div class="item-meta">
                                <span class="item-status status-review">In Review</span>
                                <span class="review-badge badge-ai">AI Generated</span>
                                <span>41 insights included</span>
                            </div>
                        </div>
                        <div class="item-date">1 week ago</div>
                    </div>
                    
                    <div class="item">
                        <div class="item-icon">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16 13H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16 17H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10 9H9H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="item-info">
                            <h4 class="item-title">Safety Profile Summary - Expert Panel Discussion</h4>
                            <div class="item-meta">
                                <span class="item-status status-draft">Draft</span>
                                <span class="review-badge badge-ai">AI Generated</span>
                                <span>28 insights included</span>
                            </div>
                        </div>
                        <div class="item-date">2 weeks ago</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}

/**
 * Create the documents screen
 * @returns {string} HTML content for the documents screen
 */
function createDocumentsScreen() {
    return `
    <div class="screen-container">
        <div class="screen-header">
            <a href="#" class="header-logo">
                <span>Discy Bio</span>
            </a>
            <div class="header-right">
                <div>Medical Affairs</div>
                <div class="user-avatar">JD</div>
            </div>
        </div>
        <div class="screen-layout">
            <div class="sidebar">
                <ul class="sidebar-menu">
                    <li>Dashboard</li>
                    <li>Reports</li>
                    <li>Insights</li>
                    <li class="active">Documents</li>
                    <li>Settings</li>
                </ul>
            </div>
            <div class="main-content">
                <div class="flex justify-between items-center mb-4">
                    <h2>Documents</h2>
                    <button class="button">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Import New Document
                    </button>
                </div>
                
                <div class="document-search mb-4">
                    <input type="text" placeholder="Search documents...">
                </div>
                
                <div class="tabs">
                    <div class="tab active">All Documents (14)</div>
                    <div class="tab">Advisory Boards (5)</div>
                    <div class="tab">Panel Discussions (3)</div>
                    <div class="tab">Publications (6)</div>
                </div>
                
                <div class="item">
                    <div class="item-icon">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="item-info">
                        <h4 class="item-title">KOL Advisory Board - May 2025</h4>
                        <div class="item-meta">Audio Recording • 32 insights generated</div>
                    </div>
                    <div class="item-date">2 days ago</div>
                </div>
                
                <div class="item">
                    <div class="item-icon">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="item-info">
                        <h4 class="item-title">Phase 3 Trial Report - Compound XJ-542</h4>
                        <div class="item-meta">PDF Document • 41 insights generated</div>
                    </div>
                    <div class="item-date">1 week ago</div>
                </div>
                
                <div class="item">
                    <div class="item-icon">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="item-info">
                        <h4 class="item-title">Expert Panel - Safety Profile Discussion</h4>
                        <div class="item-meta">Audio Recording • 28 insights generated</div>
                    </div>
                    <div class="item-date">2 weeks ago</div>
                </div>
                
                <div class="item">
                    <div class="item-icon">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="item-info">
                        <h4 class="item-title">Payer Meeting - Pricing Strategy</h4>
                        <div class="item-meta status-processing">Currently Processing... (65%)</div>
                    </div>
                    <div class="item-date">1 day ago</div>
                </div>
            </div>
        </div>
    </div>
    `;
}

/**
 * Create the document import screen
 * @returns {string} HTML content for the document import screen
 */
function createDocumentImportScreen() {
    return `
    <div class="screen-container">
        <div class="screen-header">
            <a href="#" class="header-logo">
                <span>Discy Bio</span>
            </a>
            <div class="header-right">
                <div>Medical Affairs</div>
                <div class="user-avatar">JD</div>
            </div>
        </div>
        <div class="screen-layout">
            <div class="sidebar">
                <ul class="sidebar-menu">
                    <li>Dashboard</li>
                    <li>Reports</li>
                    <li>Insights</li>
                    <li class="active">Documents</li>
                    <li>Settings</li>
                </ul>
            </div>
            <div class="main-content">
                <h2>Import New Document</h2>
                <p>Upload a document or recording to begin analysis.</p>
                
                <div class="upload-area">
                    <div class="upload-icon">
                        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17 8L12 3L7 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 3V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div style="font-weight: 600; margin-bottom: 0.5rem;">Drag & Drop File Here</div>
                    <div style="color: #666; margin-bottom: 1.5rem;">Supports PDF, DOC, PPT, MP3, WAV files</div>
                    <button class="button">Browse Files</button>
                </div>
                
                <div class="document-details">
                    <h3>Document Details</h3>
                    <div class="two-column mt-2">
                        <div class="column">
                            <div class="mb-1 font-weight-bold">Document Title</div>
                            <input type="text" placeholder="e.g., KOL Advisory Board Meeting">
                        </div>
                        <div class="column">
                            <div class="mb-1 font-weight-bold">Document Type</div>
                            <select>
                                <option>Advisory Board</option>
                                <option>Panel Discussion</option>
                                <option>KOL Interview</option>
                                <option>Clinical Trial Report</option>
                                <option>Payer Meeting</option>
                            </select>
                        </div>
                    </div>
                    <div class="mt-2">
                        <div class="mb-1 font-weight-bold">Description (Optional)</div>
                        <textarea placeholder="Add any additional context about this document..."></textarea>
                    </div>
                    
                    <div class="mt-2">
                        <div class="mb-1 font-weight-bold">Pre-assign Tags</div>
                        <div class="document-tags">
                            <div class="tag tag-efficacy">Efficacy</div>
                            <div class="tag tag-safety">Safety</div>
                            <div class="tag tag-data-gap">Data Gaps</div>
                            <div class="tag tag-competitive">Competitive Analysis</div>
                            <button class="button button-secondary" style="padding: 0.25rem 0.75rem; font-size: 0.85rem;">+ Add Tag</button>
                        </div>
                    </div>
                </div>
                
                <div class="action-bar">
                    <button class="button button-secondary">Cancel</button>
                    <button class="button">Upload & Process</button>
                </div>
            </div>
        </div>
    </div>
    `;
}

/**
 * Create the document processing screen
 * @returns {string} HTML content for the document processing screen
 */
function createDocumentProcessingScreen() {
    return `
    <div class="screen-container">
        <div class="screen-header">
            <a href="#" class="header-logo">
                <span>Discy Bio</span>
            </a>
            <div class="header-right">
                <div>Medical Affairs</div>
                <div class="user-avatar">JD</div>
            </div>
        </div>
        <div class="screen-layout">
            <div class="sidebar">
                <ul class="sidebar-menu">
                    <li>Dashboard</li>
                    <li>Reports</li>
                    <li>Insights</li>
                    <li class="active">Documents</li>
                    <li>Settings</li>
                </ul>
            </div>
            <div class="main-content">
                <h2>Processing Document</h2>
                <p>Please wait while we analyze your document and extract insights.</p>
                
                <div class="card mt-4">
                    <div class="flex items-center mb-3">
                        <div class="mr-2">
                            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div>
                            <div style="font-weight: 600;">Payer Meeting - Pricing Strategy</div>
                            <div style="color: #666; font-size: 0.9rem;">Audio Recording • 42 minutes</div>
                        </div>
                    </div>
                    
                    <div class="progress-container">
                        <div class="flex justify-between mb-1">
                            <div style="font-weight: 600;">Processing Progress</div>
                            <div>65%</div>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 65%"></div>
                        </div>
                    </div>
                    
                    <div>
                        <div style="font-weight: 600; margin-bottom: 0.5rem;">Current Step:</div>
                        <div>Extracting insights and entity recognition</div>
                    </div>
                </div>
                
                <div class="processing-steps">
                    <h3>Processing Steps</h3>
                    <div class="mt-2">
                        <div class="step-item">
                            <div class="step-status step-complete">✓</div>
                            <div>
                                <div style="font-weight: 600;">File Upload</div>
                                <div style="color: #666; font-size: 0.9rem;">File successfully uploaded and validated</div>
                            </div>
                        </div>
                        
                        <div class="step-item">
                            <div class="step-status step-complete">✓</div>
                            <div>
                                <div style="font-weight: 600;">Audio Transcription</div>
                                <div style="color: #666; font-size: 0.9rem;">Audio file transcribed to text with speaker identification</div>
                            </div>
                        </div>
                        
                        <div class="step-item">
                            <div class="step-status step-in-progress">⟳</div>
                            <div>
                                <div style="font-weight: 600;">Entity Recognition</div>
                                <div style="color: #666; font-size: 0.9rem;">Identifying stakeholders, drugs, diseases, and other entities</div>
                            </div>
                        </div>
                        
                        <div class="step-item">
                            <div class="step-status step-pending">•</div>
                            <div>
                                <div style="font-weight: 600;">Insight Extraction</div>
                                <div style="color: #666; font-size: 0.9rem;">Analyzing content for key insights</div>
                            </div>
                        </div>
                        
                        <div class="step-item">
                            <div class="step-status step-pending">•</div>
                            <div>
                                <div style="font-weight: 600;">Tag Classification</div>
                                <div style="color: #666; font-size: 0.9rem;">Assigning relevant tags to insights</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="processing-info">
                    <p>This process typically takes 10-20 minutes depending on file size.</p>
                    <p>You'll receive a notification when processing is complete.</p>
                </div>
            </div>
        </div>
    </div>
    `;
}

/**
 * Create the insights screen
 * @returns {string} HTML content for the insights screen
 */
function createInsightsScreen() {
    return `
    <div class="screen-container">
        <div class="screen-header">
            <a href="#" class="header-logo">
                <span>Discy Bio</span>
            </a>
            <div class="header-right">
                <div>Medical Affairs</div>
                <div class="user-avatar">JD</div>
            </div>
        </div>
        <div class="screen-layout">
            <div class="sidebar">
                <ul class="sidebar-menu">
                    <li>Dashboard</li>
                    <li>Reports</li>
                    <li class="active">Insights</li>
                    <li>Documents</li>
                    <li>Settings</li>
                </ul>
            </div>
            <div class="main-content">
                <div class="flex justify-between items-center mb-2">
                    <h2>KOL Advisory Board - May 2025</h2>
                    <button class="button">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 4H8C7.46957 4 6.96086 4.21071 6.58579 4.58579C6.21071 4.96086 6 5.46957 6 6V20C6 20.5304 6.21071 21.0391 6.58579 21.4142C6.96086 21.7893 7.46957 22 8 22H16C16.5304 22 17.0391 21.7893 17.4142 21.4142C17.7893 21.0391 18 20.5304 18 20V6C18 5.46957 17.7893 4.96086 17.4142 4.58579C17.0391 4.21071 16.5304 4 16 4V4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 18H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Generate Report
                    </button>
                </div>
                
                <div class="tabs">
                    <div class="tab active">Text Insights (32)</div>
                    <div class="tab">Visualizations</div>
                    <div class="tab">Stakeholder Trends</div>
                </div>
                
                <div class="insights-filters">
                    <div class="flex gap-1 mb-2">
                        <div class="tag tag-efficacy">Efficacy</div>
                        <div class="tag tag-safety">Safety</div>
                        <div class="tag tag-data-gap">Data Gaps</div>
                        <div class="tag tag-competitive">Competitive Analysis</div>
                    </div>
                    
                    <div class="flex gap-2">
                                <input type="text" style="flex: 3; min-width: 300px;" placeholder="Search insights...">
                                <select style="flex: 1; min-width: 150px; max-width: 200px;">
                            <option>All Stakeholders</option>
                            <option>KOLs</option>
                            <option>Institutions</option>
                            <option>Products</option>
                        </select>
                    </div>
                </div>
                
                <div class="insights-list">
                    <h3>Key Insights</h3>
                    
                    <div class="insight-item">
                        <div class="insight-meta">
                            <div class="entity-pill">Dr. Sarah Johnson</div>
                            <div>Time: 08:45</div>
                        </div>
                        <div class="insight-content">
                            "The efficacy data from the Phase 3 trial is impressive, particularly the 42% reduction in progression. However, I'm concerned about the limited long-term follow-up data beyond 18 months."
                        </div>
                        <div class="insight-footer">
                            <div class="tag tag-efficacy">Efficacy</div>
                            <div class="sentiment-selector">
                                <div class="sentiment-btn selected">
                                    <div class="light light-green"></div>
                                    <div>Positive</div>
                                </div>
                                <div class="sentiment-btn">
                                    <div class="light light-yellow"></div>
                                    <div>Neutral</div>
                                </div>
                                <div class="sentiment-btn">
                                    <div class="light light-red"></div>
                                    <div>Negative</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="insight-item">
                        <div class="insight-meta">
                            <div class="entity-pill">Dr. Michael Chen</div>
                            <div>Time: 12:32</div>
                        </div>
                        <div class="insight-content">
                            "I'm not convinced the safety profile is as clean as suggested. The 8% incidence of hepatic events in the treatment arm versus 2% in the control arm needs more investigation before regulatory submission."
                        </div>
                        <div class="insight-footer">
                            <div class="tag tag-safety">Safety</div>
                            <div class="sentiment-selector">
                                <div class="sentiment-btn">
                                    <div class="light light-green"></div>
                                    <div>Positive</div>
                                </div>
                                <div class="sentiment-btn">
                                    <div class="light light-yellow"></div>
                                    <div>Neutral</div>
                                </div>
                                <div class="sentiment-btn selected">
                                    <div class="light light-red"></div>
                                    <div>Negative</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="insight-item">
                        <div class="insight-meta">
                            <div class="entity-pill">Prof. Elizabeth Taylor</div>
                            <div>Time: 16:05</div>
                        </div>
                        <div class="insight-content">
                            "Compared to CompetitorX's drug, your compound shows superior target engagement and a more favorable dosing schedule. This could be a significant advantage in the marketplace if the safety profile holds up."
                        </div>
                        <div class="insight-footer">
                            <div class="tag tag-competitive">Competitive Analysis</div>
                            <div class="sentiment-selector">
                                <div class="sentiment-btn selected">
                                    <div class="light light-green"></div>
                                    <div>Positive</div>
                                </div>
                                <div class="sentiment-btn">
                                    <div class="light light-yellow"></div>
                                    <div>Neutral</div>
                                </div>
                                <div class="sentiment-btn">
                                    <div class="light light-red"></div>
                                    <div>Negative</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}

/**
 * Create the insights visualization screen
 */
function createInsightsVisualizationScreen() {
  return `
    <div class="screen-container">
        <div class="screen-header">
            <a href="#" class="header-logo">
                <span>Discy Bio</span>
            </a>
            <div class="header-right">
                <div>Medical Affairs</div>
                <div class="user-avatar">JD</div>
            </div>
        </div>
        <div class="screen-layout">
            <div class="sidebar">
                <ul class="sidebar-menu">
                    <li>Dashboard</li>
                    <li>Reports</li>
                    <li class="active">Insights</li>
                    <li>Documents</li>
                    <li>Settings</li>
                </ul>
            </div>
            <div class="main-content">
                <div class="flex justify-between items-center mb-2">
                    <h2>KOL Advisory Board - May 2025</h2>
                    <button class="button">Generate Report</button>
                </div>
                
                <div class="tabs">
                    <div class="tab">Text Insights (32)</div>
                    <div class="tab active">Visualizations</div>
                    <div class="tab">Stakeholder Trends</div>
                </div>
                
                <div class="visualization-controls mb-4">
                    <div class="flex gap-2">
                        <select style="padding: 0.75rem; border: 1px solid #e0e0e0; border-radius: 4px; font-size: 1rem; min-width: 200px;">
                            <option>Theme Mentions</option>
                            <option>Stakeholder Distribution</option>
                            <option>Sentiment Overview</option>
                            <option>Time Analysis</option>
                        </select>
                        <select style="padding: 0.75rem; border: 1px solid #e0e0e0; border-radius: 4px; font-size: 1rem; min-width: 200px;">
                            <option>All Stakeholders</option>
                            <option>KOLs Only</option>
                            <option>Regulators Only</option>
                            <option>Payers Only</option>
                        </select>
                    </div>
                </div>
                
                <div class="card" style="padding: 1.5rem; margin-bottom: 2rem;">
                    <h3 style="margin-top: 0; margin-bottom: 1rem;">Theme Mentions by Stakeholder</h3>
                    <div style="height: 400px; position: relative;">
                        <canvas id="themeChart"></canvas>
                    </div>
                </div>
                
                <div class="card" style="padding: 1.5rem;">
                    <h3 style="margin-top: 0; margin-bottom: 1rem;">Key Insights Distribution</h3>
                    <p>This visualization shows the distribution of key themes discussed by stakeholders during the advisory board meeting.</p>
                    <ul style="margin-top: 1rem;">
                        <li><strong>Efficacy:</strong> Most frequently discussed topic (16 mentions), particularly regarding the 42% reduction in progression.</li>
                        <li><strong>Safety:</strong> Second most discussed topic (12 mentions), with focus on hepatic adverse events.</li>
                        <li><strong>Data Gaps:</strong> Several KOLs highlighted the need for more long-term follow-up data (8 mentions).</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `;
}

/**
 * Create the stakeholder trends screen
 */
function createStakeholderTrendsScreen() {
    return `
    <div class="screen-container">
        <div class="screen-header">
            <a href="#" class="header-logo">
                <span>Discy Bio</span>
            </a>
            <div class="header-right">
                <div>Medical Affairs</div>
                <div class="user-avatar">JD</div>
            </div>
        </div>
        <div class="screen-layout">
            <div class="sidebar">
                <ul class="sidebar-menu">
                    <li>Dashboard</li>
                    <li>Reports</li>
                    <li class="active">Insights</li>
                    <li>Documents</li>
                    <li>Settings</li>
                </ul>
            </div>
            <div class="main-content">
                <div class="flex justify-between items-center mb-2">
                    <h2>KOL Advisory Board - May 2025</h2>
                    <button class="button">Generate Report</button>
                </div>
                
                <div class="tabs">
                    <div class="tab">Text Insights (32)</div>
                    <div class="tab">Visualizations</div>
                    <div class="tab active">Stakeholder Trends</div>
                </div>
                
                <div style="margin-bottom: 2rem;">
                    <h3>Stakeholder Opinion Evolution</h3>
                    <p>Track how stakeholders' opinions have changed over time based on all documents.</p>
                    
                    <div class="flex gap-2 mt-2">
                        <select style="padding: 0.75rem; border: 1px solid #e0e0e0; border-radius: 4px; font-size: 1rem; min-width: 200px;">
                            <option>Dr. Sarah Johnson</option>
                            <option>Dr. Michael Chen</option>
                            <option>Prof. Elizabeth Taylor</option>
                            <option>Dr. Robert Patel</option>
                        </select>
                        <select style="padding: 0.75rem; border: 1px solid #e0e0e0; border-radius: 4px; font-size: 1rem; min-width: 200px;">
                            <option>Efficacy</option>
                            <option>Safety</option>
                            <option>Data Gaps</option>
                            <option>Competitive Position</option>
                        </select>
                    </div>
                </div>
                
                <div class="card" style="padding: 1.5rem; margin-bottom: 2rem;">
                    <h3 style="margin-top: 0; margin-bottom: 1rem;">Dr. Sarah Johnson - Efficacy Opinion Timeline</h3>
                    <div style="height: 400px; position: relative;">
                        <canvas id="trendChart"></canvas>
                    </div>
                </div>
                
                <div style="margin-top: 2rem;">
                    <h3>Key Statements</h3>
                    
                    <div class="insight-item">
                        <div class="insight-meta">
                            <div>January 2024</div>
                            <div>Phase 2b Discussion</div>
                        </div>
                        <div class="insight-content">
                            "The preliminary efficacy data is encouraging, but I would want to see a larger sample size before drawing any firm conclusions."
                        </div>
                        <div class="insight-footer">
                            <div class="tag tag-efficacy">Efficacy</div>
                            <div class="sentiment-selector">
                                <div class="sentiment-btn">
                                    <div class="light light-green"></div>
                                    <div>Positive</div>
                                </div>
                                <div class="sentiment-btn selected">
                                    <div class="light light-yellow"></div>
                                    <div>Neutral</div>
                                </div>
                                <div class="sentiment-btn">
                                    <div class="light light-red"></div>
                                    <div>Negative</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="insight-item">
                        <div class="insight-meta">
                            <div>July 2024</div>
                            <div>Phase 3 Interim Discussion</div>
                        </div>
                        <div class="insight-content">
                            "The 42% reduction in progression is quite impressive. If these results hold through final analysis, this could be practice-changing."
                        </div>
                        <div class="insight-footer">
                            <div class="tag tag-efficacy">Efficacy</div>
                            <div class="sentiment-selector">
                                <div class="sentiment-btn selected">
                                    <div class="light light-green"></div>
                                    <div>Positive</div>
                                </div>
                                <div class="sentiment-btn">
                                    <div class="light light-yellow"></div>
                                    <div>Neutral</div>
                                </div>
                                <div class="sentiment-btn">
                                    <div class="light light-red"></div>
                                    <div>Negative</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="insight-item">
                        <div class="insight-meta">
                            <div>January 2025</div>
                            <div>KOL Advisory Board</div>
                        </div>
                        <div class="insight-content">
                            "The efficacy data from the Phase 3 trial is impressive, particularly the 42% reduction in progression. I'm now convinced this will be a first-line option for many patients."
                        </div>
                        <div class="insight-footer">
                            <div class="tag tag-efficacy">Efficacy</div>
                            <div class="sentiment-selector">
                                <div class="sentiment-btn selected">
                                    <div class="light light-green"></div>
                                    <div>Positive</div>
                                </div>
                                <div class="sentiment-btn">
                                    <div class="light light-yellow"></div>
                                    <div>Neutral</div>
                                </div>
                                <div class="sentiment-btn">
                                    <div class="light light-red"></div>
                                    <div>Negative</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}

/**
 * Create the report generation screen
 */
function createReportGenerationScreen() {
    // Implementation would go here
    return `
    <div class="screen-container">
        <div class="screen-header">
            <a href="#" class="header-logo">
                <span>Discy Bio</span>
            </a>
            <div class="header-right">
                <div>Medical Affairs</div>
                <div class="user-avatar">JD</div>
            </div>
        </div>
        <div class="screen-layout">
            <div class="sidebar">
                <ul class="sidebar-menu">
                    <li>Dashboard</li>
                    <li class="active">Reports</li>
                    <li>Insights</li>
                    <li>Documents</li>
                    <li>Settings</li>
                </ul>
            </div>
            <div class="main-content">
                <!-- Report generation content would go here -->
                <h2>Generate Report</h2>
                <p>Create a report based on the insights from "KOL Advisory Board - May 2025"</p>
                
                <!-- Report generation form would go here -->
                <p>Report generation form would be implemented here.</p>
            </div>
        </div>
    </div>
    `;
}

/**
 * Create the reports screen
 */
function createReportsScreen() {
    return `
    <div class="screen-container">
        <div class="screen-header">
            <a href="#" class="header-logo">
                <span>Discy Bio</span>
            </a>
            <div class="header-right">
                <div>Medical Affairs</div>
                <div class="user-avatar">JD</div>
            </div>
        </div>
        <div class="screen-layout">
            <div class="sidebar">
                <ul class="sidebar-menu">
                    <li>Dashboard</li>
                    <li class="active">Reports</li>
                    <li>Insights</li>
                    <li>Documents</li>
                    <li>Settings</li>
                </ul>
            </div>
<div class="main-content">
                <div class="flex justify-between items-center mb-4">
                    <h2>Reports</h2>
                    <button class="button">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Draft Report
                    </button>
                </div>
                
                <div class="document-search mb-4">
                    <input type="text" placeholder="Search reports...">
                </div>
                
                <div class="tabs">
                    <div class="tab active">All Reports (8)</div>
                    <div class="tab">Completed (3)</div>
                    <div class="tab">In Review (2)</div>
                    <div class="tab">Draft (3)</div>
                </div>
                
                <div class="item">
                    <div class="item-icon">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="item-info">
                        <h4 class="item-title">KOL Advisory Board Insights - May 2025</h4>
                        <div class="item-meta">
                            <span class="item-status status-published">Completed</span>
                            <span class="review-badge badge-reviewed">Reviewed</span>
                            <span>Medical Affairs • v1.0 • May 7, 2025</span>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center;">
                        <div class="star-rating">
                            <span class="star">★</span>
                            <span class="star">★</span>
                            <span class="star">★</span>
                            <span class="star">★</span>
                            <span class="star">★</span>
                        </div>
                        <div style="margin-left: 1rem;">2 days ago</div>
                    </div>
                </div>
                
                <div class="item">
                    <div class="item-icon">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="item-info">
                        <h4 class="item-title">Efficacy Data Analysis - Compound XJ-542</h4>
                        <div class="item-meta">
                            <span class="item-status status-review">In Review</span>
                            <span class="review-badge badge-ai">AI Generated</span>
                            <span>Medical Affairs • v1.2 • May 1, 2025</span>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center;">
                        <div class="star-rating">
                            <span class="star">★</span>
                            <span class="star">★</span>
                            <span class="star">★</span>
                            <span class="star">★</span>
                            <span class="star" style="color: #e0e0e0;">★</span>
                        </div>
                        <div style="margin-left: 1rem;">1 week ago</div>
                    </div>
                </div>
                
                <div class="item">
                    <div class="item-icon">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="item-info">
                        <h4 class="item-title">Safety Profile Summary - Expert Panel Discussion</h4>
                        <div class="item-meta">
                            <span class="item-status status-draft">Draft</span>
                            <span class="review-badge badge-ai">AI Generated</span>
                            <span>Commercial Team • v0.8 • April 25, 2025</span>
                        </div>
                    </div>
                    <div style="margin-left: 1rem;">2 weeks ago</div>
                </div>
                
                <div class="item">
                    <div class="item-icon">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="item-info">
                        <h4 class="item-title">Payer Perspective Analysis - Reimbursement Strategy</h4>
                        <div class="item-meta">
                            <span class="item-status status-published">Completed</span>
                            <span class="review-badge badge-reviewed">Reviewed</span>
                            <span>Market Access • v2.1 • April 20, 2025</span>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center;">
                        <div class="star-rating">
                            <span class="star">★</span>
                            <span class="star">★</span>
                            <span class="star">★</span>
                            <span class="star">★</span>
                            <span class="star" style="color: #e0e0e0;">★</span>
                        </div>
                        <div style="margin-left: 1rem;">3 weeks ago</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}

/**
 * Create the admin tags screen
 */
function createAdminTagsScreen() {
    // Implementation would go here
    return `
    <div class="screen-container">
        <div class="screen-header">
            <a href="#" class="header-logo">
                <span>Discy Bio</span>
            </a>
            <div class="header-right">
                <div>Admin</div>
                <div class="user-avatar">JD</div>
            </div>
        </div>
        <div class="screen-layout">
            <div class="sidebar">
                <ul class="sidebar-menu">
                    <li>Dashboard</li>
                    <li>Reports</li>
                    <li>Insights</li>
                    <li>Documents</li>
                    <li class="active">Settings</li>
                </ul>
            </div>
            <div class="main-content">
                <!-- Admin tags content would go here -->
                <h2>Admin Settings</h2>
                
                <div class="tabs">
                    <div class="tab">User Management</div>
                    <div class="tab active">Tag Library</div>
                    <div class="tab">Company Templates</div>
                    <div class="tab">Error Management</div>
                    <div class="tab">Usage Statistics</div>
                </div>
                
                <!-- Admin tags content would go here -->
                <p>Admin tags content would be implemented here.</p>
            </div>
        </div>
    </div>
    `;
}

/**
 * Create the admin errors screen
 */
function createAdminErrorsScreen() {
    // Implementation would go here
    return `
    <div class="screen-container">
        <div class="screen-header">
            <a href="#" class="header-logo">
                <span>Discy Bio</span>
            </a>
            <div class="header-right">
                <div>Admin</div>
                <div class="user-avatar">JD</div>
            </div>
        </div>
        <div class="screen-layout">
            <div class="sidebar">
                <ul class="sidebar-menu">
                    <li>Dashboard</li>
                    <li>Reports</li>
                    <li>Insights</li>
                    <li>Documents</li>
                    <li class="active">Settings</li>
                </ul>
            </div>
            <div class="main-content">
                <!-- Admin errors content would go here -->
                <h2>Admin Settings</h2>
                
                <div class="tabs">
                    <div class="tab">User Management</div>
                    <div class="tab">Tag Library</div>
                    <div class="tab">Company Templates</div>
                    <div class="tab active">Error Management</div>
                    <div class="tab">Usage Statistics</div>
                </div>
                
                <!-- Admin errors content would go here -->
                <p>Admin errors content would be implemented here.</p>
            </div>
        </div>
    </div>
    `;
}