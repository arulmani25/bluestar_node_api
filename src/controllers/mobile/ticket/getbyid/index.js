const { mobileServiceController } = require("../../../../service/index");
const { successMsg } = require("../../../../utils");
const { encryptText } = require("../../../../utils/encrypt");

const ticketView = async (req, res, next) => {
  try {
    const record = await mobileServiceController.ticket.viewTicket(
      req.query.ticket_no
    );

    record.equipment_no = encryptText(record.equipment_no);
    record.equipment = encryptText(record.equipment);

    return res.json({
      Status: "Success",
      Message: successMsg.DATA_RETRIVED_SUCCESSFULLY,
      Data: record,
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { ticketView };
