const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../utils/jwt');

const { jobStatusUpdate } = require('./update');
const { createJob } = require('./createjobmanagement');
const { jobstart } = require('./jobstart');

router.put('/jobstatus', verifyToken, jobStatusUpdate);
router.post('/create', verifyToken, createJob);
router.put('/start', verifyToken, jobstart);

module.exports = router;
