const express = require("express");
const router = express.Router();

const { createUserType } = require("./create");
const { getUserTypeList } = require("./list");

router.post("/create", createUserType);
router.get("/list", getUserTypeList);

module.exports = router;
