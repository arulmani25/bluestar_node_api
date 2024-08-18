const { Router } = require('express');
const router = Router();
const { verifyToken } = require('../../utils/jwt');
const { updatePassword } = require('../../Validators/UserValidation');

const { createUser } = require('./create');
const { getUserList } = require('./list');
const { getUserById } = require('./getbyid');
const { updateUserRecord, updateUserPassword } = require('./update');
const { deleteUser } = require('./delete');
const { userLogin } = require('./login');

router.post('/create', verifyToken, createUser);
router.get('/list', verifyToken, getUserList);
router.post('/login', userLogin);
router.get('/getbyid/:id', verifyToken, getUserById);
router.put('/update/:id', verifyToken, updateUserRecord);
router.patch('/update_password', verifyToken, updatePassword(), updateUserPassword);
router.put('/delete/:id', verifyToken, deleteUser);

module.exports = router;
