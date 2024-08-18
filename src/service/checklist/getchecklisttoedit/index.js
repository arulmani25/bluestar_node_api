const mongoose = require('mongoose');
const model = require('../../../models/index');
const { errorMsg } = require('../../../utils');

const getSubmittedChecklist = async (id) => {
    const record = await model.tempCheckListModel.find(
        {
            equipment_tag_name: id
        },
        { data_store: 1 }
    );
    const getSubmittedRecord = await model.submitchecklistModel.findOne(
        { equipment_tag_name: id },
        {
            description: 0
        }
    );

    return [record[0]['_doc'], getSubmittedRecord['_doc']];
};

module.exports = { getSubmittedChecklist };
