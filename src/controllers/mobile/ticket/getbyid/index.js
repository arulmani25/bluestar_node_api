const { mobileServiceController } = require("../../../../service/index");
const { successMsg } = require("../../../../utils");

const ticketView = async (req, res, next) => {
  try {
    const record = await mobileServiceController.ticket.viewTicket(
      req.params.id
    );
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
