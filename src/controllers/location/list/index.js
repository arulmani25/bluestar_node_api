const { locationServiceController } = require('../../../service/index');
const { successMsg, errorMsg } = require('../../../utils/message');

const getLocationList = async (req, res, next) => {
    try {
        const record = await locationServiceController.mainLocationList(req.query);
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

module.exports = { getLocationList };
