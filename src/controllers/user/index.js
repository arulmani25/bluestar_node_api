const { Router } = require("express");
const router = Router();

const { createUser } = require("./create");
const { getUserList } = require("./list");
const { getUserById } = require("./getbyid");
const { updateUserRecord } = require("./update");
const { deleteUser } = require("./delete");

router.post("/create", createUser);
router.get("/list", getUserList);
router.get("/getbyid/:id", getUserById);
router.put("/update/:id", updateUserRecord);
router.put("/delete/:id", deleteUser);

module.exports = router;
