const { adminServiceController } = require('../../../service/index');
const { errorMsg, successMsg } = require('../../../utils/index');

const createAdmin = async (req, res, next) => {
    try {
        const payload = req.body;

        //** service call */

        const user = await adminServiceController.createAdmin(payload);

        if (!user) throw new Error(errorMsg.USER_ALREADY_EXIST);

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
module.exports = { createAdmin };
