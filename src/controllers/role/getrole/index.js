const { roleServiceController } = require('../../../service/index');

const { errorMsg, successMsg } = require('../../../utils/index');

const getRole = async (req, res, next) => {
    try {
        const { id } = req.params;

        //** service call */

        const data = await roleServiceController.getRole(id);

        return res.json({
            Status: 'Success',
            Message: successMsg.DATA_RETRIVED_SUCCESSFULLY,
            Data: data,
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { getRole };
