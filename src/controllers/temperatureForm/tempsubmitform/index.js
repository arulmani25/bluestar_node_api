const { temperatureFormServiceController } = require('../../../service/index');
const { errorMsg, successMsg } = require('../../../utils/index');

const tempsubmitForm = async (req, res, next) => {
    try {
        const payload = req.body;

        //** service call */

        const form = await temperatureFormServiceController.temperorySubmitLog(payload);

        return res.json({
            Status: 'Success',
            Message: successMsg.FORM_SUBMITTED_SUCCESSFULLY,
            Data: [],
            Code: 200
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};
module.exports = { tempsubmitForm };
