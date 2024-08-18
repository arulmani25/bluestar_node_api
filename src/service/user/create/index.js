const model = require('../../../models/index');
const { errorMsg } = require('../../../utils');

const createUser = async (payload) => {
    const isMobileExist = await model.userModel.findOne({
        user_mobile_no: payload.user_mobile_no
    });
    const isUserNameExist = await model.userModel.findOne({
        user_name: payload.user_name
    });
    const isEmailExist = await model.userModel.findOne({
        user_email: payload.user_email
    });
    if (isMobileExist) throw new Error(errorMsg.MOBILE_NUMBER_ALREADY_EXIST);

    if (isUserNameExist) throw new Error(errorMsg.USER_NAME_ALREADY_EXIST);

    if (isEmailExist) throw new Error(errorMsg.EMAIL_ALREADY_EXIST);

    if (!isMobileExist && !isUserNameExist && !isEmailExist) {
        const createUser = await model.userModel.create({ ...payload });

        return createUser;
    }
};

module.exports = { createUser };
