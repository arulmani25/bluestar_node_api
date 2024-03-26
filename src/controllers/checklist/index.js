const { Router } = require("express");
const router = Router();
const { verifyToken } = require("../../utils/jwt");

const { createCheckList } = require("./create");
const { getCheckList } = require("./getlist");
const { getCheckListById } = require("./getbyid");
const { activityDropDown } = require("./activitydropdown");
const { subActivityDropDown } = require("./subActivityDropdown");
const { updateCheckList } = require("./update");
const { deleteCheckList } = require("./delete");
const { filterOptionList } = require("./filteroption");
const { fieldTypeList } = require("./fieldtypes");
const { getCheckListToEdit } = require("./getchecklisttoedit");

router.post("/create", verifyToken, createCheckList);
router.get("/list", verifyToken, getCheckList);
router.get("/activitydropdown", verifyToken, activityDropDown);
router.get("/subactivitydropdown/:id", verifyToken, subActivityDropDown);
router.get("/filtertype", verifyToken, filterOptionList);
router.get("/fieldtype", verifyToken, fieldTypeList);
router.put("/update/:id", verifyToken, updateCheckList);
router.put("/delete/:id", verifyToken, deleteCheckList);
router.get("/:id", verifyToken, getCheckListById);
router.get("/getsubmitchecklist/:id", getCheckListToEdit);

module.exports = router;
