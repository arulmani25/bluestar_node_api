const { locationServiceController } = require('../../../service/index');
const { errorMsg, successMsg } = require('../../../utils/message');

const createLocation = async (req, res, next) => {
    try {
        const payload = req.body;

        const data = await locationServiceController.createLocation(payload);
        if (!data) throw new Error(errorMsg.FAILED_TO_CREATE_MAIN_GROUP);
        return res.json({
            Status: 'Success',
            Message: successMsg.MAIN_LOCATION_CREATED_SUCCESSFULLY,
            Data: [],
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { createLocation };
