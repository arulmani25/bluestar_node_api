const mongoose = require('mongoose');
const model = require('../../../models/index');
const objectId = mongoose.Types.ObjectId;
const { errorMsg } = require('../../../utils');

const getReportById = async (id) => {
    const isExist = await model.submitchecklistModel.findOne({
        _id: new objectId(id)
    });
    if (!isExist) throw new Error(errorMsg.REPORT_NOT_FOUND);
    const report = await model.submitchecklistModel.findOne({
        _id: new objectId(id)
    });
    return report;
};

module.exports = { getReportById };
