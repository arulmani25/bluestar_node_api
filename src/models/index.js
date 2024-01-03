const adminModel = require("../models/admin.Model");
const mainactivityModel = require("./mainActivity.model");
const subactivityModel = require("./subActivity.model");
const userModel = require("../models/user.Model");
const checkListModel = require("./checklist.model");
const activityType = require("./activityType.model");
const role = require("./role.model");

module.exports = {
  adminModel,
  mainactivityModel,
  subactivityModel,
  userModel,
  checkListModel,
  activityType,
  role,
};
