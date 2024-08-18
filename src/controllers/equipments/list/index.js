const { equipmentServiceController } = require('../../../service/index');

const { errorMsg, successMsg } = require('../../../utils/index');

const { encryptText } = require('../../../utils/encrypt');

const equipmentList = async (req, res, next) => {
    try {
        //** service call */

        const equipments = await equipmentServiceController.equipmentList(req.query);

        // equipments[0].data.map((el) => {
        //   el.equipment_tag = encryptText(el.equipment_tag);
        //   el.qrcode = encryptText(el.qrcode);
        // });

        return res.json({
            Status: 'Success',
            Message: successMsg.DATA_RETRIVED_SUCCESSFULLY,
            Data: equipments,
            Code: 200
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { equipmentList };
