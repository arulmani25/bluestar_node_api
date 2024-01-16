const express = require("express");
const router = express.Router();

const { jobStatusUpdate } = require("./update");
const { createJob } = require("./createjobmanagement");
const { jobstart } = require("./jobstart");

router.put("/jobstatus", jobStatusUpdate);
router.post("/create", createJob);
router.put("/start", jobstart);

module.exports = router;
