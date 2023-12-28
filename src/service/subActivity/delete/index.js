const model = require("../../../models/index");
const { errorMsg } = require("../../../utils");

const deleteRecord = async (id) => {
  const isExist = await model.subactivityModel.findOne({
    _id: id,
    delete_status: false,
  });
  if (!isExist) throw new Error(errorMsg.RECORD_NOT_FOUND_TO_DELETE);
  const record = await model.subactivityModel.findOneAndUpdate(
    { _id: id },
    { $set: { delete_status: true } }
  );
  return record;
};

module.exports = { deleteRecord };
