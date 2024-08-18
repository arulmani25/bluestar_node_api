const { checkListServiceController } = require('../../../service/index');
const { errorMsg, successMsg } = require('../../../utils');

const checkSubmisson = async (req, res, next) => {
    try {
        const { id } = req.params;
        const record = await checkListServiceController.checkSubmission(id);
        if (record) {
            return res.json({
                Status: 'Success',
                Message: true,
                Data: [],
                Code: 200
            });
        } else {
            return res.json({
                Status: 'Success',
                Message: false,
                Data: [],
                Code: 200
            });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = { checkSubmisson };
