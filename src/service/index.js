const adminServiceController = require("./admin");
const userServiceController = require("./user");
const mainActivityServiceController = require("./mainActivity");
const subActivityServiceController = require("./subActivity");
const checkListServiceController = require("./checklist");
const mobileServiceController = require("./mobile");
const userTypeController = require("./userType");
const roleServiceController = require("./role");
const equipmentServiceController = require("./equipments");
const tempCheckListController = require("./tempchecklist");
const jobServiceController = require("./job");
const locationServiceController = require("./location");
const subLocationServiceController = require("./sublocation");
const reportsServiceController = require("./reports");
const spareServiceController = require("./spare");
const temperatureFormServiceController = require("./temperatureForm");

module.exports = {
  adminServiceController,
  userServiceController,
  mainActivityServiceController,
  subActivityServiceController,
  checkListServiceController,
  mobileServiceController,
  userTypeController,
  roleServiceController,
  equipmentServiceController,
  tempCheckListController,
  jobServiceController,
  locationServiceController,
  subLocationServiceController,
  reportsServiceController,
  spareServiceController,
  temperatureFormServiceController,
};
