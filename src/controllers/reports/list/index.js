const { reportsServiceController } = require("../../../service/index");
const { successMsg } = require("../../../utils");
const { encryptText } = require("../../../utils/encrypt");

const reportList = async (req, res, next) => {
  try {
    const record = await reportsServiceController.reportList(req.query);

    // record[0].data.map((el) => {
    //   el.equipment_tag_name = encryptText(el.equipment_tag_name);
    // });
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
