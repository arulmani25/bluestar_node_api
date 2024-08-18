const { roleServiceController } = require('../../../service/index');
const { errorMsg, successMsg } = require('../../../utils/index');

const createRoleType = async (req, res, next) => {
    try {
        const payload = req.body;

        //** service call */

        const user = await roleServiceController.createRole(payload);

        return res.json({
            Status: 'Success',
            Message: successMsg.ROLE_CREATED_SUCCESSFULLY,
            Data: [],
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};
module.exports = { createRoleType };
