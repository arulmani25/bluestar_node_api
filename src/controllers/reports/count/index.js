const { reportsServiceController } = require('../../../service/index');
const { successMsg } = require('../../../utils');
const { jobStatus } = require('../../../utils/enum');

const reportsCount = async (req, res, next) => {
    try {
        const count = await reportsServiceController.getReportCount();

        const obj = {
            notStarted: 0,
            jobStart: 0,
            jobPaused: 0,
            jobSubmitted: 0
        };

        count.forEach((el) => {
            if (el.job_status === jobStatus.notStarted) {
                obj.notStarted += 1;
            } else if (el.job_status === jobStatus.started) {
                obj.jobStart += 1;
            } else if (el.job_status === jobStatus.paused) {
                obj.jobPaused += 1;
            } else if (el.job_status === jobStatus.submitted) {
                obj.jobSubmitted += 1;
            }
        });

        obj.total = count.length;

        return res.json({
            Status: 'Success',
            Message: successMsg.DATA_RETRIVED_SUCCESSFULLY,
            Data: obj,
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { reportsCount };
