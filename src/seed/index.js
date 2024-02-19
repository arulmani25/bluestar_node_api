const { equipmentsSeedData } = require("./equipments.seed");
const { mainActivitiesSeedData } = require("./mainactivity.seed");
const { userTypeSeedData } = require("./usertype.seed");
const { logoutReasonSeedData } = require("./logoutreason.seed");
const { subLocationSeed } = require("./sublocation.seed");
const { filterSeedData } = require("./filtertype.seed");
const { fieldTypeSeed } = require("./fieldtype.seed");
const { roleTypeSeed } = require("./role.seed");
const { adminSeedData } = require("./admin.seed");
const { checklistValidationSeed } = require("./checklistvalidation.seed");
const { newEquipmentTags } = require("./newequipmentstag.seed");

module.exports = {
  equipmentsSeedData,
  mainActivitiesSeedData,
  userTypeSeedData,
  logoutReasonSeedData,
  subLocationSeed,
  filterSeedData,
  fieldTypeSeed,
  roleTypeSeed,
  adminSeedData,
  checklistValidationSeed,
  newEquipmentTags,
};
