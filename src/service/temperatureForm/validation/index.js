const model = require("../../../models/index");
const { errorMsg } = require("../../../utils");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const moment = require("moment");

const checkSubmission = async (payload) => {
  const isExist = await model.submittedTemperatureLogForms.findOne({
    titleId: new ObjectId(payload.titleId),
    time: payload.time,
    createdAt: { $gte: new Date(moment().startOf("day")) },
  });
  return isExist;
};

module.exports = { checkSubmission };
