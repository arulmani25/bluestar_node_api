const express = require("express");
const router = express.Router();

const { createRoleType } = require("./create");
const { getRoleTypeList } = require("./list");

router.post("/create", createRoleType);
router.get("/list", getRoleTypeList);

module.exports = router;
