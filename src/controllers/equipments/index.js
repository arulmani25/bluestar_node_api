const { Router } = require("express");
const router = Router();

const { equipmentList } = require("./list");
const { generateQrCode } = require("./qrcode");

router.get("/list", equipmentList);
router.put("/qrcode", generateQrCode);

module.exports = router;
