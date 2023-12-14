const userModel = require("../../../models/user.model");

const getById = async (userId) => {
  const data = await userModel.findOne(
    { _id: userId },
    { password: 0, confirm_password: 0, __v: 0 }
  );
  return data;
};

module.exports = { getById };
