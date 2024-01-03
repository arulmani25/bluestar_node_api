const model = require("../../../../models/index");

const getById = async (payload) => {
  const data = await model.userModel.findOne(
    { user_mobile_no: Number(payload) },
    { user_password: 0 }
  );
  return data;
};

module.exports = { getById };
