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

    const updateLoginTime = await userServiceController.updateUserRecord(
      data[0]._id,
      { last_login_time: Date.now() }
    );

    return res.json({
      Status: "Success",
      Message: successMsg.USER_LOGGEDIN_SUCCESSFULLY,
      Data: data,
      Code: 200,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { userLoginUsingMobile };
