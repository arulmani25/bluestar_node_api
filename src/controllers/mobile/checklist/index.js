const express = require("express");
const router = express.Router();

const { activityListUsingMobile } = require("./list");
const { submitCheckList } = require("./submit");

router.get("/list", activityListUsingMobile);
router.post("/submit", submitCheckList);

module.exports = router;
