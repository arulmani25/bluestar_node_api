const { createRole } = require("./create");
const { roleTypeList } = require("./list");
const { deleteRole } = require("./delete");
const { editRole } = require("./edit");
const { getRole } = require("./getbyid");

module.exports = { createRole, roleTypeList, deleteRole, editRole, getRole };
