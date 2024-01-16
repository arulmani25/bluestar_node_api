const express = require("express");
const router = express.Router();

const { getActivityList } = require("./list");

router.get("/list", getActivityList);

module.exports = router;
