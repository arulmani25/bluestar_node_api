const { Router } = require("express");

const router = Router();

const { createTempCheckList } = require("./create");
const { getTempCheckLIst } = require("./get");
const { verifyToken } = require("../../utils");

router.post("/createtemp", verifyToken, createTempCheckList);
router.get("/:id", verifyToken, getTempCheckLIst);

module.exports = router;
