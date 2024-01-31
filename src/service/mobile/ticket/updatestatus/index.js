const model = require("../../../../models/index");
const { errorMsg } = require("../../../../utils");

const updateTicketStatusRecord = async (id, payload) => {
  const isExist = await model.ticketModel.findOne({
    ticket_no: id,
  });
  if (!isExist) throw new Error(errorMsg.RECORD_NOT_FOUND_TO_UPDATE);
  if (isExist) {
    const updatedRecord = await model.ticketModel.updateOne(
      { ticket_no: isExist.ticket_no },
      {
        $set: {
          status: payload.status,
          fault_description: payload.fault_description,
        },
      }
    );
    return updatedRecord;
  }
};

module.exports = { updateTicketStatusRecord };
