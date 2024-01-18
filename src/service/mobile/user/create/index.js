const model = require("../../../../models/index");
const { errorMsg } = require("../../../../utils");

const createMobileUser = async (payload) => {
  const isMobileExist = await model.userModel.findOne({
    user_mobile_no: payload.user_mobile_no,
  });
  const isUserNameExist = await model.userModel.findOne({
    user_name: payload.user_name,
  });
  if (isMobileExist) throw new Error(errorMsg.MOBILE_NUMBER_ALREADY_EXIST);

  if (isUserNameExist) throw new Error(errorMsg.USER_NAME_ALREADY_EXIST);

  if (!isMobileExist && !isUserNameExist) {
    const createUser = await model.userModel.create({ ...payload });

    return createUser;
  }
};

module.exports = { createMobileUser };
