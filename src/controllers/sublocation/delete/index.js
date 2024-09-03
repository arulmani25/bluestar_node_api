const { subLocationServiceController } = require('../../../service/index');
const { errorMsg, successMsg } = require('../../../utils');

const deleteSubLocation = async (req, res, next) => {
    try {
        const { id } = req.params;

        const record = await subLocationServiceController.deleteSubLocation(id);

        return res.json({
            Status: 'Success',
            Message: successMsg.RECORD_DELETED_SUCCESSFULLY,
            Data: [],
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { deleteSubLocation };
