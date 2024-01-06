const { Router } = require("express");

const apiRouter = Router();

const adminController = require("./admin");
const userController = require("./user");
const mainActivityController = require("./mainActivity");
const subActivityController = require("./subActivity");
const checkListController = require("./checklist");
const mobileController = require("./mobile");
const userTypeController = require("./userType");
const roleTypeController = require("./role");
const equipmentController = require("./equipments");
const tempCheckListController = require("./tempchecklist");
const jobController = require("./jobs");
const locationController = require("./location");
const subLocationController = require("./sublocation");

apiRouter.use("/admin", adminController);
apiRouter.use("/user", userController);
apiRouter.use("/mainactivity", mainActivityController);
apiRouter.use("/subactivity", subActivityController);
apiRouter.use("/checklist", checkListController);
apiRouter.use("/mobile", mobileController);
apiRouter.use("/usertype", userTypeController);
apiRouter.use("/role", roleTypeController);
apiRouter.use("/equipment", equipmentController);
apiRouter.use("/temp", tempCheckListController);
apiRouter.use("/jobs", jobController);
apiRouter.use("/location", locationController);
apiRouter.use("/sublocation", subLocationController);

module.exports = apiRouter;
