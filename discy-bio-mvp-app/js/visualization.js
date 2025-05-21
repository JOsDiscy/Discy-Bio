// js/visualization.js

/**
 * Visualization Module
 * Contains functions for creating charts and visualizations
 */

/**
 * Create a bar chart
 * @param {string} canvasId - The ID of the canvas element
 * @param {Array} labels - The chart labels
 * @param {Array} data - The chart data
 * @param {string} title - The chart title
 */
function createBarChart(canvasId, labels, data, title) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    
    // Create the chart
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: title,
                data: data,
                backgroundColor: '#45786f',
                borderColor: '#37615a',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: title,
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    color: '#45786f'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

/**
 * Create a line chart for trend visualization
 * @param {string} canvasId - The ID of the canvas element
 * @param {Array} labels - The chart labels (e.g., dates)
 * @param {Array} data - The chart data
 * @param {string} title - The chart title
 */
function createLineChart(canvasId, labels, data, title) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    
    // Create the chart
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: title,
                data: data,
                borderColor: '#45786f',
                backgroundColor: 'rgba(69, 120, 111, 0.1)',
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: title,
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    color: '#45786f'
                }
            }
        }
    });
}

/**
 * Create a pie chart for distribution visualization
 * @param {string} canvasId - The ID of the canvas element
 * @param {Array} labels - The chart labels
 * @param {Array} data - The chart data
 * @param {string} title - The chart title
 */
function createPieChart(canvasId, labels, data, title) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    
    // Create the chart
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: [
                    '#4CAF50',  // success
                    '#FFC107',  // warning
                    '#F44336',  // danger
                    '#9E9E9E'   // neutral
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: title,
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    color: '#45786f'
                },
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

/**
 * Create a simple word cloud (requires an additional library for proper word clouds)
 * This is a simple simulation of a word cloud using different sized words
 * @param {string} containerId - The ID of the container element
 * @param {Array} words - Array of word objects with text and weight properties
 * @param {string} title - The visualization title
 */
function createSimpleWordCloud(containerId, words, title) {
    const container = document.getElementById(containerId);
    
    // Clear the container
    container.innerHTML = '';
    
    // Add title
    const titleElement = document.createElement('div');
    titleElement.style.fontSize = '16px';
    titleElement.style.fontWeight = 'bold';
    titleElement.style.color = '#45786f';
    titleElement.style.marginBottom = '1rem';
    titleElement.style.textAlign = 'center';
    titleElement.textContent = title;
    container.appendChild(titleElement);
    
    // Create a wrapper for the word cloud
    const cloudWrapper = document.createElement('div');
    cloudWrapper.style.display = 'flex';
    cloudWrapper.style.flexWrap = 'wrap';
    cloudWrapper.style.justifyContent = 'center';
    cloudWrapper.style.alignItems = 'center';
    cloudWrapper.style.padding = '1rem';
    
    // Add words with different sizes based on weight
    words.forEach(word => {
        const wordElement = document.createElement('div');
        wordElement.style.margin = '0.5rem';
        wordElement.style.padding = '0.5rem 1rem';
        wordElement.style.fontSize = (0.8 + word.weight * 0.1) + 'rem';
        wordElement.style.backgroundColor = `rgba(69, 120, 111, ${0.1 + word.weight * 0.05})`;
        wordElement.style.borderRadius = '4px';
        wordElement.textContent = word.text;
        cloudWrapper.appendChild(wordElement);
    });
    
    container.appendChild(cloudWrapper);
}