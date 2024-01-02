const express = require("express");
const router = express.Router();

const { createUser } = require("./create");
const { userLoginUsingMobile } = require("./login");
const { userList } = require("./listuser");
const { userLoginStatusMobile } = require("./loginstatus");
const { createAttendance } = require("./attendancecreate");

router.post("/create", createUser);
router.post("/login", userLoginUsingMobile);
router.get("/list", userList);
router.post("/loginstatus", userLoginStatusMobile);
router.post("/attendance", createAttendance);

module.exports = router;
