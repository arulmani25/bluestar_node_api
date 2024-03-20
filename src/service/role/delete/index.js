const model = require("../../../models/index");

const deleteRole = async (id) => {
  const data = await model.role.findOneAndDelete({ _id: id });
  return data;
};

module.exports = { deleteRole };
