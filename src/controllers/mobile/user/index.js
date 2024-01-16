const express = require("express");
const router = express.Router();

const { createUser } = require("./create");
const { userLoginUsingMobile } = require("./login");
const { userList } = require("./listuser");
const { userLoginStatusMobile } = require("./loginstatus");
const { createAttendance } = require("./attendancecreate");
const { getUserById } = require("./getbyid");
const { logoutReasonList } = require("./logoutreason");
const { updateLogoutTime } = require("./updatelogouttime");
const { userAttendanceList } = require("./listattendance");
const { userLogout } = require("./logout");

router.post("/create", createUser);
router.post("/login", userLoginUsingMobile);
router.get("/list", userList);
router.get("/logoutreason", logoutReasonList);
router.get("/attdlist", userAttendanceList);
router.post("/loginstatus", userLoginStatusMobile);
router.post("/attendance", createAttendance);
router.post("/logout", userLogout);
router.get("/:user_mobile_no", getUserById);
router.put("/logoutupdate", updateLogoutTime);

module.exports = router;
