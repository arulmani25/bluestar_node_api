const express = require("express");
const router = express.Router();

const { createSubLocation } = require("./create");
const { getSubLocationList } = require("./list");
const { deleteSubLocation } = require("./delete");
const { getSubLocationById } = require("./getbyid");
const { updateSubLocation } = require("./update");

router.post("/create", createSubLocation);
router.get("/list", getSubLocationList);
router.get("/:id", getSubLocationById);
router.put("/remove/:id", deleteSubLocation);
router.put("/update/:id", updateSubLocation);

module.exports = router;
