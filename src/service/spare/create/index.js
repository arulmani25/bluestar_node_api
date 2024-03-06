const model = require("../../../models/index");

const createSpare = async (payload) => {
  const getEquipmentName = await model.activitiesModel.findOne({ _id: payload.equipment });
  const data = await model.spareModel.create({
    equipment: payload.equipment,
    equipment_name: getEquipmentName.activity_name,
    spare_name: payload.spare_name,
  });
  return data;
};

module.exports = { createSpare };
