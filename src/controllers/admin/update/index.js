const { adminServiceController } = require('../../../service/index');
const { errorMsg, successMsg } = require('../../../utils/index');

const adminRecordUpdate = async (req, res, next) => {
    try {
        const id = req.params.id;

        const payload = req.body;

        //** service call */

        const data = await adminServiceController.updateRecord(id, payload);

        if (!data) throw new Error(errorMsg.USER_NOT_FOUND);

        return res.json({
            Status: 'Success',
            Message: successMsg.RECORD_UPDATED_SUCCESSFULLY,
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { adminRecordUpdate };
