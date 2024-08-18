const model = require('../../../models/index');

const getSpare = async (id) => {
    const data = await model.spareModel.findOne({ _id: id });
    return data;
};

module.exports = { getSpare };
