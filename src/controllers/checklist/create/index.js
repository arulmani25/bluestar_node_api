const { checkListServiceController } = require('../../../service/index');
const { errorMsg, successMsg } = require('../../../utils');

const createCheckList = async (req, res, next) => {
    try {
        const payload = req?.body;
        //! add created by using login in payload

        const record = await checkListServiceController.createList(payload);
        if (!record) throw new Error(errorMsg.FAILED_TO_CREATE_CHECK_LIST);
        return res.json({
            Status: 'Success',
            Message: successMsg.CHECK_LIST_CREATED_SUCCESSFULLY,
            Data: record,
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { createCheckList };
