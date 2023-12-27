const model = require("../../../models/index");
const { errorMsg } = require("../../../utils");

const updateRecord = async (id, paylaod) => {
  const isExist = await model.mainactivityModel.findOne({
    _id: id,
    delete_status: false,
  });

  if (!isExist) throw new Error(errorMsg.GROUP_NOT_FOUND);

  const record = await model.mainactivityModel.findOneAndUpdate(
    { _id: isExist._id },
    { ...paylaod }
  );
  return record;
};

module.exports = { updateRecord };
