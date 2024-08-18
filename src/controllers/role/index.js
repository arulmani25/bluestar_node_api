const express = require('express');
const router = express.Router();

const { createRoleType } = require('./create');
const { getRoleTypeList } = require('./list');
const { deleteRole } = require('./delete');
const { editRole } = require('./edit');
const { getRole } = require('./getrole');
const { verifyToken } = require('../../utils');

router.post('/create', verifyToken, createRoleType);
router.get('/list', verifyToken, getRoleTypeList);
router.get('/getrole/:id', verifyToken, getRole);
router.put('/delete/:id', verifyToken, deleteRole);
router.put('/edit/:id', verifyToken, editRole);

module.exports = router;
