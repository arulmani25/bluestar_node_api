const { Router } = require("express");
const router = Router();

const { equipmentList } = require("./list");

router.get("/list", equipmentList);

module.exports = router;
