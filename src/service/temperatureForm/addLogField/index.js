const model = require('../../../models/index');

const addLogField = async (titleId, fieldData) => {
    const data = await model.temperaturelogForms.findOneAndUpdate({ titleId: titleId }, { $push: { logs: fieldData } });
    return data;
};

module.exports = { addLogField };
