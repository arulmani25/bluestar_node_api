const { subLocationServiceController } = require('../../../service/index');
const { errorMsg, successMsg } = require('../../../utils/message');

const createSubLocation = async (req, res, next) => {
    try {
        const payload = req.body;

        const data = await subLocationServiceController.createSubLocation(payload);
        return res.json({
            Status: 'Success',
            Message: successMsg.SUB_LOCATION_CREATED_SUCCESSFULLY,
            Data: [],
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { createSubLocation };
