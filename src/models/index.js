const adminModel = require('../models/admin.Model');
const mainactivityModel = require('./mainActivity.model');
const subactivityModel = require('./subActivity.model');
const userModel = require('../models/user.Model');
const checkListModel = require('./checklist.model');
const userType = require('./userType.model');
const role = require('./role.model');
const attendanceModel = require('./attendance.model');
const activitiesModel = require('./activities.model');
const equipmentsModel = require('./equipment.model');
const tempCheckListModel = require('./tempchecklist.model');
const jobManagementModel = require('./jobManagement.model');
const logoutReasonListModel = require('./logoutreason.model');
const mainLocationModel = require('./location.model');
const subLocationModel = require('./sublocation.model');
const logOutModel = require('./logout.model');
const filterModel = require('./filter.model');
const submitchecklistModel = require('./submitchecklist.model');
const ticketModel = require('./ticket.model');
const filedTypeModel = require('./filedtype.model');
const checkListValidation = require('./checklistvalidation.model');
const newEquipmentTags = require('./newequipmentstag.model');
const spareModel = require('./spare.model');
const temperaturelogsTitle = require('./temperaturelogstitle.model');
const temperaturelogForms = require('./temperaturelogsForm.model');
const submittedTemperatureLogForms = require('./submitTemperatureLogForm.model');
const checkListPdfTitle = require('./checklistpdftitle.model');
const checklistTracker = require('./checklist_tracker.model');
const documentModel = require('./document.model');

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
    filedTypeModel,
    checkListValidation,
    newEquipmentTags,
    spareModel,
    temperaturelogsTitle,
    temperaturelogForms,
    submittedTemperatureLogForms,
    checkListPdfTitle,
    checklistTracker,
    documentModel
};
