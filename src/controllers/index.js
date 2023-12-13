const { Router } = require("express");
const adminController = require("./admin");

const apiRouter = Router();

apiRouter.use("/admin", adminController);

module.exports = { apiRouter };
