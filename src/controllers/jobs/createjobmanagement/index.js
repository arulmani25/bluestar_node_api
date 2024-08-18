const { jobServiceController } = require('../../../service/index');
const { errorMsg, successMsg } = require('../../../utils/index');

const createJob = async (req, res, next) => {
    try {
        const payload = req.body;

        //** service call */

        const user = await jobServiceController.createjobmanagement(payload);

        return res.json({
            Status: 'Success',
            Message: successMsg.JOB_MANAGEMENT_CREATED_SUCCESSFULLY,
            Data: [],
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};
module.exports = { createJob };
