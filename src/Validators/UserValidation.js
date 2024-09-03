const { check } = require('express-validator');

const Validate = {
    /**
     *
     * @returns
     */
    updatePassword: () => {
        return [
            check('id', 'please enter id').notEmpty().trim(),
            // check('current_password', 'please enter current_password').notEmpty().trim(),
            check('new_password', 'please enter new_password').notEmpty().trim()
        ];
    }
};
module.exports = Validate;
