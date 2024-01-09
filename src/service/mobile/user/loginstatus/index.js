const model = require("../../../../models/index");
const { errorMsg } = require("../../../../utils");

const userMobileLoginStatus = async (payload) => {
  function endOfDay(date) {
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      23,
      59,
      59,
      999
    );
  }

  const checkAttd = await model.attendanceModel.find({
    att_date: new Date(payload.att_date),
    user_mobile_no: payload.user_mobile_no,
  });

  if (!checkAttd) return checkAttd;

  const isExist = await model.attendanceModel.aggregate([
    {
      $match: {
        att_date: new Date(payload.att_date),
        user_mobile_no: payload.user_mobile_no,
      },
    },
    {
      $sort: {
        createdAt: -1,
      },
    },
    {
      $project: {
        att_status: 1,
      },
    },
    {
      $limit: 1,
    },
  ]);

  return isExist;
};

module.exports = { userMobileLoginStatus };
