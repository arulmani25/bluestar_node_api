const model = require('../../../models/index');

const addTitle = async (title) => {
    const data = await model.temperaturelogsTitle.create({
        title: title
    });
    return data;
};

module.exports = { addTitle };
