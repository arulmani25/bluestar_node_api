const { temperatureFormServiceController } = require("../../../service/index");
const { errorMsg, successMsg } = require("../../../utils/index");

const updateForm = async (req, res, next) => {
  try {
    const payload = req.body;

    //** service call */

    const spare = await temperatureFormServiceController.updateForm(payload);

    return res.json({
      Status: "Success",
      Message: successMsg.RECORD_UPDATED_SUCCESSFULLY,
      Data: [],
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = { updateForm };
