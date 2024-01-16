const { createAdmin } = require("./create");
const { adminLogin } = require("./login");
const { adminList } = require("./getlist");
const { getById } = require("./getbyid");
const { updateRecord } = require("./update");
const { deleteAdmin } = require("./delete");

module.exports = {
  createAdmin,
  adminLogin,
  adminList,
  getById,
  updateRecord,
  deleteAdmin,
};
