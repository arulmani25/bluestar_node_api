const model = require("../../../models/index");

const getMainLocationById = async (id) => {
  const record = await model.mainLocationModel.findOne({
    _id: id,
    delete_status: false,
  });
  return record;
};

module.exports = { getMainLocationById };
