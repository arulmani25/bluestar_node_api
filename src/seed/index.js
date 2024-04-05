const { equipmentsSeedData } = require("./equipments.seed");
const { mainActivitiesSeedData } = require("./mainactivity.seed");
const { userTypeSeedData } = require("./usertype.seed");
const { logoutReasonSeedData } = require("./logoutreason.seed");
const { subLocationSeed } = require("./sublocation.seed");
const { filterSeedData } = require("./filtertype.seed");
const { fieldTypeSeed } = require("./fieldtype.seed");
const { bialRoleSeed, blueStarRoleSeed } = require("./role.seed");
const { adminSeedData } = require("./admin.seed");
const { checklistValidationSeed } = require("./checklistvalidation.seed");
const { newEquipmentTags } = require("./newequipmentstag.seed");
const { activitiesSeedData } = require("./activities.seed");
const { temperatureTitleLogsseed } = require("./temperaturelog.seed");
const { logDomSeedData } = require("./log_dom.seed");
const { logIntlSeedData } = require("./log_intl.seed");
const { domesticTelecomRoomTempSeed } = require("./dom_tele_room_temp.seed");
const { intlTeleRoomTempSeed } = require("./intl_tele_room_temp.seed");
const { centriFugalChillersSeed } = require("./centriFugal_chiller.seed");
const { dailyReportSeed } = require("./daily_report.seed");
const { spareSeedData } = require("./spare.seed");
const  checklistPdfTitleSeed  = require("./checklist_pdf_title.seed");

module.exports = {
  equipmentsSeedData,
  mainActivitiesSeedData,
  userTypeSeedData,
  logoutReasonSeedData,
  subLocationSeed,
  filterSeedData,
  fieldTypeSeed,
  bialRoleSeed,
  blueStarRoleSeed,
  adminSeedData,
  checklistValidationSeed,
  newEquipmentTags,
  activitiesSeedData,
  temperatureTitleLogsseed,
  logDomSeedData,
  logIntlSeedData,
  domesticTelecomRoomTempSeed,
  intlTeleRoomTempSeed,
  centriFugalChillersSeed,
  dailyReportSeed,
  spareSeedData,
  checklistPdfTitleSeed,
};
