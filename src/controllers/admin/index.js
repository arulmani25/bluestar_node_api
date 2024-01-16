const express = require("express");
const router = express.Router();

const { createAdmin } = require("./create");
const { adminLogin } = require("./login");
const { getAdminList } = require("./getlist");
const { getAdminById } = require("./getbyid");
const { adminRecordUpdate } = require("./update");
const { deleteAdmin } = require("./delete");

router.post("/create", createAdmin);
router.post("/login", adminLogin);
router.get("/list", getAdminList);
router.get("/getadmin/:id", getAdminById);
router.put("/update/:id", adminRecordUpdate);
router.put("/delete/:id", deleteAdmin);

module.exports = router;
