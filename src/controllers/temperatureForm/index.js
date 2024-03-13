const { Router } = require("express");
const router = Router();
const { verifyToken } = require("../../utils/jwt");

const { tempLogTitleList } = require("./gettitle");
const { listForms } = require("./listForm");
const { getForm } = require("./getForm");
const { submitForm } = require("./submitForm");
const { getSubmittedForm } = require("./getsubmittedForm");
const { updateForm } = require("./updateForm");
const { addLogField } = require("./addLogField");
const { tempLogFields } = require("./listfield");
const { tempLogFieldTime } = require("./listfieldtime");

router.post("/submit", verifyToken, submitForm);
router.get("/titlelist", verifyToken, tempLogTitleList);
router.get("/listforms", verifyToken, listForms);
router.get("/form/:id", verifyToken, getForm);
router.get("/submittedform/:id", verifyToken, getSubmittedForm);
router.put("/updateform", verifyToken, updateForm);
router.post("/addlogfield", verifyToken, addLogField);
router.get("/listlogfield", tempLogFields);
router.get("/listlogfieldtime", tempLogFieldTime);

module.exports = router;
