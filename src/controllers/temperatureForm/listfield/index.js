const { temperatureFormServiceController } = require("../../../service/index");
const { successMsg } = require("../../../utils");

const tempLogFields = async (req, res, next) => {
  try {
    const record =
      await temperatureFormServiceController.listTemeperaturelogsField(
        req.query
      );
    const title = [];
    if (
      record.titleName ===
        "Daily Chiller-1 Log Book - Centrifugal Chillers - 19XRA6/7" ||
      record.titleName ===
        "Daily Chiller-2 Log Book - Centrifugal Chillers - 19XRA6/7" ||
      record.titleName ===
        "Daily Chiller-3 Log Book - Centrifugal Chillers - 19XRA6/7" ||
      record.titleName ===
        "Daily Chiller-4 Log Book - Centrifugal Chillers - 19XRA6/7"
    ) {
      for (const iterator of record.logs) {
        title.push({
          location: iterator.location ? iterator.location : "",
          range: iterator.range ? iterator.range : "",
        });
      }
    } else if (
      record.titleName === "PTB TEMPERATURE MONITORING LOG-DOM" ||
      record.titleName === "PTB TEMPERATURE MONITORING LOG-INTL"
    ) {
      for (const iterator of record.logs) {
        title.push({
          location: iterator.location,
        });
      }
    } else if (
      record.titleName === "Domestic Telecom Room Temperature" ||
      record.titleName === "International Telecom Room Temperature"
    ) {
      for (const iterator of record.logs) {
        title.push({
          location: iterator.location,
          TR_NO: iterator.TR_NO,
          remark: iterator.remark,
        });
      }
    } else if (
      record.titleName === "CWP, CT, ATCS, CD, VD & PET Daily Report"
    ) {
      for (const iterator of record.logs) {
        title.push({
          location: iterator.location,
        });
      }
    }

    return res.json({
      Status: "Success",
      Message: successMsg.DATA_RETRIVED_SUCCESSFULLY,
      Data: title,
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { tempLogFields };
