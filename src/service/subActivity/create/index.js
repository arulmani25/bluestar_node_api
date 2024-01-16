const model = require("../../../models/index");
const { errorMsg } = require("../../../utils");

const createSubActivity = async (payload) => {
  const checkSubActivity = await model.subactivityModel.findOne({
    activity_name: payload.activity_name,
  });
  if (checkSubActivity) throw new Error(errorMsg.SUB_ACTIVITY_ALREADY_EXIST);
  const record = await model.subactivityModel.create({ ...payload });
  return record;
};

module.exports = { createSubActivity };
