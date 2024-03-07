const { temperatureFormServiceController } = require("../../../service/index");
const { successMsg } = require("../../../utils");

const getSubmittedForm = async (req, res, next) => {
  try {
    const record = await temperatureFormServiceController.getSubmittedFormById(
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

module.exports = { getSubmittedForm };
