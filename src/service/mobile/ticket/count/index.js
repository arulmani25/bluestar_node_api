const model = require("../../../../models/index");

const ticketCount = async () => {
  const record = await model.ticketModel.find({})
  return record;
};
module.exports = { ticketCount };
