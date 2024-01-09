const { mobileServiceController } = require("../../../../service/index");
const { successMsg, attd_status } = require("../../../../utils/index");

const userLoginStatusMobile = async (req, res, next) => {
  try {
    const payload = req.body;

    const record = [];

    const data = await mobileServiceController.user.userMobileLoginStatus(
      payload
    );

    if (!data.length) {
      record.push({ att_status: attd_status.Absent });
    } else {
      record.push({ att_status: attd_status.Present });
    }

    return res.json({
      Status: "Success",
      Message: successMsg.LOGIN_STATUS_RETRIVED,
      Data: record,
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { userLoginStatusMobile };
