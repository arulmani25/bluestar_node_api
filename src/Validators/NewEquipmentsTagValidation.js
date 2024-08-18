const { check } = require('express-validator');

const Validate = {
    /**
     * create newequipments tag
     * @returns
     */
    createNewEquipmentsTag: () => {
        return [
            check('equipment_tag', 'please enter the equipment_tag').notEmpty().trim(),
            check('type', 'please enter type').notEmpty().trim(),
            check('location', 'please enter location').notEmpty().trim(),
            check('sub_location', 'please enter sub_location').notEmpty().trim(),
            check('cobie_tag', 'please enter cobie_tag value').notEmpty().trim()
        ];
    },
    /**
     * update newequipments tag
     * @returns
     */
    updateNewEquipmentsTag: () => {
        return [
            check('equipment_tag', 'please enter the equipment_tag').notEmpty().trim(),
            check('type', 'please enter type').notEmpty().trim(),
            check('location', 'please enter location').notEmpty().trim(),
            check('sub_location', 'please enter sub_location').notEmpty().trim(),
            check('cobie_tag', 'please enter cobie_tag value').notEmpty().trim(),
            check('qrcode', 'please enter qrcode').notEmpty().trim()
        ];
    }
};
module.exports = Validate;
