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
const mainLocationModel = require("./location.model");
const subLocationModel = require("./sublocation.model");
const logOutModel = require("./logout.model");
const filterModel = require("./filter.model");
const submitchecklistModel = require("./submitchecklist.model");
const ticketModel = require("./ticket.model");

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
  mainLocationModel,
  subLocationModel,
  logOutModel,
  filterModel,
  submitchecklistModel,
  ticketModel,
};
