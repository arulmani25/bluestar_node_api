const model = require("../../../../models/index");

const submitList = async (payload) => {
  const record = await model.submitchecklistModel.create({ ...payload });
  return record;
};

module.exports = { submitList };
