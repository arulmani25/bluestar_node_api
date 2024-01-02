const { mobileServiceController } = require("../../../../service/index");
const { successMsg } = require("../../../../utils/index");

const userLoginStatusMobile = async (req, res, next) => {
  try {
    const payload = req.body;

    const data = await mobileServiceController.user.userMobileLoginStatus(
      payload
    );

    return res.json({
      Status: "Success",
      Message: successMsg.USER_LOGGEDIN_SUCCESSFULLY,
      Data: data.att_status,
      Code: 200,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { userLoginStatusMobile };
