const model = require('../../../../models/index');
const { errorMsg } = require('../../../../utils');

const createAdminMobile = async (payload) => {
    const checkUserExist = await model.adminModel.findOne({
        mobile_no: payload.mobile_no
    });
    if (checkUserExist) throw new Error(errorMsg.USER_ALREADY_EXIST);

    const createRecord = await model.adminModel.create({
        firstname: payload.firstname,
        lastname: payload.lastname,
        status: payload.status,
        email_id: payload.email_id,
        mobile_no: payload.mobile_no,
        user_name: payload.user_name,
        password: payload.password,
        confirm_password: payload.confirm_password,
        access_location: payload.access_location,
        last_login: new Date()
    });
    return createRecord;
};

module.exports = { createAdminMobile };
