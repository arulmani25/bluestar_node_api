const model = require("../models/index");
const seedData = require("../seed/index");

const modelArray = [
  model.userType,
  model.equipmentsModel,
  model.logoutReasonListModel,
];

const seedRecordToDB = async () => {
  for (const mod of modelArray) {
    const count = await mod.find({}).count();
    if (count <= 0) {
      switch (mod.collection.collectionName) {
        case "activities":
          await mod.insertMany(seedData.mainActivitiesSeedData);
          break;
        case "activitytypes":
          await mod.insertMany(seedData.activityTypeSeedData);
          break;
        case "equipments":
          await mod.insertMany(seedData.equipmentsSeedData);
          break;
        case "logoutreasons":
          await mod.insertMany(seedData.logoutReasonSeedData);
          break;
      }

      console.log(`seeding success`);
    }
  }
};

module.exports = { seedRecordToDB };
