const { spareServiceController } = require('../../../service/index');
const { successMsg } = require('../../../utils');

const spareList = async (req, res, next) => {
    try {
        const record = await spareServiceController.listSpare(req.query);

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

module.exports = { spareList };
