const { temperatureFormServiceController } = require('../../../service/index');

const { errorMsg, successMsg } = require('../../../utils/index');

const editTitle = async (req, res, next) => {
    try {
        const { id } = req.params;

        //** service call */

        const data = await temperatureFormServiceController.editTitle(id, req.body);

        if (!data) throw new Error(errorMsg.RECORD_NOT_FOUND_TO_DELETE);

        return res.json({
            Status: 'Success',
            Message: successMsg.RECORD_UPDATED_SUCCESSFULLY,
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { editTitle };
