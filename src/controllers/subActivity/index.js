const { Router } = require("express");
const router = Router();

const { createSubActivity } = require("./create");
const { subActivityList } = require("./getlist");

router.post("/create", createSubActivity);
router.get("/list", subActivityList);

module.exports = router;
