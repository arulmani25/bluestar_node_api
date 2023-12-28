const model = require("../../../models/index");
const { errorMsg } = require("../../../utils");
const getRecordById = async (id) => {
  const isExist = await model.subactivityModel.findOne({
    _id: id,
    delete_status: false,
  });
  if (!isExist) throw new Error(errorMsg.SUB_ACTIVITY_NOT_FOUND);

  const record = await model.subactivityModel.findOne({
    _id: isExist._id,
    delete_status: false,
  });
  return record;
};

module.exports = { getRecordById };
