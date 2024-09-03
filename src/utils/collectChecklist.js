const model = require('../models/index');

const collectChecklists = async (equipment_tag_name) => {
    const checklistByMonth = await model.submitchecklistModel.find({
        // check_list_type: { $in: month },
        equipment_tag_name: equipment_tag_name
    });
    return checklistByMonth;
};

module.exports = { collectChecklists };
