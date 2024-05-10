const { reportsServiceController } = require("../../../service/index");
const { successMsg } = require("../../../utils");

const checklistReportList = async (req, res, next) => {
  try {
    const record = await reportsServiceController.checklistReportList(
      req.query,
      req.body.month
    );

    return res.json({
      Status: "Success",
      Message: successMsg.REPORTS_VIEWED_SUCCESSFULLY,
      Data: record,
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { checklistReportList };
