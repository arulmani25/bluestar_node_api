const model = require("../../../models/index");
const { errorMsg } = require("../../../utils/message");

const createGroup = async (payload) => {
  const checkGroup = await model.mainactivityModel.findOne({
    activity_name: payload.activity_name,
  });
  if (checkGroup) {
    throw new Error(errorMsg.GROUP_ALREADY_EXIST);
  }
  if (!checkGroup) {
    const createdGroup = await model.mainactivityModel.create({ ...payload });
    return createdGroup;
  }
};

module.exports = { createGroup };
