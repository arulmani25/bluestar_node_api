const userModel = require("../../../models/user.model");

const updateUserRecord = async (id, payload) => {
  const data = await userModel.findOneAndUpdate({ _id: id }, { ...payload });
  return data;
};

module.exports = { updateUserRecord };
