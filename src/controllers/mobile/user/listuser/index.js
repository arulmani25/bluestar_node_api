const { mobileServiceController } = require('../../../../service/index');

const { errorMsg, successMsg } = require('../../../../utils');

const userList = async (req, res, next) => {
    try {
        //** service call */

        const userList = await mobileServiceController.user.userListMobile(req.query);

        return res.json({
            Status: 'Success',
            Message: successMsg.DATA_RETRIVED_SUCCESSFULLY,
            Data: userList,
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { userList };
