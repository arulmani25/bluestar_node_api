const model = require("../../../models/index");

const createActivity = async (payload) => {
  const checkActivityExist = await model.activitiesModel.findOne({
    activity_name: payload.activity_name,
  });
  if (!checkActivityExist) {
    const createRecord = await model.activitiesModel.create({
      activity_name: payload.activity_name,
    });
    return createRecord;
  }
};

module.exports = { createActivity };
