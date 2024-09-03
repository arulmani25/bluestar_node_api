const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../utils/jwt');

const { createLocation } = require('./create');
const { getLocationList } = require('./list');
const { deleteLocation } = require('./delete');
const { getLocationById } = require('./getbyid');
const { updateLocation } = require('./update');

router.post('/create', verifyToken, createLocation);
router.get('/list', verifyToken, getLocationList);
router.get('/:id', verifyToken, getLocationById);
router.put('/remove/:id', verifyToken, deleteLocation);
router.put('/update/:id', verifyToken, updateLocation);

module.exports = router;
