/* eslint-disable no-undef */
const Express = require('express');
const Router = Express.Router();
const EquipmentsTagController = require('./EquipmentsTagController');
const { isEmpty } = require('../../helpers/Utils');
const { sendFailureMessage, sendSuccessData } = require('../../config/Responder');
const { validationResult } = require('express-validator');
const { createEquipmentsTag } = require('../../Validators/EquipmentsTagValidation');

Router.post('/create', createEquipmentsTag(), async (request, response) => {
    try {
        let hasErrors = validationResult(request);
        if (hasErrors.isEmpty()) {
            let { error, message, data } = await EquipmentsTagController.Create(request?.body);
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

Router.get('/list', async (request, response) => {
    try {
        let { error, message, data } = await EquipmentsTagController.List(request?.query);
        if (!isEmpty(data) && error === false) {
            return sendSuccessData(response, message, data);
        }
        return sendFailureMessage(response, message, 400);
    } catch (error) {
        return sendFailureMessage(response, error, 500);
    }
});

Router.patch('/update', async (request, response) => {
    try {
        let { error, message, data } = await EquipmentsTagController.Update(request?.body);
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
        let { error, message, data } = await EquipmentsTagController.deleteEquipmentsTag(request);
        if (error === false) {
            return sendSuccessData(response, message, data);
        }
        return sendFailureMessage(response, message, 400);
    } catch (error) {
        return sendFailureMessage(response, error, 500);
    }
});

Router.patch('/update_qr', async (request, response) => {
    try {
        let { error, message, data } = await EquipmentsTagController.UpdateQR(request?.body);
        if (!isEmpty(data) && error === false) {
            return sendSuccessData(response, message, data);
        }
        return sendFailureMessage(response, message, 400);
    } catch (error) {
        return sendFailureMessage(response, error, 500);
    }
});

module.exports = Router;
