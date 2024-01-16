const { createGroup } = require("./create");
const { groupList } = require("./getlist");
const { getRecordById } = require("./getbyid");
const { deleteGroup } = require("./delete");
const { updateRecord } = require("./update");

module.exports = {
  createGroup,
  groupList,
  getRecordById,
  deleteGroup,
  updateRecord,
};
