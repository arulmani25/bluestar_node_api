const model = require('../../../models/index');

const getRecordById = async (id) => {
    const record = await model.mainactivityModel.findOne({
        _id: id,
        delete_status: false
    });
    return record;
};

module.exports = { getRecordById };
