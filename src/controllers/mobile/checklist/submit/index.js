const { mobileServiceController } = require('../../../../service/index');
const { successMsg } = require('../../../../utils');

const submitCheckList = async (req, res, next) => {
    try {
        const payload = req.body;

        const record = await mobileServiceController.checklist.submitList(payload);

        return res.json({
            Status: 'Success',
            Message: successMsg.CHECK_LIST_SUBMITTED_SUCCESSFULLY,
            Data: [],
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { submitCheckList };
