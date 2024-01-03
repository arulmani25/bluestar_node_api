const adminModel = require("../models/admin.Model");
const mainactivityModel = require("./mainActivity.model");
const subactivityModel = require("./subActivity.model");
const userModel = require("../models/user.Model");
const checkListModel = require("./checklist.model");
const activityType = require("./activityType.model");
const role = require("./role.model");
const attendanceModel = require("./attendance.model");
const activitiesModel = require("./activities.model");
const equipmentsModel = require("./equipment.model");

module.exports = {
  adminModel,
  mainactivityModel,
  subactivityModel,
  userModel,
  checkListModel,
  activityType,
  role,
  attendanceModel,
  activitiesModel,
  equipmentsModel,
};
