const model = require("../../../models/index");
const { errorMsg } = require("../../../utils");

const updateSubLocation = async (id, paylaod) => {
  const isExist = await model.subLocationModel.findOne({
    _id: id,
    is_active: true,
  });

  if (!isExist) throw new Error(errorMsg.RECORD_NOT_FOUND_TO_UPDATE);

  const record = await model.subLocationModel.findOneAndUpdate(
    { _id: isExist._id },
    { ...paylaod }
  );
  return record;
};

module.exports = { updateSubLocation };
