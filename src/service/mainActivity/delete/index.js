const model = require('../../../models/index');
const { errorMsg } = require('../../../utils');

const deleteGroup = async (id) => {
    const checkRecord = await model.mainactivityModel.findOne({ _id: id });
    if (!checkRecord) throw new Error(errorMsg.RECORD_NOT_FOUND_TO_DELETE);
    const record = await model.mainactivityModel.findOneAndUpdate({ _id: id }, { $set: { delete_status: true } });
    return record;
};
module.exports = { deleteGroup };
