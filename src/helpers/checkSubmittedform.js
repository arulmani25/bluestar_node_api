const model = require('../models/index');
const { ObjectId } = require('mongodb');
const axios = require('axios');
const moment = require('moment');
const cron = require('node-cron');

const titles = [
    'PTB TEMPERATURE MONITORING LOG-DOM',
    'PTB TEMPERATURE MONITORING LOG-INTL',
    'Domestic Telecom Room Temperature',
    'International Telecom Room Temperature'
];

let AUTH_TOKEN =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQwYjFhMTJlMjJjZTU4YjExNzU5ZGUiLCJtb2JpbGVfbm8iOiIxMjM0NTY3ODkwIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzIyNTI3OTA0fQ.r0taqmRzQ8eupF8jl_S5_wmWDFYJNiNiC4O-iX1QYXg';

const CronTemperatureLogForm = async () => {
    try {
        let filteredRecords = [];

        // Fetch records from the database
        const records = await model.temperaturelogsTitle.find().exec();

        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const day = String(currentDate.getDate()).padStart(2, '0');
        const fromDate = `${year}-${month}-${day}`;
        const toDate = fromDate;

        // Iterate through the records and fetch data if the record's _id is in objectIds
        for (let i = 0; i < records.length; i++) {
            const recordTitle = records[i].title;
            if (titles.includes(recordTitle)) {
                console.log('recordTitle', recordTitle);
                try {
                    const response = await axios.get(
                        `http://34.212.35.112:3000/api/temperatureform/submittedformweb?id=${records[i]._id}&fromDate=${fromDate}&toDate=${toDate}`,
                        {
                            headers: {
                                'Content-Type': 'application/json, text/plain, */*',
                                Authorization: AUTH_TOKEN
                            }
                        }
                    );
                    console.log('response', response.data);
                    return;
                    // Assuming you want to store the response data
                    filteredRecords.push(response.data);
                } catch (error) {
                    console.error(`Error fetching data for ID: ${records[i]._id}`, error);
                }
            }
        }
        console.log('filteredRecords', filteredRecords);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { CronTemperatureLogForm };
