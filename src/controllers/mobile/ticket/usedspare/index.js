const { listIndexes } = require("../../../../models/admin.Model");
const { mobileServiceController } = require("../../../../service/index");

const { errorMsg, successMsg } = require("../../../../utils");

const getUsedSpare = async (req, res, next) => {
  try {
    //** service call */
    const spareValue = [];
    const list = await mobileServiceController.ticket.getUsedSpare(req.query);
    for (const iterator of list) {
      if (iterator.spare.length > 0) {
        for (const str of iterator.spare) {
          spareValue.push(str);
        }
      }
    }

    return res.json({
      Status: "Success",
      Message: successMsg.DATA_RETRIVED_SUCCESSFULLY,
      Data: spareValue,
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getUsedSpare };
