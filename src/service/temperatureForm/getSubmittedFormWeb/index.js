const { default: mongoose } = require('mongoose');
const model = require('../../../models/index');
const moment = require('moment');

const getSubmittedFormWeb = async (query) => {
    let fromDate;
    let toDate;
    if (query.fromDate && query.toDate) {
        fromDate = moment(query.fromDate);
        toDate = moment(query.toDate);
    } else {
        fromDate = moment();
        toDate = moment();
    }
    const startDate = fromDate.startOf('day').toDate();
    const endDate = toDate.endOf('day').toDate();
    const data = await model.temperaturelogForms.find({
        titleId: query.id,
        createdAt: { $gte: startDate, $lte: endDate }
    });
    const finalData = [];
    for (const iterator of data) {
        console.log();
        for (const logs of iterator.logs) {
            finalData.push({
                parameter: logs.location,
                [iterator.time]: logs.value,
                remark: logs.remark ? logs.remark : ''
            });
        }
    }
    function groupRecordsByParameter(records) {
        const groupedData = {};

        records.forEach((record) => {
            const { parameter, ...values } = record;
            if (!groupedData[parameter]) {
                groupedData[parameter] = {};
            }
            Object.assign(groupedData[parameter], values);
        });

        // Convert the grouped data into an array of objects
        const result = Object.keys(groupedData).map((parameter) => ({
            parameter,
            ...groupedData[parameter]
        }));

        return result;
    }

    const groupedData = groupRecordsByParameter(finalData);
    return groupedData;
};

module.exports = { getSubmittedFormWeb };
