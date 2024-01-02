const { Router } = require("express");

const mobileRouter = Router();

const adminController = require("./admin");
const checkListController = require("./checklist");
const userContoller = require("./user");

mobileRouter.use("/admin", adminController);
mobileRouter.use("/checklist", checkListController);
mobileRouter.use("/user", userContoller);

module.exports = mobileRouter;
