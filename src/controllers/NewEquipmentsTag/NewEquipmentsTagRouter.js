/* eslint-disable no-undef */
const Express = require('express');
const Router = Express.Router();
const NewEquipmentsTagController = require('./NewEquipmentsTagController');
const { isEmpty } = require('../../helpers/Utils');
const { sendFailureMessage, sendSuccessData } = require('../../config/Responder');
const { validationResult } = require('express-validator');
const { createNewEquipmentsTag } = require('../../Validators/NewEquipmentsTagValidation');

Router.post('/create', createNewEquipmentsTag(), async (request, response) => {
    try {
        let hasErrors = validationResult(request);
        if (hasErrors.isEmpty()) {
            let { error, message, data } = await NewEquipmentsTagController.Create(request?.body);
            if (!isEmpty(data) && error === false) {
                return sendSuccessData(response, message, data);
            }
            return sendFailureMessage(response, message, 400);
        } else {
            return sendFailureMessage(response, hasErrors?.errors[0]?.msg, 422);
        }
    } catch (error) {
        return sendFailureMessage(response, error, 500);
    }
});

Router.get('/list/:newEquipmentsId?', async (request, response) => {
    try {
        let hasErrors = validationResult(request);
        if (hasErrors.isEmpty()) {
            let { error, message, data } = await NewEquipmentsTagController.List(
                request?.query,
                request?.params?.newEquipmentsId
            );
            if (!isEmpty(data) && error === false) {
                return sendSuccessData(response, message, data);
            }
        } else {
            return sendFailureMessage(response, hasErrors?.errors[0]?.msg, 422);
        }
        return sendFailureMessage(response, message, 400);
    } catch (error) {
        return sendFailureMessage(response, error, 500);
    }
});

Router.patch('/update', async (request, response) => {
    try {
        let { error, message, data } = await NewEquipmentsTagController.Update(request?.body);
        if (!isEmpty(data) && error === false) {
            return sendSuccessData(response, message, data);
        }
        return sendFailureMessage(response, message, 400);
    } catch (error) {
        return sendFailureMessage(response, error, 500);
    }
});

Router.delete('/delete/:id?', async (request, response) => {
    try {
        let { error, message, data } = await NewEquipmentsTagController.deleteNewEquipmentsTag(request);
        if (error === false) {
            return sendSuccessData(response, message, data);
        }
        return sendFailureMessage(response, message, 400);
    } catch (error) {
        return sendFailureMessage(response, error, 500);
    }
});
// Router.use('/', Router);

module.exports = Router;
