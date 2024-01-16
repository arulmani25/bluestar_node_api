const model = require("../../../models/index");
const { errorMsg } = require("../../../utils");

const createUserType = async (payload) => {
  const isExist = await model.userType.findOne({
    activity_name: payload.activity_name,
  });

  if (isExist) throw new Error(errorMsg.USER_TYPE_ALREADY_EXIST);

  const record = await model.userType.create({ ...payload });

  return record;
};

module.exports = { createUserType };
