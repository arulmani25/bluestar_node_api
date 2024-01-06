const model = require("../../../models/index");

const getSubLocationById = async (id) => {
  const record = await model.subLocationModel.findOne({
    _id: id,
    delete_status: false,
  });
  return record;
};

module.exports = { getSubLocationById };
