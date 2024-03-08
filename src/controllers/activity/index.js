const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../utils/jwt");

const { activityList } = require("./list");
const { createActivity } = require("./create");

router.get("/list",verifyToken, activityList);
router.post("/create",verifyToken, createActivity);

module.exports = router;
