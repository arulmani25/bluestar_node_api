const model = require('../../../models/index');

const getReportCount = async () => {
    const record = await model.jobManagementModel.find({});
    return record;
};

module.exports = { getReportCount };
