const adminModel = require("../../../models/admin.model");

const createAdmin = async (payload) => {
  const checkUserExist = await adminModel.findOne({
    email_id: payload.email_id,
  });
  if (!checkUserExist) {
    const createRecord = await adminModel.create({
      firstname: payload.firstname,
      lastname: payload.lastname,
      status: payload.status,
      email_id: payload.email_id,
      mobile_no: payload.mobile_no,
      user_name: payload.user_name,
      password: payload.password,
      confirm_password: payload.confirm_password,
      access_location: payload.access_location,
      delete_status: payload.delete_status,
      last_login: new Date(),
    });
    return createRecord;
  } else {
    throw new Error("User Already Exist");
  }
};

module.exports = { createAdmin };
