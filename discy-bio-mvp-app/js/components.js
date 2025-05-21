/**
 * Components Module
 * Contains functions for creating reusable UI components.
 */

/**
 * Create a header component
 * @param {string} title - The title to display in the header
 * @param {string} role - The user's role
 * @param {string} initials - The user's initials for the avatar
 * @returns {string} HTML for the header component
 */
function createHeader(title = 'Discy Bio', role = 'Medical Affairs', initials = 'GB') {
    return `
    <div class="screen-header">
        <a href="#" class="header-logo">
            <span>${title}</span>
        </a>
        <div class="header-right">
            <div>${role}</div>
            <div class="user-avatar">${initials}</div>
        </div>
    </div>
    `;
}

/**
 * Create a sidebar component
 * @param {string} activeItem - The active menu item
 * @returns {string} HTML for the sidebar component
 */
function createSidebar(activeItem = 'Dashboard') {
    const menuItems = ['Dashboard', 'Reports', 'Insights', 'Documents', 'Settings'];
        let sidebarHtml = '<div class="sidebar"><ul class="sidebar-menu">';
    
    menuItems.forEach(item => {
        const isActive = item === activeItem ? 'active' : '';
        sidebarHtml += `<li class="${isActive}">${item}</li>`;
    });
    
    sidebarHtml += '</ul></div>';
    
    return sidebarHtml;
}

/**
 * Create a button component
 * @param {string} text - The button text
 * @param {string} type - The button type (primary or secondary)
 * @param {string} icon - Optional SVG icon code
 * @returns {string} HTML for the button component
 */
function createButton(text, type = 'primary', icon = '') {
    const buttonClass = type === 'secondary' ? 'button button-secondary' : 'button';
    
    return `
    <button class="${buttonClass}">
        ${icon}
        ${text}
    </button>
    `;
}

/**
 * Create a tag component
 * @param {string} text - The tag text
 * @param {string} type - The tag type (efficacy, safety, data-gap, competitive)
 * @returns {string} HTML for the tag component
 */
function createTag(text, type = 'efficacy') {
    return `<div class="tag tag-${type}">${text}</div>`;
}

/**
 * Create an insight item component
 * @param {Object} insight - The insight data
 * @returns {string} HTML for the insight item component
 */
function createInsightItem(insight) {
    return `
    <div class="insight-item">
        <div class="insight-meta">
            <div class="entity-pill">${insight.stakeholder}</div>
            <div>Time: ${insight.time}</div>
        </div>
        <div class="insight-content">
            "${insight.content}"
        </div>
        <div class="insight-footer">
            <div class="tag tag-${insight.tagType}">${insight.tag}</div>
            <div class="sentiment-selector">
                <div class="sentiment-btn ${insight.sentiment === 'positive' ? 'selected' : ''}">
                    <div class="light light-green"></div>
                    <div>Positive</div>
                </div>
                <div class="sentiment-btn ${insight.sentiment === 'neutral' ? 'selected' : ''}">
                    <div class="light light-yellow"></div>
                    <div>Neutral</div>
                </div>
                <div class="sentiment-btn ${insight.sentiment === 'negative' ? 'selected' : ''}">
                    <div class="light light-red"></div>
                    <div>Negative</div>
                </div>
            </div>
        </div>
    </div>
    `;
}

/**
 * Create a document/report item component
 * @param {Object} item - The item data
 * @returns {string} HTML for the item component
 */
function createListItem(item) {
    // Implementation would go here
    return `
    <div class="item">
        <div class="item-icon">
            <!-- Icon would go here -->
        </div>
        <div class="item-info">
            <h4 class="item-title">${item.title}</h4>
            <div class="item-meta">${item.meta}</div>
        </div>
        <div class="item-date">${item.date}</div>
    </div>
    `;
}

// More component functions would be defined here...
