

const websiteUrl = 'https://beta.deeeep.io/';
const searchString = 'csrf';


function fetchPage(url, callback) {
  http.get(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      callback(data);
    });
  }).on('error', (error) => {
    console.error('Error fetching page:', error.message);
    callback(null);
  });
}

// Function to scan the HTML content for the search string
function scanPage(html, search) {
  if (!html) {
    console.error('HTML content is null. Aborting scan.');
    return;
  }

  const contentMatches = html.includes(search);

  if (contentMatches) {
    console.log(`Found match on ${websiteUrl}`);
  } else {
    console.log(`No match on ${websiteUrl}`);
  }
}

// Main function to initiate the scan
function scanWebsite() {
  fetchPage(websiteUrl, (html) => {
    scanPage(html, searchString);
  });
}


scanWebsite();