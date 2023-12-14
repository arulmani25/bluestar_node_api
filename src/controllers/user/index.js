const { Router } = require("express");
const router = Router();

const { createUser } = require("./create");
const { getUserList } = require("./list");
const { getUserById } = require("./getbyid");

router.post("/create", createUser);
router.get("/list", getUserList);
router.get("/getbyid/:id", getUserById);

module.exports = router;
