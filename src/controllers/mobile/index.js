const { Router } = require("express");

const mobileRouter = Router();

const authController = require("./auth");
const checkListController = require("./checklist");

mobileRouter.use("/auth", authController);
mobileRouter.use("/checklist", checkListController);

module.exports = mobileRouter;
