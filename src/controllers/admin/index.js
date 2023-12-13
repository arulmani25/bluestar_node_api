const { Router } = require("express");
const router = Router();

const { createAdmin } = require("./create");
router.post("/create", createAdmin);

// router.post("/create", createAdmin);

module.exports = { router };
