const express = require("express");
const router = express.Router();

const { createMainGroup } = require("./create");
const { getGroupList } = require("./getlist");
const { getGroupById } = require("./getbyid");
const { deleteGroup } = require("./delete");
const { updateRecord } = require("./update");

router.post("/create", createMainGroup);
router.get("/list", getGroupList);
router.get("/:id", getGroupById);
router.put("/remove/:id", deleteGroup);
router.put("/update/:id", updateRecord);

module.exports = router;
