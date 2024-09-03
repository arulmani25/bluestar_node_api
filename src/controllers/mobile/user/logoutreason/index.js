const { mobileServiceController } = require('../../../../service/index');

const { errorMsg, successMsg } = require('../../../../utils');

const logoutReasonList = async (req, res, next) => {
    try {
        //** service call */

        const logoutList = await mobileServiceController.user.logoutListMobile();

        return res.json({
            Status: 'Success',
            Message: successMsg.DATA_RETRIVED_SUCCESSFULLY,
            Data: logoutList,
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { logoutReasonList };
