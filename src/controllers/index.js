const { Router } = require("express");

const apiRouter = Router();

const adminController = require("./admin");
const userController = require("./user");
const mainActivityController = require("./mainActivity");
const subActivityController = require("./subActivity");
const checkListController = require("./checklist");
const mobileController = require("./mobile");

apiRouter.use("/admin", adminController);
apiRouter.use("/user", userController);
apiRouter.use("/mainactivity", mainActivityController);
apiRouter.use("/subactivity", subActivityController);
apiRouter.use("/checklist", checkListController);
apiRouter.use("/mobile", mobileController);

module.exports = apiRouter;
