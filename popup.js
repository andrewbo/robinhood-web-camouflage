// Saves options to chrome.storage
function save_options() {
    let portfolioValue = document.getElementById('portfolio-value').checked;
    let buyingPower   = document.getElementById('buying-power').checked;
    chrome.storage.sync.set({
        portfolioValue: portfolioValue,
        buyingPower: buyingPower
    }, function() {
        // Update status to let user know options were saved.
        let status = document.getElementById('options-save-status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 3000);
    });
}

// Load options from chrome.storage
function restore_options() {
    chrome.storage.sync.get({
        portfolioValue: false,
        buyingPower: false
    }, function(items) {
        document.getElementById('portfolio-value').checked = items.portfolioValue;
        document.getElementById('buying-power').checked = items.buyingPower;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);