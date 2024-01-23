const { mobileServiceController } = require("../../../../service/index");
const { errorMsg, successMsg } = require("../../../../utils");
const { encryptText } = require("../../../../utils/encrypt");

const getReportById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const record = await mobileServiceController.report.getReportById(id);

    record.equipment_tag_name = encryptText(record.equipment_tag_name);

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

module.exports = { getReportById };
