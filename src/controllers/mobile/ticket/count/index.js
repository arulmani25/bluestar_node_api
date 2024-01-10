const { mobileServiceController } = require("../../../../service/index");
const { jobStatus } = require("../../../../utils/enum");
const { successMsg } = require("../../../../utils/index");

const ticketRaiseCount = async (req, res, next) => {
  try {
    const payload = req.body;

    const record = await mobileServiceController.ticket.ticketCount();

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

module.exports = { ticketRaiseCount };
