const express = require("express");
const router = express.Router();

const { createActivityType } = require("./create");
const { getActivityTypeList } = require("./list");

router.post("/create", createActivityType);
router.get("/list", getActivityTypeList);

module.exports = router;
