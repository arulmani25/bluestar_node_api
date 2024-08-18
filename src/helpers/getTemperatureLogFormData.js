const axios = require('axios');
const model = require('../models/index');
const fs = require('fs');

// Static example input dates
let fromDate = '2024-06-04';
let toDate = '2024-06-04';

const AUTH_TOKEN =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQwYjFhMTJlMjJjZTU4YjExNzU5ZGUiLCJtb2JpbGVfbm8iOiIxMjM0NTY3ODkwIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzIyNTI3OTA0fQ.r0taqmRzQ8eupF8jl_S5_wmWDFYJNiNiC4O-iX1QYXg';
const id = '665db5e2c92bc6fd6669161c';

const CronTemperatureLogForms = async () => {
    try {
        let filteredRecords = [];
        let getResult = [];

        // Calculate current date and next day
        const currentDate = new Date();
        const fromDateObj = new Date(fromDate);
        const toDateObj = new Date(toDate);

        // Check if `toDate` is less than current date
        while (toDateObj < currentDate) {
            if (toDateObj < currentDate) {
                // Increment `toDate` by 1 day
                toDateObj.setDate(toDateObj.getDate());
                toDate = toDateObj.toISOString().split('T')[0];
                console.log('fromDate', fromDate);
                console.log('toDate', toDate);
                try {
                    const response = await axios.get(
                        `http://34.212.35.112:3000/api/temperatureform/submittedformweb?id=${id}&fromDate=${fromDate}&toDate=${toDate}`,
                        {
                            headers: {
                                'Content-Type': 'application/json, text/plain, */*',
                                Authorization: AUTH_TOKEN,
                                Accept: 'application/json, text/plain, */*',
                                'Accept-Language': 'en-US,en;q=0.9',
                                Connection: 'keep-alive',
                                'If-None-Match': 'W/"c4a-weGXzzv4SkWGndBBPOo5t3tAVic"',
                                Origin: 'http://34.212.35.112',
                                Referer: 'http://34.212.35.112/',
                                'User-Agent':
                                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
                            },
                            httpsAgent: new (require('https').Agent)({ rejectUnauthorized: false })
                        }
                    );
                    /**---------------------------------------------------------- */
                    console.log('response.data', response);
                    /**---------------------------------------------------------- */
                    // Assuming you want to store the response data
                    filteredRecords.push(response.data);
                    toDateObj.setDate(toDateObj.getDate() + 1);
                    toDate = toDateObj.toISOString().split('T')[0];
                    fromDate = toDate;
                    /**---------------------------------------------------------- */
                    console.log('filteredRecords', filteredRecords[0].Data.length);
                    /**---------------------------------------------------------- */
                    for (let i = 0; i < filteredRecords[0].Data.length; i++) {
                        getResult.push(filteredRecords[0].Data[i]);
                    }
                } catch (error) {
                    console.error(`Error fetching dfilteredRecordsata for ID: ${id}`, error);
                }
            }
        }
        console.log('getResult', getResult.length);

        // Save getResult to a JSON file
        const filePath = './submitted_temperature_log_forms.json';
        console.log('filePath', filePath);
        fs.writeFile(filePath, JSON.stringify(getResult, null, 2), 'utf8', (err) => {
            if (err) {
                console.error('An error occurred while writing JSON to file.', err);
            } else {
                console.log('JSON file has been saved.');
            }
        });
    } catch (error) {
        console.log(error);
    }
};

CronTemperatureLogForms();
