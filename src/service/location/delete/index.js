const model = require('../../../models/index');
const { errorMsg } = require('../../../utils');

const deleteLocation = async (id) => {
    const checkRecord = await model.mainLocationModel.findOne({
        _id: id,
        is_active: true
    });
    if (!checkRecord) throw new Error(errorMsg.RECORD_NOT_FOUND_TO_DELETE);
    const record = await model.mainLocationModel.findOneAndUpdate({ _id: id }, { $set: { is_active: false } });
    return record;
};
module.exports = { deleteLocation };
