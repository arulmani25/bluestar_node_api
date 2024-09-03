const { userTypeController } = require('../../../service/index');

const { errorMsg, successMsg } = require('../../../utils/index');

const getUserTypeList = async (req, res, next) => {
    try {
        //** service call */

        const activityTypeList = await userTypeController.userTypeList(req.query);

        return res.json({
            Status: 'Success',
            Message: successMsg.DATA_RETRIVED_SUCCESSFULLY,
            Data: activityTypeList,
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { getUserTypeList };
