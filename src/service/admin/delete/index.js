const adminModel = require("../../../models/admin.model");

const deleteAdmin = async (id, payload) => {
  const data = await adminModel.findOneAndDelete({ _id: id }, { ...payload });
  return data;
};

module.exports = { deleteAdmin };
