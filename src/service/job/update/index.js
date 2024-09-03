const model = require('../../../models/index');

const updateJobStatusRecord = async (payload) => {
    const isExist = await model.jobManagementModel.findOne({
        equipment_tag: payload.equipment_tag,
        checklist_checked: payload.checklist_checked
    });
    if (!isExist) throw new Error(errorMsg.RECORD_NOT_FOUND_TO_UPDATE);
    if (isExist) {
        const updatedRecord = await model.jobManagementModel.updateOne({
            ...payload
        });
        return updatedRecord;
    }
};

module.exports = { updateJobStatusRecord };
