const mongoose = require("mongoose");
const model = require("../../../models/index");

const updateForm = async (payload) => {
  const data = await model.submittedTemperatureLogForms.findOneAndUpdate(
    {
      titleId: mongoose.Types.ObjectId(payload.titleId),
    },
    { ...payload }
  );
  return data;
};

module.exports = { updateForm };
