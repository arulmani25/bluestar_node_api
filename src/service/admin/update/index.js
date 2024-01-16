const adminModel = require("../../../models/admin.Model");

const updateRecord = async (adminId, payload) => {
  const isExist = await adminModel.findOne({ _id: adminId });

  if (isExist) {
    const updatedRecord = await adminModel.updateOne({ ...payload });
    return updatedRecord;
  }
};

module.exports = { updateRecord };
