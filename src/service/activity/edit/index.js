const model = require("../../../models/index");

const editActivity = async (id, payload) => {
  const data = await model.activitiesModel.findOneAndUpdate(
    { _id: id },
    { $set: { activity_name: payload.activity_name } }
  );
  return data;
};

module.exports = { editActivity };
