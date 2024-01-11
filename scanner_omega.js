function getXsrfToken() {
  const potentialSources = [
    // Check DOM elements
    document.getElementsByName('xsrf-token'),
    document.getElementsByName('csrf-token'),
    document.getElementsByName('authenticity_token'),
    document.getElementsByName('anti-forgery-token'),
    // Add more potential DOM sources here

    // Check cookies
    document.cookie,

    // Check headers in an AJAX request (assuming you have a library like jQuery)
    // $.ajax({
    //   url: 'your-api-endpoint',
    //   method: 'GET',
    //   headers: {
    //     'X-XSRF-Token': 'your-custom-header-value',
    //   },
    //   success: function(response) {
    //     console.log('XSRF Token from AJAX request:', response.xsrfToken);
    //   }
    // });

    // Check local storage
    localStorage.getItem('xsrf-token'),

    // Check session storage
    sessionStorage.getItem('xsrf-token'),

    // Check URL parameters
    new URLSearchParams(window.location.search).get('xsrf-token'),

    // Check if it's part of the document body
    document.body.innerHTML.match(/xsrf-token: ([^<]+)/),

    // Add more vectors as needed
  ];

  let xsrfToken = null;

  potentialSources.forEach(source => {
    if (source) {
      xsrfToken = source;
    }
  });

  if (xsrfToken) {
    console.log('XSRF Token found:', xsrfToken);
  } else {
    console.error('XSRF Token not found. Keep exploring, adventurer!');
  }
}

getXsrfToken();