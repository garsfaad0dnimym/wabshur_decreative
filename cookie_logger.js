(function() {
    const originalSetCookie = document.cookie;
    
    document.__defineSetter__('cookie', function(val) {
        console.log(`[Cookie Added]: ${val}`);
        originalSetCookie.call(document, val);
    });

    const originalClearCookie = document.clearCookies;
    
    document.clearCookies = function() {
        console.log(`[Cookies Cleared]`);
        originalClearCookie.call(document);
    };
    
    console.log('[Cookie Logger Activated]');
})();