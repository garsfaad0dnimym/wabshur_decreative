function checkAllSourcesForCsrfToken() {
  // Check in memory
  const inMemoryToken = window.csrfToken || document.csrfToken || null;

  // Check in local storage
  const localStorageToken = localStorage.getItem('csrfToken');

  // Check in cookies
  const cookieToken = document.cookie.split(';').find(cookie => cookie.trim().startsWith('csrfToken='));

  // Check in the document
  const documentToken = document.querySelector('meta[name="csrf-token"]')?.content || null;

  console.log('CSRF Tokens:');
  console.log('In Memory:', inMemoryToken);
  console.log('Local Storage:', localStorageToken);
  console.log('Cookies:', cookieToken);
  console.log('In Document:', documentToken);
}

// Call the function to check all sources
checkAllSourcesForCsrfToken();