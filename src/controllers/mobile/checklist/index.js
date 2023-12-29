const express = require("express");
const router = express.Router();

const { activityListUsingMobile } = require("./list");

router.get("/list", activityListUsingMobile);

module.exports = router;
