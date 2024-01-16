const { Router } = require("express");
const router = Router();

const { createSubActivity } = require("./create");
const { subActivityList } = require("./getlist");
const { getSubactivityById } = require("./getbyid");
const { updateRecord } = require("./update");
const { deleteRecord } = require("./delete");

router.post("/create", createSubActivity);
router.get("/list", subActivityList);
router.get("/:id", getSubactivityById);
router.put("/update/:id", updateRecord);
router.put("/remove/:id", deleteRecord);

module.exports = router;
