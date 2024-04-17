const model = require("../../../../models/index");

const getUsedSpare = async () => {
  const spare = await model.ticketModel.find({}, { spare: 1, ticket_no: 1 });
  return spare;
};
module.exports = { getUsedSpare };
