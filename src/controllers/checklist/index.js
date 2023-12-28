const { Router } = require("express");
const router = Router();

const { createCheckList } = require("./create");
const { getCheckList } = require("./getlist");
const { getCheckListById } = require("./getbyid");
const { activityDropDown } = require("./activitydropdown");
const { subActivityDropDown } = require("./subActivityDropdown");
const { updateCheckList } = require("./update");
const { deleteCheckList } = require("./delete");

router.post("/create", createCheckList);
router.get("/list", getCheckList);
router.get("/activitydropdown", activityDropDown);
router.get("/subactivitydropdown/:id", subActivityDropDown);
router.put("/update/:id", updateCheckList);
router.put("/delete/:id", deleteCheckList);
router.get("/:id", getCheckListById);

module.exports = router;
