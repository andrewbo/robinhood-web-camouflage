$(function(){
    chrome.storage.sync.get(['portfolioValue', 'buyingPower'], function(result) {
        if (!result.portfolioValue) {
            let portfolioValueSelector1 = '#react_root header h1 > span.up';
            let portfolioValueSelector2 = '#react_root header h1 > span.down';
            function repeatit() {
                setTimeout(function() {validateit(), 1000});
            }

            function validateit() {
                if (document.querySelector(portfolioValueSelector1)) {
                    document.querySelector(portfolioValueSelector1).style.visibility = "visible";
                } else if (document.querySelector(portfolioValueSelector2)) {
                    document.querySelector(portfolioValueSelector2).style.visibility = "visible";
                } else {
                    repeatit();
                }
            }

            validateit();
        }
    });
});