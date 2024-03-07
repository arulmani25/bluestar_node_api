const { Router } = require("express");
const router = Router();
const { verifyToken } = require("../../utils/jwt");

const { tempLogTitleList } = require("./gettitle");
const { listForms } = require("./listForm");
const { getForm } = require("./getForm");
const { submitForm } = require("./submitForm");
const { getSubmittedForm } = require("./getsubmittedForm");

router.post("/submit", submitForm);
router.get("/titlelist", tempLogTitleList);
router.get("/listforms", listForms);
router.get("/form/:id", getForm);
router.get("/submittedform/:id", getSubmittedForm);

module.exports = router;
