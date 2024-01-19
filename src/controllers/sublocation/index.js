const express = require("express");
const router = express.Router();

const { createSubLocation } = require("./create");
const { getSubLocationList } = require("./list");
const { deleteSubLocation } = require("./delete");
const { getSubLocationById } = require("./getbyid");
const { updateSubLocation } = require("./update");
const { verifyToken } = require("../../utils");

router.post("/create", verifyToken, createSubLocation);
router.get("/list", verifyToken, getSubLocationList);
router.get("/:id", verifyToken, getSubLocationById);
router.put("/remove/:id", verifyToken, deleteSubLocation);
router.put("/update/:id", verifyToken, updateSubLocation);

module.exports = router;
