const { Router } = require('express');
const router = Router();
const { verifyToken } = require('../../utils/jwt');

const { equipmentList } = require('./list');
const { generateQrCode } = require('./qrcode');
const { cobieList } = require('./cobietaglist');

router.get('/list', verifyToken, equipmentList);
router.put('/qrcode', generateQrCode);
router.get('/cobielist', verifyToken, cobieList);

module.exports = router;
