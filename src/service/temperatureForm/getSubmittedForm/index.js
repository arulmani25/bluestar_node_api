const model = require("../../../models/index");

const getSubmittedFormById = async (id) => {
  const data = await model.submittedTemperatureLogForms.find({
    titleId: id,
  });
  return data;
};

module.exports = { getSubmittedFormById };
