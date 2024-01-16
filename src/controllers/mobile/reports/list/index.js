const { mobileServiceController } = require("../../../../service/index");
const { successMsg } = require("../../../../utils");

const reportList = async (req, res,next) => {
  try {
    const record = await mobileServiceController.report.reportList(req.query);

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

module.exports = { reportList };
