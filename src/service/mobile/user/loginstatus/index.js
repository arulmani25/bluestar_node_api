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
  const endDate = new Date(payload.att_date);
  const isExist = await model.userModel.findOne({
    last_login_time: { $lte: endOfDay(endDate) },
    user_mobile_no: payload.user_mobile_no,
    delete_status: false,
  });

  return isExist;
};

module.exports = { userMobileLoginStatus };
