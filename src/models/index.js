const adminModel = require("../models/admin.Model");
const mainactivityModel = require("./mainActivity.model");
const subactivityModel = require("./subActivity.model");
const userModel = require("../models/user.Model");
const checkListModel = require("./checklist.model");
const userType = require("./userType.model");
const role = require("./role.model");
const attendanceModel = require("./attendance.model");
const activitiesModel = require("./activities.model");
const equipmentsModel = require("./equipment.model");
const tempCheckListModel = require("./tempchecklist.model");
const jobManagementModel = require("./jobManagement.model");
const logoutReasonListModel = require("./logoutreason.model");

module.exports = {
  adminModel,
  mainactivityModel,
  subactivityModel,
  userModel,
  checkListModel,
  userType,
  role,
  attendanceModel,
  activitiesModel,
  equipmentsModel,
  tempCheckListModel,
  jobManagementModel,
  logoutReasonListModel,
};
