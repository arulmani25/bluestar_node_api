const { check } = require('express-validator');

const Validate = {
    /**
     * create equipments tag
     * @returns
     */
    createEquipmentsTag: () => {
        return [
            check('equipment_tag', 'please enter the equipment_tag').notEmpty().trim(),
            check('type', 'please enter type').notEmpty().trim(),
            check('location', 'please enter location').notEmpty().trim(),
            check('sub_location', 'please enter sub_location').notEmpty().trim(),
            check('cobie_tag', 'please enter cobie_tag value').notEmpty().trim()
        ];
    }
};
module.exports = Validate;
