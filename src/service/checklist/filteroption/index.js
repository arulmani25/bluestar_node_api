const model = require('../../../models/index');
const { errorMsg } = require('../../../utils');

const filterOption = async () => {
    const record = await model.filterModel.find({});
    return record;
};

module.exports = { filterOption };
