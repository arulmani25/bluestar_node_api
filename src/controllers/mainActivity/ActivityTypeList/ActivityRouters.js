const Express = require('express');
const Router = Express.Router();
const MainActivityControllers = require('./MainActivityControllers');
const { isEmpty } = require('../../../helpers/Utils');
const { sendFailureMessage, sendSuccessData } = require('../../../config/Responder');

Router.get('/list', async (request, response) => {
    try {
        let { error, message, data } = await MainActivityControllers.getActivityTypes(request);
        console.log(error, message, data);
        if (!isEmpty(data) && error === false) {
            return sendSuccessData(response, message, data);
        }
        return sendFailureMessage(response, message, 400);
    } catch (error) {
        return sendFailureMessage(response, error, 500);
    }
});

module.exports = Router;
