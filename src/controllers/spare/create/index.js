const { spareServiceController } = require('../../../service/index');
const { errorMsg, successMsg } = require('../../../utils/index');

const createSpare = async (req, res, next) => {
    try {
        const payload = req.body;

        //** service call */

        const spare = await spareServiceController.createSpare(payload);

        return res.json({
            Status: 'Success',
            Message: successMsg.SPARE_CREATED_SUCCESSFULLY,
            Data: [],
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};
module.exports = { createSpare };
