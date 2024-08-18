const { Router } = require('express');
const router = Router();
const { verifyToken } = require('../../utils/jwt');

const { createCheckList } = require('./create');
const { getCheckList } = require('./getlist');
const { getCheckListById } = require('./getbyid');
const { activityDropDown } = require('./activitydropdown');
const { subActivityDropDown } = require('./subActivityDropdown');
const { updateCheckList } = require('./update');
const { deleteCheckList } = require('./delete');
const { filterOptionList } = require('./filteroption');
const { fieldTypeList } = require('./fieldtypes');
const { getCheckListToEdit } = require('./getchecklisttoedit');
const { getPendingCheckList } = require('./pendingchecklist');
const { checklistCount } = require('./dashboardcount');
const { checkSubmisson } = require('./validation');

router.get('/count', checklistCount);
router.get('/check/:id', checkSubmisson);
router.post('/create', verifyToken, createCheckList);
router.get('/list', verifyToken, getCheckList);
router.get('/pendingchecklist', getPendingCheckList);
router.get('/activitydropdown', verifyToken, activityDropDown);
router.get('/subactivitydropdown/:id', verifyToken, subActivityDropDown);
router.get('/filtertype', verifyToken, filterOptionList);
router.get('/fieldtype', verifyToken, fieldTypeList);
router.put('/update/:id', verifyToken, updateCheckList);
router.put('/delete/:id', verifyToken, deleteCheckList);
router.get('/:id', verifyToken, getCheckListById);
router.get('/getsubmitchecklist/:id', getCheckListToEdit);

module.exports = router;
