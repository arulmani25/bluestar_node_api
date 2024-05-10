const { temperatureFormServiceController } = require("../../../service/index");
const { errorMsg, successMsg } = require("../../../utils");

const checkSubmisson = async (req, res, next) => {
  try {
    const record = await temperatureFormServiceController.checkSubmission(
      req.body
    );
    if (record) {
      return res.json({
        Status: "Success",
        Message: true,
        Data: [],
        Code: 200,
      });
    } else {
      return res.json({
        Status: "Success",
        Message: false,
        Data: [],
        Code: 200,
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { checkSubmisson };
