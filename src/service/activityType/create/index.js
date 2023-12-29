const model = require("../../../models/index");
const { errorMsg } = require("../../../utils");

const createActivityType = async (payload) => {
  const isExist = await model.activityType.findOne({
    activity_name: payload.activity_name,
  });

  if (isExist) throw new Error(errorMsg.ACTIVITY_TYPE_ALREADY_EXIST);

  const record = await model.activityType.create({ ...payload });

  return record;
};

module.exports = { createActivityType };
