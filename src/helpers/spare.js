const model = require('../models/index');
const { spareSeedData } = require('../seed/index');

const spareSeedFunction = async () => {
    for (const iterator of spareSeedData) {
        const equipment = await model.activitiesModel.findOne({
            activity_name: iterator.equipment
        });
        const insertRecord = await model.spareModel.create({
            equipment: equipment._id,
            equipment_name: iterator.equipment,
            spare_name: iterator.spare
        });
    }
};
module.exports = { spareSeedFunction };
