const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../utils/jwt');

const { createAdmin } = require('./create');
const { adminLogin } = require('./login');
const { getAdminList } = require('./getlist');
const { getAdminById } = require('./getbyid');
const { adminRecordUpdate } = require('./update');
const { deleteAdmin } = require('./delete');

router.post('/create', verifyToken, createAdmin);
router.post('/login', adminLogin);
router.get('/list', verifyToken, getAdminList);
router.get('/getadmin/:id', verifyToken, getAdminById);
router.put('/update/:id', verifyToken, adminRecordUpdate);
router.put('/delete/:id', verifyToken, deleteAdmin);

module.exports = router;
