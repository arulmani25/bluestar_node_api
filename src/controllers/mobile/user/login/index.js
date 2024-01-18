const {
  mobileServiceController,
  userServiceController,
} = require("../../../../service/index");
const {
  successMsg,
  errorMsg,
  attd_status,
} = require("../../../../utils/index");

const userLoginUsingMobile = async (req, res, next) => {
  try {
    const payload = req.body;

    const data = await mobileServiceController.user.userMobileLogin(payload);

    return res.json({
      Status: "Success",
      Message: successMsg.USER_LOGGEDIN_SUCCESSFULLY,
      Data: data,
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { userLoginUsingMobile };
