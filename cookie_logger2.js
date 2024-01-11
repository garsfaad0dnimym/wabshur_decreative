(function() {
    const cookieStorage = [];
    
    const originalSetCookie = document.cookie;

    document.__defineSetter__('cookie', function(val) {
        cookieStorage.push(`[Cookie Added]: ${val}`);
        originalSetCookie.call(document, val);
    });

    const originalClearCookie = document.clearCookies;

    document.clearCookies = function() {
        cookieStorage.push('[Cookies Cleared]');
        originalClearCookie.call(document);
    };

    // Periodically check for changes and log
    setInterval(function() {
        if (cookieStorage.length > 0) {
            console.log(...cookieStorage);
            cookieStorage.length = 0; // Clear after logging
        }
    }, 5000); // Log every 5 seconds
})();