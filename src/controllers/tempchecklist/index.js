const { Router } = require("express");

const router = Router();

const { createTempCheckList } = require("./create");
const { getTempCheckLIst } = require("./get");

router.post("/createtemp", createTempCheckList);
router.get("/:id", getTempCheckLIst);

module.exports = router;
