const model = require("../../../../models/index");

const viewTicket = async (id) => {
  const record = await model.ticketModel.findOne({ _id: id });
  return record;
};

module.exports = { viewTicket };
