const { listIndexes } = require("../../../../models/admin.Model");
const { mobileServiceController } = require("../../../../service/index");

const { errorMsg, successMsg } = require("../../../../utils");

const getUsedSpare = async (req, res, next) => {
  try {
    //** service call */

    const list = await mobileServiceController.ticket.getUsedSpare();

    return res.json({
      Status: "Success",
      Message: successMsg.DATA_RETRIVED_SUCCESSFULLY,
      Data: list,
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getUsedSpare };
