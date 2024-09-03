const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const objectId = mongoose.Types.ObjectId;
const logoutSchema = new mongoose.Schema({
    logout_id: { type: String },
    logout_reason: { type: String },
    logout_time: { type: Date, default: Date.now() },
    user_id: { type: objectId }
});
logoutSchema.plugin(timestamps);

mongoose.model('logout', logoutSchema);

module.exports = mongoose.model('logout');
