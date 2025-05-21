/**
 * Modals Module
 * Contains functions for creating and managing modal dialogs
 */

/**
 * Create a modal component
 * @param {string} id - The modal ID
 * @param {string} title - The modal title
 * @param {string} content - The modal body content HTML
 * @param {Array} buttons - Array of button configs with text and type
 * @returns {string} HTML for the modal component
 */
function createModal(id, title, content, buttons = []) {
    let buttonsHtml = '';
    
    buttons.forEach(button => {
        const btnClass = button.type === 'secondary' ? 'button button-secondary' : 'button';
        buttonsHtml += `<button class="${btnClass}" data-modal-action="${button.action || 'close'}">${button.text}</button>`;
    });
    
    return `
    <div id="${id}" class="modal-backdrop">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title">${title}</h3>
                <button class="modal-close" data-modal-action="close">&times;</button>
            </div>
            <div class="modal-body">
                ${content}
            </div>
            <div class="modal-footer">
                ${buttonsHtml}
            </div>
        </div>
    </div>
    `;
}

/**
 * Show a modal
 * @param {string} modalId - The ID of the modal to show
 */
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

/**
 * Hide a modal
 * @param {string} modalId - The ID of the modal to hide
 */
function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

/**
 * Initialize modal event listeners
 */
function initializeModalListeners() {
    document.addEventListener('click', function(event) {
        // Close modal when clicking outside content
        if (event.target.classList.contains('modal-backdrop')) {
            const modalId = event.target.id;
            
            // Special handling for report generation modal
            if (modalId === 'report-generation-modal') {
                // Ensure we're on the reports screen when closing
                loadScreen('reports');
            }
            
            hideModal(modalId);
        }
        
        // Modal action buttons
        const modalAction = event.target.closest('[data-modal-action]');
        if (modalAction) {
            const action = modalAction.getAttribute('data-modal-action');
            const modal = modalAction.closest('.modal-backdrop');
            
            if (action === 'close') {
                if (modal) {
                    // Special handling for report generation modal
                    if (modal.id === 'report-generation-modal') {
                        // Ensure we're on the reports screen when closing
                        loadScreen('reports');
                    }
                    
                    hideModal(modal.id);
                }
            } else if (action === 'submit') {
                // Handle form submission
                if (modal.id === 'document-import-modal') {
                    // For document import, show processing modal after submission
                    hideModal(modal.id);
                    showModal('document-processing-modal');
                } else {
                    // Generic submission handling
                    console.log('Modal submit action triggered');
                    hideModal(modal.id);
                }
            } else if (action === 'delete') {
                // Mock delete functionality for reports
                if (confirm('Are you sure you want to delete this report?')) {
                    hideModal(modal.id);
                }
            } else if (action === 'share') {
                // Mock share functionality
                alert('Share functionality would be implemented here.');
            }
        }
    });
}

/**
 * Create all modal dialogs and append them to the document
 */
