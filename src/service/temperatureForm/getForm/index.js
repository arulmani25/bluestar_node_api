const model = require('../../../models/index');

const getFormById = async (id) => {
    const data = await model.temperaturelogForms.findOne({ titleId: id });
    return data;
};

module.exports = { getFormById };
