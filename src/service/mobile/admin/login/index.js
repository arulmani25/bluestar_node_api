const model = require('../../../../models/index');
const { errorMsg } = require('../../../../utils');

const adminMobileLogin = async (payload) => {
    const isExist = await model.adminModel.findOne({
        mobile_no: payload.mobile_no
    });

    if (!isExist) throw new Error(errorMsg.USER_NOT_FOUND);

    return isExist;
};

module.exports = { adminMobileLogin };
