const model = require("../../../../models/index");

const createUserAttendance = async (payload) => {
  const data = await model.attendanceModel.create({ ...payload });
  return data;
};

module.exports = { createUserAttendance };
