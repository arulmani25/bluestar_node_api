const { mobileServiceController } = require('../../../../service/index');
const { passwordValidation, successMsg, errorMsg } = require('../../../../utils/index');

const adminLoginUsingMobile = async (req, res, next) => {
    try {
        const payload = req.body;

        const data = await mobileServiceController.auth.adminMobileLogin(payload);

        const isValidPassword = await passwordValidation.checkPassword(payload.password, data.password);
        if (!isValidPassword) throw new Error(errorMsg.INCORRECT_PASSWORD);

        return res.json({
            Status: 'Success',
            Message: successMsg.ADMIN_LOGGEDIN_SUCCESSFULLY,
            Code: 200
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = { adminLoginUsingMobile };
