const { default: mongoose } = require("mongoose");
const model = require("../../../models/index");
const moment = require("moment");

const getSubmittedFormById = async (query) => {
  let fromDate;
  let toDate;
  if (query.fromDate && query.toDate) {
    fromDate = moment(query.fromDate);
    toDate = moment(query.toDate);
  } else {
    fromDate = moment();
    toDate = moment();
  }
  const startDate = fromDate.startOf("day").toDate();
  const endDate = toDate.endOf("day").toDate();
  const data = await model.submittedTemperatureLogForms.find({
    titleId: query.id,
    createdAt: { $gte: startDate, $lte: endDate },
  });
  return data;
};

module.exports = { getSubmittedFormById };
