const { Router } = require('express');
const router = Router();
const { reportList } = require('./list');
const { getReportById } = require('./getbyid');
const { reportsCount } = require('./count');
const { verifyToken } = require('../../utils');
const { checklistReportList } = require('./listpdf');

router.post('/listchecklistpdf', checklistReportList);
router.get('/list', verifyToken, reportList);
router.get('/count', verifyToken, reportsCount);
router.get('/:id', verifyToken, getReportById);

module.exports = router;
