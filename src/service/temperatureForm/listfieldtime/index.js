const model = require('../../../models/index');
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const listTemeperaturelogsFieldTime = async (payload) => {
    const { searchKey, skip, limit, sortkey, sortOrder, titleId } = payload;

    const sort = { [sortkey]: !sortOrder || sortOrder === 'DESC' ? -1 : 1 };

    const searchRegex = new RegExp(['^.*', searchKey, '.*$'].join(''), 'i');

    const list = await model.temperaturelogForms.findOne({ titleId: titleId });
    return list;
};

module.exports = { listTemeperaturelogsFieldTime };
