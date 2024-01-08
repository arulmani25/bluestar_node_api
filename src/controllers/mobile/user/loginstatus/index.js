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
      Message: successMsg.LOGIN_STATUS_RETRIVED,
      Data: data,
      Code: 200,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { userLoginStatusMobile };
