const { temperatureFormServiceController } = require("../../../service/index");
const { successMsg } = require("../../../utils");

const tempLogFieldTime = async (req, res, next) => {
  try {
    const record =
      await temperatureFormServiceController.listTemeperaturelogsField(
        req.query
      );
    const title = [];

    for (const iterator of record.logs) {
      delete iterator.location;
      delete iterator.TR_NO;
      delete iterator.parameter;
      delete iterator.range;
      title.push({ ...iterator });
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

module.exports = { tempLogFieldTime };
