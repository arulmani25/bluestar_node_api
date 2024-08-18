const { userServiceController } = require('../../../service/index');
const { validationResult } = require('express-validator');
const { errorMsg, successMsg } = require('../../../utils/index');
const { isEmpty } = require('../../../helpers/Utils');
const { sendFailureMessage } = require('../../../config/Responder');

const updateUserRecord = async (req, res, next) => {
    try {
        const { id } = req.params;

        const payload = req.body;

        const data = await userServiceController.updateUserRecord(id, payload);

        if (!data) throw new Error(errorMsg.RECORD_NOT_FOUND_TO_UPDATE);

        return res.json({
            Status: 'Success',
            Message: successMsg.RECORD_UPDATED_SUCCESSFULLY,
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};

const updateUserPassword = async (req, res, next) => {
    try {
        let hasErrors = validationResult(req);
        const requestData = req?.body;
        if (hasErrors.isEmpty()) {
            let updateRecord = await userServiceController.updateUserPassword(requestData, res);
            if (updateRecord) {
                return res.json({
                    Status: 'Success',
                    Message: successMsg.PASSWORD_UPDATED_SUCCESSFULLY,
                    Code: 200
                });
            } else {
                return sendFailureMessage(res, 'pasword updated failure', 422);
            }
        } else {
            return sendFailureMessage(res, hasErrors?.errors[0]?.msg, 422);
        }
    } catch (error) {
        next(error);
    }
};

module.exports = { updateUserRecord, updateUserPassword };
