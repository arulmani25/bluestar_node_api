const { roleServiceController } = require('../../../service/index');

const { errorMsg, successMsg } = require('../../../utils/index');

const deleteRole = async (req, res, next) => {
    try {
        const { id } = req.params;

        //** service call */

        const data = await roleServiceController.deleteRole(id);

        if (!data) throw new Error(errorMsg.RECORD_NOT_FOUND_TO_DELETE);

        return res.json({
            Status: 'Success',
            Message: successMsg.RECORD_DELETED_SUCCESSFULLY,
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { deleteRole };
