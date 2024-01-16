const model = require("../../../models/index");
const { errorMsg } = require("../../../utils");

const getCheckListById = async (id) => {
  const isExist = await model.checkListModel.findOne({
    _id: id,
    delete_status: false,
  });
  if (!isExist) throw new Error(errorMsg.CHECK_LIST_NOT_FOUND);
  const record = await model.checkListModel.findOne({ _id: isExist._id });
  return record;
};

module.exports = { getCheckListById };
