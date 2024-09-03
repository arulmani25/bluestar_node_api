const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const objectId = mongoose.Types.ObjectId;
const userTypeSchema = new mongoose.Schema({
    usertype_id: { type: String },
    user_type: { type: String },
    created_by: { type: objectId },
    updated_by: { type: objectId },
    is_active: { type: Boolean, default: true }
});
userTypeSchema.plugin(timestamps);
mongoose.model('usertype', userTypeSchema);
module.exports = mongoose.model('usertype');
