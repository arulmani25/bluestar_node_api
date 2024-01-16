const model = require("../../../models/index");
const { errorMsg } = require("../../../utils");

const updateCheckListRecord = async (id, paylaod) => {
  const isExist = await model.checkListModel.findOne({
    _id: id,
    delete_status: false,
  });

  if (!isExist) throw new Error(errorMsg.RECORD_NOT_FOUND_TO_UPDATE);

  const record = await model.checkListModel.findOneAndUpdate(
    { _id: isExist._id },
    { ...paylaod }
  );
  return record;
};

module.exports = { updateCheckListRecord };
