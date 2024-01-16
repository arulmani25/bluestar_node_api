const { Router } = require("express");
const router = Router();
const { reportList } = require("./list");
const { getReportById } = require("./getbyid");

router.get("/list", reportList);
router.get("/:id", getReportById);

module.exports = router;
