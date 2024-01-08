const model = require("../../../models/index");

const getSubLocationById = async (id) => {
  const record = await model.subLocationModel.findOne({
    _id: id,
    is_active: true,
  });
  return record;
};

module.exports = { getSubLocationById };
