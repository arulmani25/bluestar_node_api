const model = require('../../../models/index');

const deleteActivity = async (id, payload) => {
    const data = await model.activitiesModel.findOneAndUpdate({ _id: id }, { $set: { is_active: false } });
    return data;
};

module.exports = { deleteActivity };
