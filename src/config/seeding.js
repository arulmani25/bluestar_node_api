const model = require('../models/index');
const seedData = require('../seed/index');
const { createLogForms } = require('../helpers/templog');
const { spareSeedFunction } = require('../helpers/spare');
const { roleSeedFunction } = require('../helpers/role');

const modelArray = [
    model.userType,
    model.equipmentsModel,
    model.logoutReasonListModel,
    model.subLocationModel,
    model.mainactivityModel,
    model.filterModel,
    model.filedTypeModel,
    model.role,
    model.adminModel,
    model.checkListValidation,
    model.newEquipmentTags,
    model.activitiesModel,
    model.temperaturelogsTitle,
    model.temperaturelogForms,
    model.spareModel,
    model.checkListPdfTitle,
    model.checklistTracker
];

const seedRecordToDB = async () => {
    for (const mod of modelArray) {
        const count = await mod.find({}).count();
        if (count <= 0) {
            switch (mod.collection.collectionName) {
                case 'mainactivities':
                    await mod.insertMany(seedData.mainActivitiesSeedData);
                    break;
                case 'usertypes':
                    await mod.insertMany(seedData.userTypeSeedData);
                    break;
                case 'equipments':
                    await mod.insertMany(seedData.equipmentsSeedData);
                    break;
                case 'logoutreasons':
                    await mod.insertMany(seedData.logoutReasonSeedData);
                    break;
                case 'sublocations':
                    await mod.insertMany(seedData.subLocationSeed);
                    break;
                case 'filters':
                    await mod.insertMany(seedData.filterSeedData);
                    break;
                case 'fieldtypes':
                    await mod.insertMany(seedData.fieldTypeSeed);
                    break;
                case 'roles':
                    await roleSeedFunction();
                    break;
                case 'admins':
                    await mod.insertMany(seedData.adminSeedData);
                    break;
                case 'checklistvalidations':
                    await mod.insertMany(seedData.checklistValidationSeed);
                    break;
                case 'new_equipments':
                    await mod.insertMany(seedData.newEquipmentTags);
                    break;
                case 'activities':
                    await mod.insertMany(seedData.activitiesSeedData);
                    break;
                case 'temperature_logs_titles':
                    await mod.insertMany(seedData.temperatureTitleLogsseed);
                    break;
                case 'temperature_log_forms':
                    await createLogForms();
                    break;
                case 'spares':
                    await spareSeedFunction();
                    break;
                case 'checklist_pdf_titles':
                    await mod.insertMany(seedData.checklistPdfTitleSeed);
                    break;
                case 'checklist_trackers':
                    await mod.insertMany(seedData.checklistTracker);
                    break;
            }

            console.log(`seeding success`);
        }
    }
};

module.exports = { seedRecordToDB };
