const express = require("express");
const router = express.Router();

const { createUserType } = require("./create");
const { getUserTypeList } = require("./list");
const { verifyToken } = require("../../utils");

router.post("/create", verifyToken, createUserType);
router.get("/list", verifyToken, getUserTypeList);

module.exports = router;
