const { Router } = require("express");
const router = Router();

const { uploadSignature } = require("./uploadfile");


router.post("/", uploadSignature);

module.exports = router;
