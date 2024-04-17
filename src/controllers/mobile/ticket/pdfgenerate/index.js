const { listIndexes } = require("../../../../models/admin.Model");
const { mobileServiceController } = require("../../../../service/index");

const { errorMsg, successMsg } = require("../../../../utils");

const generateTicketPdf = async (req, res, next) => {
  try {
    //** service call */

    const list = await mobileServiceController.ticket.ticketPdf(req.body.ticket_no);

    return res.json({
      Status: "Success",
      Message: successMsg.DATA_RETRIVED_SUCCESSFULLY,
      Data: [list],
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { generateTicketPdf };
