const { Router } = require("express");

const apiRouter = Router();

const adminController = require("./admin");
const userController = require("./user")

apiRouter.use("/admin", adminController);
apiRouter.use("/user", userController);

module.exports = apiRouter;
