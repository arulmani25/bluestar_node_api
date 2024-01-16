const model = require("../../../models/index");

const getMainLocationById = async (id) => {
  const record = await model.mainLocationModel.findOne({
    _id: id,
    is_active: true,
  });
  return record;
};

module.exports = { getMainLocationById };
