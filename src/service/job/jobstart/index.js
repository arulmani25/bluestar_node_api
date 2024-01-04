const model = require("../../../models/index");

const jobStart = async (equipment_tag, payload) => {
  const isExist = await model.jobManagementModel.findOne({
    equipment_tag: equipment_tag,
    checklist_checked: "Yes",
  });
  if (!isExist) throw new Error(errorMsg.RECORD_NOT_FOUND_TO_UPDATE);
  if (isExist) {
    const updatedRecord = await model.jobManagementModel.updateOne({
      ...payload,
    });
    return updatedRecord;
  }
};

module.exports = { jobStart };
