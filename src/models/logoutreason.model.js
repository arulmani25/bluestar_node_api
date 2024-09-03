const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const logoutReasonListSchema = new mongoose.Schema({
    logoutreason_id: { type: String },
    logout_reason: { type: String }
});
logoutReasonListSchema.plugin(timestamps);

mongoose.model('logoutreason', logoutReasonListSchema);

module.exports = mongoose.model('logoutreason');
