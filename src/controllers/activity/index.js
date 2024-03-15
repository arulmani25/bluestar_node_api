const express = require("express");
const router = express.Router();
const { verifyToken } = require("../../utils/jwt");

const { activityList } = require("./list");
const { createActivity } = require("./create");
const { deleteActivity } = require("./delete");
const { editActivity } = require("./edit");

router.get("/list", verifyToken, activityList);
router.post("/create", verifyToken, createActivity);
router.put("/delete/:id", verifyToken, deleteActivity);
router.put("/edit/:id",verifyToken, editActivity);

module.exports = router;
