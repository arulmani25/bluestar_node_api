/* eslint-disable no-unused-vars */
const model = require('../../../../models/index');
const moment = require('moment');
const fs = require('fs');
const path = require('path');

const fileUpload = async (payload) => {
    const baseUrl = `http://18.237.108.95:3030/`;
    if (Object.keys(payload.files).length == 0) {
        return res.status(400).send('No files were uploaded.');
    }

    const sampleFile = payload.files;
    const filePath = [];
    if (sampleFile.length > 1) {
        sampleFile.forEach((element) => {
            const time_details = moment().format('YYYYMMDDHHmmss');
            var path = 'upload/' + time_details + '_' + element.name;
            element.mv(path, async function (err) {
                if (err) return err;
            });
            filePath.push(path);
        });
    } else {
        const time_details = moment().format('YYYYMMDDHHmmss');
        var path = 'upload/' + time_details + '_' + sampleFile.name;
        sampleFile.mv(path, async function (err) {
            if (err) return err;
        });
        filePath.push(path);
    }

    return filePath;
};

module.exports = { fileUpload };
