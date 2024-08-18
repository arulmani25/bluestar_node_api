const { subLocationServiceController } = require('../../../service/index');
const { errorMsg, successMsg } = require('../../../utils');

const updateSubLocation = async (req, res, next) => {
    try {
        const { id } = req.params;
        const record = await subLocationServiceController.updateSubLocation(id, req.body);
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

module.exports = { updateSubLocation };
