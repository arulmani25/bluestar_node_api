const { temperatureFormServiceController } = require("../../../service/index");
const { successMsg } = require("../../../utils");

const getForm = async (req, res, next) => {
  try {
    const record = await temperatureFormServiceController.getFormById(
      req.params.id
    );

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

module.exports = { getForm };