function createAndAppendModals() {
    const modalContainer = document.createElement('div');
    modalContainer.id = 'modal-container';
    
    // Document Import Modal
    const importModal = createModal(
        'document-import-modal',
        'Import New Document',
        `
        <p>Upload a document or recording to begin analysis.</p>
        
        <div class="upload-area">
            <div class="upload-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17 8L12 3L7 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 3V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div style="font-weight: 600; margin-bottom: var(--spacing-xs);">Drag & Drop File Here</div>
            <div style="color: #666; margin-bottom: var(--spacing-lg);">Supports PDF, DOC, PPT, MP3, WAV files</div>
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
        </div>
        `,
        [
            { text: 'Cancel', type: 'secondary', action: 'close' },
            { text: 'Upload & Process', type: 'primary', action: 'submit' }
        ]
    );
    
    // Document Processing Modal
    const processingModal = createModal(
        'document-processing-modal',
        'Processing Document',
        `
        <p>Please wait while we analyse your document and extract insights.</p>
        
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
                <div style="font-weight: 600; margin-bottom: var(--spacing-xs);">Current Step:</div>
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
            </div>
        </div>
        `,
        [
            { text: 'Close', type: 'secondary', action: 'close' }
        ]
    );
    
    // Redesigned Report Generation Modal
    const reportModal = createModal(
        'report-generation-modal',
        'Generate Report',
        `
        <p>Create a report based on key findings in the source data</p>
        
        <div class="two-column" style="align-items: flex-start;">
            <div class="column">
                <div class="report-section">
                    <h3>1. Select Report Template</h3>
                    <div class="template-selection">
                        <div class="report-template selected">
                            <h4 class="report-template-title">KOL Insight Summary</h4>
                            <p class="report-template-desc">A concise summary of key opinions and recommendations from KOLs, organised by theme.</p>
                        </div>
                        
                        <div class="report-template">
                            <h4 class="report-template-title">Payer Insight Summary</h4>
                            <p class="report-template-desc">Analysis of payer perspectives on market access, pricing, and value propositions.</p>
                        </div>
                        
                        <div class="report-template">
                            <h4 class="report-template-title">Data Gap Analysis</h4>
                            <p class="report-template-desc">Detailed analysis of identified data gaps and recommendations for addressing them.</p>
                        </div>
                    </div>
                </div>
                
                <div class="report-section">
                    <h3>2. Select Data to Include</h3>
                    <p>Make sure the data you want is uploaded in Documents before you create.</p>
                    
                    <div class="data-search mb-3">
                        <input type="text" placeholder="Search documents..." style="width: 70%; margin-right: 10px;">
                        <select style="width: 25%;">
                            <option>All Types</option>
                            <option>Advisory Board</option>
                            <option>Panel Discussion</option>
                            <option>KOL Interview</option>
                        </select>
                    </div>
                    
                    <div class="document-selection">
                        <div class="document-item selected">
                            <div class="document-checkbox">
                                <input type="checkbox" id="doc1" checked>
                                <label for="doc1"></label>
                            </div>
                            <div class="document-info">
                                <div class="document-title">KOL Advisory Board - May 2025</div>
                                <div class="document-meta">32 insights • 2 days ago</div>
                            </div>
                        </div>
                        
                        <div class="document-item">
                            <div class="document-checkbox">
                                <input type="checkbox" id="doc2">
                                <label for="doc2"></label>
                            </div>
                            <div class="document-info">
                                <div class="document-title">Phase 3 Trial Report - Compound XJ-542</div>
                                <div class="document-meta">41 insights • 1 week ago</div>
                            </div>
                        </div>
                        
                        <div class="document-item">
                            <div class="document-checkbox">
                                <input type="checkbox" id="doc3">
                                <label for="doc3"></label>
                            </div>
                            <div class="document-info">
                                <div class="document-title">Expert Panel - Safety Profile Discussion</div>
                                <div class="document-meta">28 insights • 2 weeks ago</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="report-section">
                    <h3>3. Select Insights to Include</h3>
                    <div class="insight-selection">
                        <div class="checkbox-container">
                            <input type="checkbox" id="category-all" class="checkbox" checked>
                            <label for="category-all">All Categories</label>
                        </div>
                        <div style="margin-left: var(--spacing-lg);">
                            <div class="checkbox-container">
                                <input type="checkbox" id="category-efficacy" class="checkbox" checked>
                                <label for="category-efficacy">Efficacy (12 insights)</label>
                            </div>
                            <div class="checkbox-container">
                                <input type="checkbox" id="category-safety" class="checkbox" checked>
                                <label for="category-safety">Safety (8 insights)</label>
                            </div>
                            <div class="checkbox-container">
                                <input type="checkbox" id="category-gaps" class="checkbox" checked>
                                <label for="category-gaps">Data Gaps (7 insights)</label>
                            </div>
                            <div class="checkbox-container">
                                <input type="checkbox" id="category-competitive" class="checkbox" checked>
                                <label for="category-competitive">Competitive Analysis (5 insights)</label>
                            </div>
                            <div class="checkbox-container">
                                <input type="checkbox" id="category-hta" class="checkbox" checked>
                                <label for="category-hta">HTA Outcome (6 insights)</label>
                            </div>
                        </div>
                    </div>
                    <div style="margin-top: var(--spacing-md); text-align: center;">
                        <button class="button">Generate Report</button>
                    </div>
                </div>
            </div>
            
            <div class="column">
                <div class="report-section">
                    <h3>4. Report Preview</h3>
                    <div style="margin-bottom: var(--spacing-md);">
                        <div style="margin-bottom: var(--spacing-xs); font-weight: 600;">Report Title</div>
                        <input type="text" style="width: 100%;" value="KOL Advisory Board Insights - May 2025">
                    </div>
                    
                    <div style="margin-bottom: var(--spacing-md);">
                        <div style="margin-bottom: var(--spacing-xs); font-weight: 600;">Executive Summary</div>
                        <textarea style="width: 100%; min-height: 80px;">This report summarises key insights from the KOL Advisory Board meeting held in May 2025. The meeting focused on discussing the Phase 3 trial results for Compound XJ-542. Overall, KOLs expressed positive views on efficacy data, with some concerns regarding safety profile and identified several data gaps that should be addressed.</textarea>
                    </div>
                    
                    <div class="report-preview" style="height: 300px; border: 1px solid #e0e0e0; border-radius: var(--border-radius); padding: var(--spacing-md); overflow-y: auto;">
                        <div style="text-align: center; margin-bottom: var(--spacing-xl);">
                            <h1 style="color: var(--primary); font-size: var(--font-size-large); margin-bottom: var(--spacing-xs);">KOL Advisory Board Insights</h1>
                            <h2 style="color: var(--primary-dark); font-weight: normal; font-size: var(--font-size-medium);">May 2025</h2>
                        </div>
                        
                        <div style="margin-bottom: var(--spacing-lg);">
                            <h3 style="color: var(--primary-dark); font-size: var(--font-size-medium);">Executive Summary</h3>
                            <p>This report summarises key insights from the KOL Advisory Board meeting held in May 2025. The meeting focused on discussing the Phase 3 trial results for Compound XJ-542. Overall, KOLs expressed positive views on efficacy data, with some concerns regarding safety profile and identified several data gaps that should be addressed.</p>
                        </div>
                        
                        <div style="margin-bottom: var(--spacing-lg);">
                            <h3 style="color: var(--primary-dark); font-size: var(--font-size-medium);">Key Efficacy Insights</h3>
                            <ul>
                                <li><strong>Dr. Sarah Johnson:</strong> "The efficacy data from the Phase 3 trial is impressive, particularly the 42% reduction in progression."</li>
                                <li><strong>Dr. Amanda Lewis:</strong> "The quality of life data is particularly compelling. Patients in the treatment arm showed significant improvements in mobility and pain scores."</li>
                                <li><strong>Dr. David Wong:</strong> "Response rates in the biomarker-positive subgroup are encouraging."</li>
                            </ul>
                        </div>
                        
                        <div style="margin-bottom: var(--spacing-lg);">
                            <h3 style="color: var(--primary-dark); font-size: var(--font-size-medium);">Safety Considerations</h3>
                            <ul>
                                <li><strong>Dr. Michael Chen:</strong> "I'm not convinced the safety profile is as clean as suggested. The 8% incidence of hepatic events in the treatment arm versus 2% in the control arm needs more investigation."</li>
                                <li><strong>Dr. Rebecca Moore:</strong> "The adverse event profile is generally acceptable, but the hepatic signals warrant further investigation."</li>
                            </ul>
                        </div>
                        
                        <div style="margin-bottom: var(--spacing-lg);">
                            <h3 style="color: var(--primary-dark); font-size: var(--font-size-medium);">Data Gaps</h3>
                            <ul>
                                <li><strong>Dr. Robert Patel:</strong> "We need more data on biomarker responses in the elderly population, especially those with comorbidities."</li>
                                <li><strong>Dr. Sarah Johnson:</strong> "Long-term safety data will be critical for regulatory approval and market uptake."</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="font-style: italic; text-align: left; margin-top: var(--spacing-md); color: #666;">
            Insight reports are automatically saved
        </div>
        `,
        [
            { text: 'Exit', type: 'secondary', action: 'close' },
            { text: 'Delete', type: 'secondary', action: 'delete' },
            { text: 'Share', type: 'primary', action: 'share' }
        ]
    );
    
    // New Report View Modal
    const reportViewModal = createModal(
        'report-view-modal',
        'KOL Advisory Board Insights - May 2025',
        `
        <div class="report-view">
            <div style="text-align: center; margin-bottom: var(--spacing-xl);">
                <h1 style="color: var(--primary); font-size: var(--font-size-large); margin-bottom: var(--spacing-xs);">KOL Advisory Board Insights</h1>
                <h2 style="color: var(--primary-dark); font-weight: normal; font-size: var(--font-size-medium);">May 2025</h2>
            </div>
            
            <div style="margin-bottom: var(--spacing-lg);">
                <h3 style="color: var(--primary-dark); font-size: var(--font-size-medium);">Executive Summary</h3>
                <p>This report summarises key insights from the KOL Advisory Board meeting held in May 2025. The meeting focused on discussing the Phase 3 trial results for Compound XJ-542. Overall, KOLs expressed positive views on efficacy data, with some concerns regarding safety profile and identified several data gaps that should be addressed.</p>
            </div>
            
            <div style="margin-bottom: var(--spacing-lg);">
                <h3 style="color: var(--primary-dark); font-size: var(--font-size-medium);">Key Efficacy Insights</h3>
                <ul>
                    <li><strong>Dr. Sarah Johnson:</strong> "The efficacy data from the Phase 3 trial is impressive, particularly the 42% reduction in progression."</li>
                    <li><strong>Dr. Amanda Lewis:</strong> "The quality of life data is particularly compelling. Patients in the treatment arm showed significant improvements in mobility and pain scores."</li>
                    <li><strong>Dr. David Wong:</strong> "Response rates in the biomarker-positive subgroup are encouraging."</li>
                </ul>
            </div>
            
            <div style="margin-bottom: var(--spacing-lg);">
                <h3 style="color: var(--primary-dark); font-size: var(--font-size-medium);">Safety Considerations</h3>
                <ul>
                    <li><strong>Dr. Michael Chen:</strong> "I'm not convinced the safety profile is as clean as suggested. The 8% incidence of hepatic events in the treatment arm versus 2% in the control arm needs more investigation."</li>
                    <li><strong>Dr. Rebecca Moore:</strong> "The adverse event profile is generally acceptable, but the hepatic signals warrant further investigation."</li>
                </ul>
            </div>
            
            <div style="margin-bottom: var(--spacing-lg);">
                <h3 style="color: var(--primary-dark); font-size: var(--font-size-medium);">Data Gaps</h3>
                <ul>
                    <li><strong>Dr. Robert Patel:</strong> "We need more data on biomarker responses in the elderly population, especially those with comorbidities."</li>
                    <li><strong>Dr. Sarah Johnson:</strong> "Long-term safety data will be critical for regulatory approval and market uptake."</li>
                </ul>
            </div>
            
            <div class="report-actions">
                <div class="flex justify-between items-center">
                    <div>
                        <button class="button button-secondary">
                            <svg class="icon" viewBox="0 0 24 24" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Add Visualization
                        </button>
                    </div>
                    <div class="checkbox-container" style="margin-bottom: 0;">
                        <input type="checkbox" id="review-flag" class="checkbox">
                        <label for="review-flag">Mark as human-reviewed</label>
                    </div>
                </div>
            </div>
        </div>
        `,
        [
            { text: 'Close', type: 'secondary', action: 'close' },
            { text: 'Download PDF', type: 'secondary', action: 'download' },
            { text: 'Share', type: 'primary', action: 'share' }
        ]
    );
    
    modalContainer.innerHTML = importModal + processingModal + reportModal + reportViewModal;
    document.body.appendChild(modalContainer);
}