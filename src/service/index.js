const adminServiceController = require("./admin");
const userServiceController = require("./user");
const mainActivityServiceController = require("./mainActivity");
const subActivityServiceController = require("./subActivity");
const checkListServiceController = require("./checklist");
const mobileServiceController = require("./mobile");
const activityTypeController = require("./activityType");
const roleServiceController = require("./role");

module.exports = {
  adminServiceController,
  userServiceController,
  mainActivityServiceController,
  subActivityServiceController,
  checkListServiceController,
  mobileServiceController,
  activityTypeController,
  roleServiceController,
};
