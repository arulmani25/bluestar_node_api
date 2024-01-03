const model = require("../models/index");
const seedData = require("../seed/index");

const modelArray = [
  model.activitiesModel,
  model.activityType,
  model.equipmentsModel,
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
      }

      console.log(`seeding success`);
    }
  }
};

module.exports = { seedRecordToDB };
