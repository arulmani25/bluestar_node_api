const { Router } = require('express');

const mobileRouter = Router();

const adminController = require('./admin');
const checkListController = require('./checklist');
const userContoller = require('./user');
const mainActivityController = require('./mainactivity');
const ticketController = require('./ticket');
const reportController = require('./reports');

mobileRouter.use('/admin', adminController);
mobileRouter.use('/checklist', checkListController);
mobileRouter.use('/user', userContoller);
mobileRouter.use('/activity', mainActivityController);
mobileRouter.use('/ticket', ticketController);
mobileRouter.use('/report', reportController);

module.exports = mobileRouter;
