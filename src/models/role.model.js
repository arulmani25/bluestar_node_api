const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const objectId = mongoose.Types.ObjectId;
const roleSchema = new mongoose.Schema({
    role_id: { type: String },
    role_type: { type: String },
    user_type: { type: objectId },
    is_active: { type: Boolean, default: true }
});
roleSchema.plugin(timestamps);

mongoose.model('role', roleSchema);

module.exports = mongoose.model('role');
