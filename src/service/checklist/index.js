const { createList } = require("./create");
const { getCheckList } = require("./getlist");
const { getCheckListById } = require("./getbyid");
const { getActivityDropDown } = require("./activitydropdown");
const { getSubActivityDropDown } = require("./subActivityDropdown");
const { deleteCheckList } = require("./delete");
const { updateCheckListRecord } = require("./update");

module.exports = {
  createList,
  getCheckList,
  getCheckListById,
  getActivityDropDown,
  getSubActivityDropDown,
  deleteCheckList,
  updateCheckListRecord,
};
