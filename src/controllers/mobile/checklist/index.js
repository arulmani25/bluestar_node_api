const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../../utils/jwt');

const { activityListUsingMobile } = require('./list');
const { submitCheckList } = require('./submit');
const { submittedChecklistView } = require('./submitlistview');
const { checklistListUsingTag } = require('./listbytag');

router.get('/list', verifyToken, activityListUsingMobile);
router.post('/submit', submitCheckList);
router.get('/view', verifyToken, submittedChecklistView);
router.get('/listbytag', verifyToken, checklistListUsingTag);

module.exports = router;
