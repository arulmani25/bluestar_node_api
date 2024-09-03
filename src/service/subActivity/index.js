const { createSubActivity } = require('./create');
const { subActivityList } = require('./getlist');
const { getRecordById } = require('./getbyid');
const { deleteRecord } = require('./delete');
const { updateRecord } = require('./update');

module.exports = {
    createSubActivity,
    subActivityList,
    getRecordById,
    deleteRecord,
    updateRecord
};
