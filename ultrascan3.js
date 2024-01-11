function checkAllSourcesForCsrfToken() {
  // Check in memory
  const inMemoryToken = window.CSRF_Token || document.CSRF_Token || null;

  // Check in local storage
  const localStorageToken = localStorage.getItem('CSRF_Token');

  // Check in cookies
  const cookieToken = document.cookie.split(';').find(cookie => cookie.trim().startsWith('CSRF_Token='));

  // Check in the document
  const documentToken = document.querySelector('meta[name="CSRF-Token"]')?.content || null;

  // Check in headers
  const headerToken = getHeaderToken('CSRF-Token');

  console.log('CSRF Tokens:');
  console.log('In Memory:', inMemoryToken);
  console.log('Local Storage:', localStorageToken);
  console.log('Cookies:', cookieToken);
  console.log('In Document:', documentToken);
  console.log('In Headers:', headerToken);
}

function getHeaderToken(headerName) {
  const headers = new Headers();
  const headerValue = headers.get(headerName);
  return headerValue || null;
}

// Call the function to check all sources
checkAllSourcesForCsrfToken();