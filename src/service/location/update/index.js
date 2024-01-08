const model = require("../../../models/index");
const { errorMsg } = require("../../../utils");

const updateLocation = async (id, paylaod) => {
  const isExist = await model.mainLocationModel.findOne({
    _id: id,
    is_active: true,
  });

  if (!isExist) throw new Error(errorMsg.RECORD_NOT_FOUND_TO_UPDATE);

  const record = await model.mainLocationModel.findOneAndUpdate(
    { _id: isExist._id },
    { ...paylaod }
  );
  return record;
};

module.exports = { updateLocation };
