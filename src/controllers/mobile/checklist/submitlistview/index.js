const { mobileServiceController } = require('../../../../service/index');
const { successMsg, errorMsg } = require('../../../../utils/message');

const submittedChecklistView = async (req, res, next) => {
    try {
        const record = await mobileServiceController.checklist.submitListView(req.query);
        return res.json({
            Status: 'Success',
            Message: successMsg.DATA_RETRIVED_SUCCESSFULLY,
            Data: record,
            Code: 200
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = { submittedChecklistView };
