const { temperatureFormServiceController } = require('../../../service/index');
const { successMsg } = require('../../../utils');

const addTitle = async (req, res, next) => {
    try {
        const { title } = req.body;
        const record = await temperatureFormServiceController.addTitle(title);

        return res.json({
            Status: 'Success',
            Message: successMsg.RECORD_UPDATED_SUCCESSFULLY,
            Data: record,
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { addTitle };
