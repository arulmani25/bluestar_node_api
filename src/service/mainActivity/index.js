const { createGroup } = require('./create');
const { groupList} = require('./getlist');
const { getRecordById } = require('./getbyid');
const { deleteGroup } = require('./delete');
const { updateRecord } = require('./update');
const { getActivityTypes } = require('./ActivityTypeList/ActivityTypeList');

module.exports = {
    createGroup,
    groupList,
    getRecordById,
    deleteGroup,
    updateRecord,
    getActivityTypes
};
