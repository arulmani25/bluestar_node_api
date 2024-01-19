const model = require("../models/index");
const seedData = require("../seed/index");

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
];

const seedRecordToDB = async () => {
  for (const mod of modelArray) {
    const count = await mod.find({}).count();
    if (count <= 0) {
      switch (mod.collection.collectionName) {
        case "mainactivities":
          await mod.insertMany(seedData.mainActivitiesSeedData);
          break;
        case "usertypes":
          await mod.insertMany(seedData.userTypeSeedData);
          break;
        case "equipments":
          await mod.insertMany(seedData.equipmentsSeedData);
          break;
        case "logoutreasons":
          await mod.insertMany(seedData.logoutReasonSeedData);
          break;
        case "sublocations":
          await mod.insertMany(seedData.subLocationSeed);
          break;
        case "filters":
          await mod.insertMany(seedData.filterSeedData);
          break;
        case "fieldtypes":
          await mod.insertMany(seedData.fieldTypeSeed);
          break;
        case "roles":
          await mod.insertMany(seedData.roleTypeSeed);
          break;
        case "admins":
          await mod.insertMany(seedData.adminSeedData);
          break;
      }

      console.log(`seeding success`);
    }
  }
};

module.exports = { seedRecordToDB };
