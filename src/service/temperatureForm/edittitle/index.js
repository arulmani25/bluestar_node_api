const model = require('../../../models/index');

const editTitle = async (id, payload) => {
    const data = await model.temperaturelogsTitle.findOneAndUpdate({ _id: id }, { $set: { title: payload.title } });
    return data;
};

module.exports = { editTitle };
