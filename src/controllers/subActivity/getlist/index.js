const { subActivityServiceController } = require('../../../service/index');
const { errorMsg, successMsg } = require('../../../utils');

const subActivityList = async (req, res, next) => {
    try {
        const record = await subActivityServiceController.subActivityList(req.query);

        return res.json({
            Status: 'Success',
            Message: successMsg.SUB_ACTIVITY_LIST_VIEWED_SUCCESSFULLY,
            Data: record,
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { subActivityList };
