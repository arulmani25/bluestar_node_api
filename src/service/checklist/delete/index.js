const model = require('../../../models/index');
const { errorMsg } = require('../../../utils');

const deleteCheckList = async (id) => {
    const checkRecord = await model.checkListModel.findOne({ _id: id });
    if (!checkRecord) throw new Error(errorMsg.RECORD_NOT_FOUND_TO_DELETE);
    const record = await model.checkListModel.findOneAndUpdate({ _id: id }, { $set: { delete_status: true } });
    return record;
};
module.exports = { deleteCheckList };
