const model = require('../../../models/index');
const { errorMsg } = require('../../../utils');

const createTempCheckList = async (payload) => {
    const isEquipmentTagAvailable = await model.tempCheckListModel.findOne({
        equipment_tag_name: payload.equipment_tag_name
    });
    if (isEquipmentTagAvailable) {
        // for (const data of payload.data_store) {
        //   const record = await model.tempCheckListModel.findOneAndUpdate(
        //     { equipment_tag_name: isEquipmentTagAvailable.equipment_tag_name },
        //     {
        //       $push: { data_store: data },
        //     }
        //   );
        //   return record;
        // }
        const record = await model.tempCheckListModel.findOneAndUpdate(
            { equipment_tag_name: isEquipmentTagAvailable.equipment_tag_name },
            { ...payload }
        );
        return record;
    } else {
        const createRecord = await model.tempCheckListModel.create({ ...payload });
        return createRecord;
    }
};

module.exports = { createTempCheckList };
