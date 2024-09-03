const userServiceController = require('../../../service/user');
const { roles } = require('../../../utils/enum');

const { successMsg, errorMsg } = require('../../../utils/index');
const { encryptPassword } = require('../../../utils/passwordencryption');
const { getNanoId } = require('../../../helpers/Utils');

const createUser = async (req, res, next) => {
    try {
        if (req.loggedUser.role !== roles.admin) {
            throw new Error(errorMsg.UNAUTHORIZED_USER);
        }

        const payload = req.body;

        const password = await encryptPassword(payload.user_password);

        payload.user_password = password;
        payload.user_id = getNanoId();

        //** service call */

        const record = await userServiceController.createUser(payload);

        if (!record) throw new Error(errorMsg.USER_ALREADY_EXIST);

        return res.json({
            Status: 'Success',
            Message: successMsg.USER_CREATED_SUCCESSFULLY,
            Data: record,
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { createUser };
