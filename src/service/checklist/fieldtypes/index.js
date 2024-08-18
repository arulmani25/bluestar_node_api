const model = require('../../../models/index');
const { errorMsg } = require('../../../utils');

const fieldTypes = async () => {
    const record = await model.filedTypeModel.find({});
    return record;
};

module.exports = { fieldTypes };
