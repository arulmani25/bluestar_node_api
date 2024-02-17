const model = require("../../../../models/index");

const viewTicket = async (id) => {
  const record = await model.ticketModel.find(
    { ticket_no: id },
    {},
    { sort: { createdAt: -1 } }
  );
  return record;
};

module.exports = { viewTicket };
