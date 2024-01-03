const userModel = require("../../../models/user.Model");

const updateUserRecord = async (id, payload) => {
  const data = await userModel.findOneAndUpdate({ _id: id }, { ...payload });
  return data;
};

module.exports = { updateUserRecord };
