const model = require('../../../models/index');

const createjobmanagement = async (payload) => {
    const recordList = await model.jobManagementModel.create({ ...payload });
    return recordList;
};

module.exports = { createjobmanagement };
