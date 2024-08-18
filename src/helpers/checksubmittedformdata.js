const axios = require('axios');

const url = 'http://34.212.35.112:3000/api/temperatureform/submittedformweb';
const params = {
    id: '665db5e2c92bc6fd66691619',
    fromDate: '2024-08-03',
    toDate: '2024-08-03'
};
const headers = {
    Accept: 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.9',
    Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQwYjFhMTJlMjJjZTU4YjExNzU5ZGUiLCJtb2JpbGVfbm8iOiIxMjM0NTY3ODkwIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzIyNTI3OTA0fQ.r0taqmRzQ8eupF8jl_S5_wmWDFYJNiNiC4O-iX1QYXg',
    Connection: 'keep-alive',
    'If-None-Match': 'W/"c4a-weGXzzv4SkWGndBBPOo5t3tAVic"',
    Origin: 'http://34.212.35.112',
    Referer: 'http://34.212.35.112/',
    'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
};

axios
    .get(url, {
        params: params,
        headers: headers
    })
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
