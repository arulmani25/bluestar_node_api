const model = require("../../../models/index");
const { errorMsg } = require("../../../utils");

const createTempCheckList = async (payload) => {
  const isEquipmentTagAvailable = await model.tempCheckListModel.findOne({
    equipment_tag: payload.equipment_tag,
  });
  if (isEquipmentTagAvailable) {
    for (const data of payload.data_store) {
      const record = await model.tempCheckListModel.updateOne({
        $push: { data_store: data },
      });
      return record;
    }
  } else {
    const createRecord = await model.tempCheckListModel.create({ ...payload });
    return createRecord;
  }
};

module.exports = { createTempCheckList };
