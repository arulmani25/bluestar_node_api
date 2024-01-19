const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../../utils/jwt");

const { getActivityList } = require("./list");

router.get("/list", verifyToken, getActivityList);

module.exports = router;
