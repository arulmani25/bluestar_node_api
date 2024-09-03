const { subActivityServiceController } = require('../../../service/index');
const { errorMsg, successMsg } = require('../../../utils');

const updateRecord = async (req, res, next) => {
    try {
        const { id } = req.params;
        const payload = req.body;

        const record = await subActivityServiceController.updateRecord(id, payload);

        return res.json({
            Status: 'Success',
            Message: successMsg.RECORD_UPDATED_SUCCESSFULLY,
            Data: [],
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { updateRecord };
