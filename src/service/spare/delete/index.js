const model = require("../../../models/index");

const deleteSpare = async (id) => {
  const data = await model.spareModel.findOneAndDelete({ _id: id });
  return data;
};

module.exports = { deleteSpare };
