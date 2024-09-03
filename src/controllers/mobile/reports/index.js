const { Router } = require('express');
const router = Router();
const { verifyToken } = require('../../../utils/jwt');

const { reportList } = require('./list');
const { getReportById } = require('./getbyid');

router.get('/list', verifyToken, reportList);
router.get('/:id', verifyToken, getReportById);

module.exports = router;
