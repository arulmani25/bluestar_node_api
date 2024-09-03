const model = require('../../../models/index');

const createSubLocation = async (payload) => {
    const checkLocationExist = await model.subLocationModel.findOne({
        sub_location: payload.sub_location,
        is_active: true
    });
    if (!checkLocationExist) {
        const createRecord = await model.subLocationModel.create({ ...payload });
        return createRecord;
    }
};

module.exports = { createSubLocation };
