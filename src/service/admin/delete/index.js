const adminModel = require("../../../models/admin.Model");

const deleteAdmin = async (id, payload) => {
  const data = await adminModel.findOneAndDelete({ _id: id }, { ...payload });
  return data;
};

module.exports = { deleteAdmin };
