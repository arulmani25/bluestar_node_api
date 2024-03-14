const model = require("../../../models/index");

const submitTempLogForm = async (payload) => {
  let data;
  const isExist = await model.submittedTemperatureLogForms.findOne({
    titleId: payload.titleId,
  });
  if (!isExist) {
    data = await model.submittedTemperatureLogForms.create({ ...payload });
  } else {
    const key = String(Object.keys(payload.logs[0])[1]);
    let query = `logs.$[elem].${key}`;
    const checkLocationExist = await model.submittedTemperatureLogForms.findOne(
      { titleId: payload.titleId, "logs.location": payload.logs[0].location }
    );
    if (checkLocationExist) {
      data = await model.submittedTemperatureLogForms.findOneAndUpdate(
        { titleId: payload.titleId, "logs.location": payload.logs[0].location },
        {
          $set: {
            [query]: payload.logs[0][key],
          },
        },
        {
          arrayFilters: [{ "elem.location": payload.logs[0].location }],
          new: true,
        }
      );
    } else {
      data = await model.submittedTemperatureLogForms.findOneAndUpdate(
        { titleId: payload.titleId },
        {
          $push: {
            logs: payload.logs[0],
          },
        }
      );
    }
  }

  return data;
};

module.exports = { submitTempLogForm };
