const { mobileServiceController } = require("../../../../service/index");
const { successMsg } = require("../../../../utils");

const updateLogoutTime = async (req, res, next) => {
  try {
    const payload = req.body;

    const record = await mobileServiceController.user.updateLogoutTime(payload);

    return res.json({
      Status: "Success",
      Message: successMsg.LOGGED_OUT_SUCCESSFULLY,
      Data: [],
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { updateLogoutTime };
