const model = require("../../../../models/index");
const { errorMsg } = require("../../../../utils");
const { jobStatus } = require("../../../../utils/enum");

const requestTicketMobile = async (payload) => {
  payload.status = jobStatus.Open;
  const createRecord = await model.ticketModel.create({
    ...payload,
  });
  return createRecord;
};

module.exports = { requestTicketMobile };
