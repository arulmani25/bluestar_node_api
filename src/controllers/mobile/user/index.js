const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../../utils/jwt');

const { createUser } = require('./create');
const { userLoginUsingMobile } = require('./login');
const { userList } = require('./listuser');
const { userLoginStatusMobile } = require('./loginstatus');
const { createAttendance } = require('./attendancecreate');
const { getUserById } = require('./getbyid');
const { logoutReasonList } = require('./logoutreason');
const { updateLogoutTime } = require('./updatelogouttime');
const { userAttendanceList } = require('./listattendance');
const { userLogout } = require('./logout');

router.post('/create', verifyToken, createUser);
router.post('/login', userLoginUsingMobile);
router.get('/list', verifyToken, userList);
router.get('/logoutreason', verifyToken, logoutReasonList);
router.get('/attdlist', verifyToken, userAttendanceList);
router.post('/loginstatus', verifyToken, userLoginStatusMobile);
router.post('/attendance', verifyToken, createAttendance);
router.post('/logout', verifyToken, userLogout);
router.get('/:user_mobile_no', verifyToken, getUserById);
router.put('/logoutupdate', verifyToken, updateLogoutTime);

module.exports = router;
