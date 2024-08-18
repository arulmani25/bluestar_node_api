const { Router } = require('express');
const router = Router();

const { uploadSignature } = require('./uploadfile');
const { verifyToken } = require('../../utils');

router.post('/', verifyToken, uploadSignature);

module.exports = router;
