const model = require("../../../models/index");

const submitTempLogForm = async (payload) => {
  const data = await model.submittedTemperatureLogForms.create({
    ...payload,
  });
  return data;
};

module.exports = { submitTempLogForm };
