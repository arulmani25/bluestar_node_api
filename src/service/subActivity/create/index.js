const model = require("../../../models/index");

const createSubActivity = async (payload) => {
  const record = await model.subactivityModel.create({ ...payload });
  return record;
};

module.exports = { createSubActivity };
