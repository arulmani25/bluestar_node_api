const mongoose = require('mongoose');
const model = require('../../../../models/index');
const objectId = mongoose.Types.ObjectId;

const uploadSign = async (payload) => {
    let record;
    if (payload.supervisor_sign === 'true') {
        record = await model.submitchecklistModel.findOneAndUpdate(
            { _id: new objectId(payload._id) },
            { supervisor_sign: payload.files.data }
        );
        return record;
    } else {
        record = await model.submitchecklistModel.findOneAndUpdate(
            { _id: payload._id },
            { incharge_sign: payload.files.data }
        );
        return record;
    }
};

module.exports = { uploadSign };
