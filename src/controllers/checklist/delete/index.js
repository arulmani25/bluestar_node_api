const { checkListServiceController } = require('../../../service/index');
const { successMsg } = require('../../../utils');

const deleteCheckList = async (req, res, next) => {
    try {
        const { id } = req.params;

        const record = await checkListServiceController.deleteCheckList(id);
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

module.exports = { deleteCheckList };
