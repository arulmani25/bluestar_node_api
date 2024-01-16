const adminModel = require("../../../models/admin.Model");

const adminLogin = async (payload) => {
  const data = await adminModel.findOne({
    email_id: payload.email_id,
    password: payload.password,
  });

  return data;
};

module.exports = { adminLogin };
