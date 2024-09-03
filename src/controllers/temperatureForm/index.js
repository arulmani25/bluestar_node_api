const { Router } = require('express');
const router = Router();
const { verifyToken } = require('../../utils/jwt');

const { tempLogTitleList } = require('./gettitle');
const { listForms } = require('./listForm');
const { getForm } = require('./getForm');
const { submitForm } = require('./submitForm');
const { getSubmittedForm } = require('./getsubmittedForm');
const { updateForm } = require('./updateForm');
const { getSubmittedFormWeb } = require('./getsubmittedFormWeb');
const { addLogField } = require('./addLogField');
const { tempLogFields } = require('./listfield');
const { tempLogFieldTime } = require('./listfieldtime');
const { tempsubmitForm } = require('./tempsubmitform');
const { addTitle } = require('./addtitle');
const { deleteTitle } = require('./deletetitle');
const { editTitle } = require('./edittitle');
const { checkSubmisson } = require('./validation');

router.post('/submit', submitForm);
router.post('/tempsubmit', tempsubmitForm);
router.get('/titlelist', verifyToken, tempLogTitleList);
router.get('/listforms', verifyToken, listForms);
router.get('/form/:id', verifyToken, getForm);
router.get('/submittedform', verifyToken, getSubmittedForm);
router.get('/submittedformweb', getSubmittedFormWeb);
router.put('/updateform', verifyToken, updateForm);
router.post('/addlogfield', verifyToken, addLogField);
router.get('/listlogfield', tempLogFields);
router.get('/listlogfieldtime', tempLogFieldTime);
router.post('/addtitle', verifyToken, addTitle);
router.post('/check', checkSubmisson);
router.put('/removetitle/:id', verifyToken, deleteTitle);
router.put('/edittitle/:id', verifyToken, editTitle);

module.exports = router;
