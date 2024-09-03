const model = require('../../../models/index');
const { errorMsg } = require('../../../utils');

const updateRecord = async (id, payload) => {
    const isExist = await model.subactivityModel.findOne({
        _id: id,
        delete_status: false
    });
    if (!isExist) throw new Error(errorMsg.RECORD_NOT_FOUND_TO_UPDATE);

    const record = await model.subactivityModel.findOneAndUpdate({ _id: id }, { ...payload });
    return record;
};

module.exports = { updateRecord };
