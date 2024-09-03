const { mainActivityServiceController } = require('../../../service/index');
const { errorMsg, successMsg } = require('../../../utils');

const updateRecord = async (req, res, next) => {
    try {
        const { id } = req.params;
        const record = await mainActivityServiceController.updateRecord(id, req.body);
        return res.json({
            Status: 'Success',
            Message: successMsg.GROUP_UPDATED_SUCCESSFULLY,
            Data: [],
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { updateRecord };
