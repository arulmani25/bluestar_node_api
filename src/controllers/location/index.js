const express = require("express");
const router = express.Router();

const { createLocation } = require("./create");
const { getLocationList } = require("./list");
const { deleteLocation } = require("./delete");
const { getLocationById } = require("./getbyid");
const { updateLocation } = require("./update");

router.post("/create", createLocation);
router.get("/list", getLocationList);
router.get("/:id", getLocationById);
router.put("/remove/:id", deleteLocation);
router.put("/update/:id", updateLocation);

module.exports = router;
