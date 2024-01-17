const { Router } = require("express");
const router = Router();
const { reportList } = require("./list");
const { getReportById } = require("./getbyid");
const { reportsCount } = require("./count");

router.get("/list", reportList);
router.get("/count", reportsCount);
router.get("/:id", getReportById);

module.exports = router;
