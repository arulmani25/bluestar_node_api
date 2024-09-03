const { checkListServiceController } = require('../../../service/index');
const { successMsg } = require('../../../utils');

const getCheckListToEdit = async (req, res, next) => {
    try {
        const { id } = req.params;

        const record = await checkListServiceController.getSubmittedChecklist(id);

        return res.json({
            Status: 'Success',
            Message: successMsg.DATA_RETRIVED_SUCCESSFULLY,
            Data: { ...record[0], ...record[1] },
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { getCheckListToEdit };
