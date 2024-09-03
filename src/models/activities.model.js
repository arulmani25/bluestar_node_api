const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const objectId = mongoose.Types.ObjectId;
const activitiesSchema = new mongoose.Schema({
    activity_id: { type: String },
    activity_name: { type: String },
    created_by: { type: objectId },
    updated_by: { type: objectId },
    is_active: { type: Boolean, default: true }
});
activitiesSchema.plugin(timestamps);
mongoose.model('activities', activitiesSchema);
module.exports = mongoose.model('activities');
