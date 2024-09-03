const model = require('../../../models/index');

const createLocation = async (payload) => {
    const checkLocationExist = await model.mainLocationModel.findOne({
        main_location: payload.main_location
    });
    if (!checkLocationExist) {
        const createRecord = await model.mainLocationModel.create({ ...payload });
        return createRecord;
    }
};

module.exports = { createLocation };
