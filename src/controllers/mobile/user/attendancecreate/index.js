const { mobileServiceController } = require("../../../../service/index");
const { successMsg } = require("../../../../utils");

const createAttendance = async (req, res, next) => {
  try {
    const payload = req.body;

    const record = await mobileServiceController.user.createUserAttendance(
      payload
    );

    return res.json({
      Status: "Success",
      Message: successMsg.USER_CHECKEDIN_SUCCESSFULLY,
      Data: [],
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createAttendance };
