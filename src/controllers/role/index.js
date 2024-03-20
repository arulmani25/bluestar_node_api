const express = require("express");
const router = express.Router();

const { createRoleType } = require("./create");
const { getRoleTypeList } = require("./list");
const { deleteRole } = require("./delete");
const { verifyToken } = require("../../utils");

router.post("/create", verifyToken, createRoleType);
router.get("/list", verifyToken, getRoleTypeList);
router.put("/delete/:id", verifyToken, deleteRole);

module.exports = router;
