const userModel = require('../../../models/user.Model');

const deleteUserRecord = async (id) => {
    const record = await userModel.findOneAndDelete({ _id: id });
    return record;
};

module.exports = { deleteUserRecord };
