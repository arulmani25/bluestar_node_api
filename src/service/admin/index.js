const { createAdmin } = require("./create");
const { adminLogin } = require("./login");
const { adminList } = require("./getlist");
const { getById } = require("./getbyid");

module.exports = { createAdmin, adminLogin, adminList, getById };
