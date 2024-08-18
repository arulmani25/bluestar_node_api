const { userTypeController } = require('../../../service/index');
const { errorMsg, successMsg } = require('../../../utils/index');

const createUserType = async (req, res, next) => {
    try {
        const payload = req.body;

        //** service call */

        const user = await userTypeController.createUserType(payload);

        return res.json({
            Status: 'Success',
            Message: successMsg.USER_TYPE_CREATED_SUCCESSFULLY,
            Data: user,
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};
module.exports = { createUserType };
