const model = require("../../../../models/index");

const viewTicket = async (id) => {
  const record = await model.ticketModel.findOne({ ticket_no: id });
  return record;
};

module.exports = { viewTicket };
