const { Router } = require("express");
const router = Router();
const { verifyToken } = require("../../utils/jwt");

const { createSpare } = require("./create");
const { spareList } = require("./list");
const { deleteSpare } = require("./delete");
const { editSpare } = require("./edit");

router.post("/create", verifyToken, createSpare);
router.get("/list", verifyToken, spareList);
router.put("/delete/:id", verifyToken, deleteSpare);
router.put("/edit/:id", verifyToken, editSpare);

module.exports = router;
