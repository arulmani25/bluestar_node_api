const model = require('../../../models/index');

const temperorySubmitLog = async (payload) => {
    const data = await model.submittedTemperatureLogForms.create({
        ...payload
    });

    return data;
};

module.exports = { temperorySubmitLog };
