const { createRole } = require("./create");
const { roleTypeList } = require("./list");
const { deleteRole } = require("./delete");
const { editRole } = require("./edit");

module.exports = { createRole, roleTypeList, deleteRole, editRole };
