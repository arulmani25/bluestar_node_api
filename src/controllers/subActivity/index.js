const { Router } = require("express");
const router = Router();

const { createSubActivity } = require("./create");
const { subActivityList } = require("./getlist");
const { getSubactivityById } = require("./getbyid");
const { updateRecord } = require("./update");
const { deleteRecord } = require("./delete");
const { verifyToken } = require("../../utils");

router.post("/create", verifyToken, createSubActivity);
router.get("/list", verifyToken, subActivityList);
router.get("/:id", verifyToken, getSubactivityById);
router.put("/update/:id", verifyToken, updateRecord);
router.put("/remove/:id", verifyToken, deleteRecord);

module.exports = router;
