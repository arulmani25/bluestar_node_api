const adminModel = require('../../../models/admin.Model');

const getById = async (adminId) => {
    const data = await adminModel.findOne({ _id: adminId }, { password: 0, confirm_password: 0, __v: 0 });
    return data;
};

module.exports = { getById };
