const model = require("../../../models/index");

const getSubmittedFormById = async (id) => {
  const data = await model.submittedTemperatureLogForms.findOne(
    {
      titleId: id,
    }
  );
  return data;
};

module.exports = { getSubmittedFormById };
