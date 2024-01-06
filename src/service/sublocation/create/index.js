const model = require("../../../models/index");

const createSubLocation = async (payload) => {
  const checkLocationExist = await model.subLocationModel.findOne({
    main_location: payload.main_location,
  });
  if (!checkLocationExist) {
    const createRecord = await model.subLocationModel.create({ ...payload });
    return createRecord;
  }
};

module.exports = { createSubLocation };
