const model = require("../../../models/index");

const getFormById = async (id) => {
  const data = await model.temperaturelogForms.findOne({ _id: id });
  return data;
};

module.exports = { getFormById };
