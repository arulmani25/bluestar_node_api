const model = require('../../../models/index');
const { errorMsg } = require('../../../utils');

const deleteSubLocation = async (id) => {
    const checkRecord = await model.subLocationModel.findOne({
        _id: id,
        is_active: true
    });
    if (!checkRecord) throw new Error(errorMsg.RECORD_NOT_FOUND_TO_DELETE);
    const record = await model.subLocationModel.findOneAndUpdate({ _id: id }, { $set: { is_active: false } });
    return record;
};
module.exports = { deleteSubLocation };
