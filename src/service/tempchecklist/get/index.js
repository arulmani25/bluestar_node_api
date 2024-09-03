const mongoose = require('mongoose');
const model = require('../../../models/index');
const { errorMsg } = require('../../../utils');

const getTempCheckListById = async (id) => {
    const record = await model.tempCheckListModel.find({
        equipment_tag_name: id
    });
    // if (!isExist) throw new Error(errorMsg.CHECK_LIST_NOT_FOUND);
    // const record = await model.tempCheckListModel.findOne({
    //   equipment_tag_name: isExist.equipment_tag_name,
    // });
    return record;
};

module.exports = { getTempCheckListById };
