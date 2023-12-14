const express = require("express");
const router = express.Router();

const { createAdmin } = require("./create");
const { adminLogin } = require("./login");
const { getAdminList } = require("./getlist");
const { getAdminById } = require("./getbyid");

router.post("/create", createAdmin);
router.post("/login", adminLogin);
router.get("/list", getAdminList);
router.get("/getadmin/:id", getAdminById);

module.exports = router;
