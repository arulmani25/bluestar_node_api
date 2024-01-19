const { Router } = require("express");
const router = Router();
const { verifyToken } = require("../../utils/jwt");

const { equipmentList } = require("./list");
const { generateQrCode } = require("./qrcode");

router.get("/list", verifyToken, equipmentList);
router.put("/qrcode", verifyToken, generateQrCode);

module.exports = router;
