const { mobileServiceController, userServiceController } = require('../../../../service/index');
const { successMsg, errorMsg, generateToken } = require('../../../../utils/index');

const userLoginUsingMobile = async (req, res, next) => {
    try {
        const payload = req.body;

        const data = await mobileServiceController.user.userMobileLogin(payload);

        const token = await generateToken({
            _id: data[0]._id,
            mobile_no: data[0].mobile_no,
            role: data[0].user_role,
            user_type: data[0].user_type
        });

        if (!data) throw new Error(errorMsg.USER_NOT_FOUND);

        delete data[0].password;
        delete data[0].confirm_password;
        data[0].token = token;
        return res.json({
            Status: 'Success',
            Message: successMsg.USER_LOGGEDIN_SUCCESSFULLY,
            Data: data,
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { userLoginUsingMobile };
