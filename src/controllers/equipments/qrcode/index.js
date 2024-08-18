const { equipmentServiceController } = require('../../../service/index');
const { successMsg } = require('../../../utils');

const generateQrCode = async (req, res) => {
    try {
        const code = await equipmentServiceController.generateCode();

        if (code) {
            return res.json({
                Status: 'Success',
                Message: successMsg.RECORD_UPDATED_SUCCESSFULLY,
                Data: code,
                Code: 200
            });
        }
    } catch (error) {
        return res.json({
            Status: true,
            Message: error.message,
            Code: 404
        });
    }
};

module.exports = { generateQrCode };
