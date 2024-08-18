const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../utils/jwt');

const { createMainGroup } = require('./create');
const { getGroupList} = require('./getlist');
const { getGroupById } = require('./getbyid');
const { deleteGroup } = require('./delete');
const { updateRecord } = require('./update');


router.post('/create', verifyToken, createMainGroup);
router.get('/list', verifyToken, getGroupList);
router.get('/:id', verifyToken, getGroupById);
router.put('/remove/:id', verifyToken, deleteGroup);
router.put('/update/:id', verifyToken, updateRecord);


module.exports = router;
