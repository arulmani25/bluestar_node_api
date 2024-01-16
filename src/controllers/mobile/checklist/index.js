const express = require("express");
const router = express.Router();

const { activityListUsingMobile } = require("./list");
const { submitCheckList } = require("./submit");
const { submittedChecklistView } = require("./submitlistview");

router.get("/list", activityListUsingMobile);
router.post("/submit", submitCheckList);
router.get("/view", submittedChecklistView);

module.exports = router;
