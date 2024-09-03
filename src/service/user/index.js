const { createUser } = require('./create');
const { listUser } = require('./list');
const { getById } = require('./getbyid');
const { updateUserRecord, updateUserPassword } = require('./update');
const { deleteUserRecord } = require('./delete');
const { userLogin } = require('./login');

module.exports = {
    createUser,
    listUser,
    getById,
    updateUserRecord,
    updateUserPassword,
    deleteUserRecord,
    userLogin
};
