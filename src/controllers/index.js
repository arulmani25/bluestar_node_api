const { Router } = require("express");

const apiRouter = Router();

const adminController = require("./admin");
const userController = require("./user");
const mainActivityController = require("./mainActivity");
const subActivityController = require("./subActivity");
const checkListController = require("./checklist");
const mobileController = require("./mobile");
const activityTypeController = require("./activityType");
const roleTypeController = require("./role");
const equipmentController = require("./equipments");

apiRouter.use("/admin", adminController);
apiRouter.use("/user", userController);
apiRouter.use("/mainactivity", mainActivityController);
apiRouter.use("/subactivity", subActivityController);
apiRouter.use("/checklist", checkListController);
apiRouter.use("/mobile", mobileController);
apiRouter.use("/activitytype", activityTypeController);
apiRouter.use("/role", roleTypeController);
apiRouter.use("/equipment", equipmentController);

module.exports = apiRouter;
