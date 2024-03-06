const { Router } = require("express");
const router = Router();
const { verifyToken } = require("../../utils/jwt");

const { createSpare } = require("./create");
const { spareList } = require("./list");

router.post("/create", createSpare);
router.get("/list", spareList);

module.exports = router;
