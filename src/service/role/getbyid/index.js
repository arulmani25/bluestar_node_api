const model = require('../../../models/index');

const getRole = async (id) => {
    const data = await model.role.findOne({ _id: id });
    return data;
};

module.exports = { getRole };
