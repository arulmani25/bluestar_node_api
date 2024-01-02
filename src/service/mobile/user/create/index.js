const model = require("../../../../models/index");
const { errorMsg } = require("../../../../utils");

const createMobileUser = async (payload) => {
  const isExist = await model.userModel.findOne({
    user_mobile_no: payload.user_mobile_no,
  });

  if (isExist) throw new Error(errorMsg.USER_ALREADY_EXIST);
  const createUser = await model.userModel.create({ ...payload });
  return createUser;
};

module.exports = { createMobileUser };
