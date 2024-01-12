const model = require("../../../../models/index");
const { errorMsg } = require("../../../../utils");

const updateLogoutTime = async (payload) => {
  const checkUserAtt = await model.attendanceModel.aggregate([
    {
      $match: {
        user_mobile_no: payload.user_mobile_no,
        att_date: new Date(payload.att_date),
      },
    },
    {
      $sort: {
        createdAt: -1,
      },
    },
    {
      $limit: 1,
    },
  ]);
  if (checkUserAtt.length === 0)
    throw new Error(errorMsg.CHECK_USER_MOBILE_NUMBER_AND_ATT_DATE);

  if (checkUserAtt[0].att_status === "checkIn") {
    const record = await model.attendanceModel.create({
      att_reason: payload.att_reason,
      logout_address: payload.logout_address,
      logout_lat: payload.logout_lat,
      logout_long: payload.logout_long,
      user_mobile_no: checkUserAtt[0].user_mobile_no,
      att_status: "checkOut",
      att_date: new Date(checkUserAtt[0].att_date),
    });
    return record;
  }
};

module.exports = { updateLogoutTime };
