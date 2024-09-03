const { checkListServiceController } = require('../../../service/index');
const { errorMsg, successMsg } = require('../../../utils');

const updateCheckList = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { loggedUser } = req;
        const record = await checkListServiceController.updateCheckListRecord(id, req.body, loggedUser);
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

module.exports = { updateCheckList };
