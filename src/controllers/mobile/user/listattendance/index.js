const { mobileServiceController } = require("../../../../service/index");

const { errorMsg, successMsg } = require("../../../../utils");

const userAttendanceList = async (req, res, next) => {
  try {
    //** service call */

    const userAttList = await mobileServiceController.user.attendanceList(
      req.query
    );

    return res.json({
      Status: "Success",
      Message: successMsg.DATA_RETRIVED_SUCCESSFULLY,
      Data: userAttList,
      Code: 200,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { userAttendanceList };
