// Create a function to log cookies
function logCookies() {
    // Get all cookies
    const cookies = document.cookie.split(';');

    // Log present cookies
    console.log("Present Cookies:");
    cookies.forEach(cookie => console.log(cookie.trim()));

    // Log added cookie
    document.addEventListener('cookie-added', (event) => {
        console.log("Added Cookie:", event.detail);
    });

    // Log removed cookie
    document.addEventListener('cookie-removed', (event) => {
        console.log("Removed Cookie:", event.detail);
    });
}

// Intercept document.cookie to detect changes
Object.defineProperty(document, 'cookie', {
    get: function() {
        return this.cookieValue;
    },
    set: function(value) {
        this.cookieValue = value;
        const event = new CustomEvent('cookie-added', { detail: value });
        document.dispatchEvent(event);
        return value;
    }
});

// Create a function to remove cookies
function removeCookie(cookieName) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    const event = new CustomEvent('cookie-removed', { detail: cookieName });
    document.dispatchEvent(event);
}

// Log cookies on page load
window.onload = logCookies;