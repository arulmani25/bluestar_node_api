const model = require('../../../models/index');
const { errorMsg } = require('../../../utils');

const checkSubmission = async (id) => {
    const isExist = await model.submitchecklistModel.findOne({
        equipment_tag_name: id
    });
    return isExist;
};

module.exports = { checkSubmission };
