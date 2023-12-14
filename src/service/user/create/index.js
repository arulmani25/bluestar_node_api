const userModel = require("../../../models/user.model");

const createUser = async (payload) => {
  const userCheck = await userModel.findOne({ user_email: payload.user_email });
  if (!userCheck) {
    const data = await userModel.create({ ...payload });
    return data;
  }
};

module.exports = { createUser };
