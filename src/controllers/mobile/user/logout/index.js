const { mobileServiceController } = require("../../../../service/index");
const { successMsg } = require("../../../../utils/index");

const userLogout = async (req, res, next) => {
  try {
    const payload = req.body;
    const data = await mobileServiceController.user.saveLogoutReason(payload);
    return res.json({
      Status: "Success",
      Message: successMsg.LOGGED_OUT_SUCCESSFULLY,
      Data: [],
      Code: 200,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { userLogout };
