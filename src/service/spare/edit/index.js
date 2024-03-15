const model = require("../../../models/index");

const editSpare = async (id, payload) => {
  const data = await model.spareModel.findOneAndUpdate(
    { _id: id },
    { $set: { spare_name: payload.spare_name } }
  );
  return data;
};

module.exports = { editSpare };
