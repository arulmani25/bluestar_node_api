const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../../utils/jwt');

const { adminCreationUsingMobile } = require('./create');
const { adminLoginUsingMobile } = require('./login');
const { adminLogOutUsingMobile } = require('./logout');

router.post('/create', verifyToken, adminCreationUsingMobile);
router.post('/login', verifyToken, adminLoginUsingMobile);
router.post('/logout', verifyToken, adminLogOutUsingMobile);

module.exports = router;
