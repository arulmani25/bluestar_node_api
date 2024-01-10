const model = require("../../../../models/index");
const { errorMsg } = require("../../../../utils");

const updateTicketStatusRecord = async (id, payload) => {
  const isExist = await model.ticketModel.findOne({
    _id: id,
  });
  if (!isExist) throw new Error(errorMsg.RECORD_NOT_FOUND_TO_UPDATE);
  if (isExist) {
    const updatedRecord = await model.ticketModel.updateOne(
      { _id: isExist._id },
      {
        $set: { status: payload.status },
      }
    );
    return updatedRecord;
  }
};

module.exports = { updateTicketStatusRecord };
