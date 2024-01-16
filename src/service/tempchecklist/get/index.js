const model = require("../../../models/index");
const { errorMsg } = require("../../../utils");

const getTempCheckListById = async (id) => {
  const isExist = await model.tempCheckListModel.findOne({
    equipment_tag: id,
  });
  if (!isExist) throw new Error(errorMsg.CHECK_LIST_NOT_FOUND);
  const record = await model.tempCheckListModel.findOne({
    equipment_tag: isExist.equipment_tag,
  });
  return record;
};

module.exports = { getTempCheckListById };
