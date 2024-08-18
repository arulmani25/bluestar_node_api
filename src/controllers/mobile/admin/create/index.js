const { mobileServiceController } = require('../../../../service/index');
const { passwordValidation, successMsg } = require('../../../../utils/index');

const adminCreationUsingMobile = async (req, res, next) => {
    try {
        const payload = req.body;

        const encryptedPassword = await passwordValidation.encryptPassword(payload.password);

        payload.password = encryptedPassword;

        const user = await mobileServiceController.auth.createAdminMobile(payload);

        return res.json({
            Status: 'Success',
            Message: successMsg.ADMIN_CREATED_SUCCESSFULLY,
            Data: user,
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { adminCreationUsingMobile };
