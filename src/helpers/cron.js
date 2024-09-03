const model = require('../models/index');
const { priority, jobStatus } = require('../utils/enum');
const moment = require('moment');
const cron = require('node-cron');

const cronJob = async () => {
    try {
        const currentDate = moment().startOf('days');
        cron.schedule('30 0 * * *', async () => {
            const record = await model.ticketModel.find({
                status: priority.inProgress
            });
            for (const iterator of record) {
                const extractDate = iterator.createdAt.split('T')[0];
                const dateToCheck = moment(extractDate).startOf('days');
                if (dateToCheck.isBefore(currentDate)) {
                    iterator.status = jobStatus.pending;
                }
            }
            console.log('running a task at 12:30 AM');
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = { cronJob };
