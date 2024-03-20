const model = require("../../../models/index");

const editRole = async (id, payload) => {
  const data = await model.role.findOneAndUpdate({ _id: id }, { ...payload });
  return data;
};

module.exports = { editRole };
