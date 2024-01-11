async function getCsrfToken(url) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const match = html.match(/<meta.*?name=["']csrf-token["'].*?content=["'](.*?)["']/i);

    if (match && match[1]) {
      console.log(`CSRF token: ${match[1]}`);
    } else {
      console.error('CSRF token not found. Check the HTML structure.');
    }
  } catch (error) {
    console.error('Error fetching CSRF token:', error.message);
  }
}

getCsrfToken('https://beta.deeeep.io/');