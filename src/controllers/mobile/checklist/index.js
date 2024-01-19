const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../../utils/jwt");

const { activityListUsingMobile } = require("./list");
const { submitCheckList } = require("./submit");
const { submittedChecklistView } = require("./submitlistview");

router.get("/list", verifyToken, activityListUsingMobile);
router.post("/submit", verifyToken, submitCheckList);
router.get("/view", verifyToken, submittedChecklistView);

module.exports = router;
