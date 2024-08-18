const { temperatureFormServiceController } = require('../../../service/index');
const { successMsg } = require('../../../utils');

const listForms = async (req, res, next) => {
    try {
        const record = await temperatureFormServiceController.listForms(req.query);

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

module.exports = { listForms };
