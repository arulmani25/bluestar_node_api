const model = require('../../../../models/index');

const saveLogoutReason = async (payload) => {
    const record = await model.logOutModel.create({ ...payload });
    return record;
};

module.exports = { saveLogoutReason };
