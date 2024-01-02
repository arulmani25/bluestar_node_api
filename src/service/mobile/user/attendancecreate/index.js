const { default: mongoose } = require("mongoose");
const model = require("../../../../models/index");
const { errorMsg } = require("../../../../utils");
const ObjectId = mongoose.Types.ObjectId;

const createUserAttendance = async (payload) => {
  const data = await model.userModel.findOneAndUpdate(
    {
      _id: new ObjectId(payload._id),
      user_mobile_no: payload.user_mobile_no,
      delete_status: false,
    },
    { ...payload }
  );
  return data;
};

module.exports = { createUserAttendance };
