const express = require("express");
const router = express.Router();

const { adminCreationUsingMobile } = require("./create");
const { adminLoginUsingMobile } = require("./login");
const { adminLogOutUsingMobile } = require("./logout");

router.post("/create", adminCreationUsingMobile);
router.post("/login", adminLoginUsingMobile);
router.post("/logout", adminLogOutUsingMobile);

module.exports = router;
