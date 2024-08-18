const { temperatureFormServiceController } = require('../../../service/index');
const { successMsg } = require('../../../utils');

const addLogField = async (req, res, next) => {
    try {
        const { titleId, logField } = req.body;
        const record = await temperatureFormServiceController.addLogField(titleId, logField);

        return res.json({
            Status: 'Success',
            Message: successMsg.DATA_RETRIVED_SUCCESSFULLY,
            Data: record,
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { addLogField };
