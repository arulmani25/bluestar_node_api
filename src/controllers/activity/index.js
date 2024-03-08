const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../utils/jwt");

const { activityList } = require("./list");

router.get("/list", activityList);

module.exports = router;
