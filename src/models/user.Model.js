const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const ObjectId = mongoose.Types.ObjectId;
const userSchema = new mongoose.Schema({
    user_id: { type: String },
    user_mobile_no: { type: Number },
    user_id: { type: String },
    user_password: { type: String },
    user_per_mob: { type: Number },
    user_name: { type: String },
    first_name: { type: String },
    last_name: { type: String },
    user_email: { type: String },
    user_introduced_by: { type: String },
    user_location: { type: String },
    user_mob_model: { type: String },
    user_mob_os: { type: String },
    user_mob_make: { type: String },
    device_no: { type: String },
    device_id: { type: String },
    organisation_name: { type: String },
    status: { type: String },
    mobile_issue_date: { type: String },
    Documents: { type: String },
    delete_status: { type: Boolean, default: false },
    last_login_time: { type: Date },
    last_logout_time: { type: Date },
    user_token: { type: String },
    user_type: { type: ObjectId },
    emp_type: { type: ObjectId },
    user_role: { type: String, require: true }
});
userSchema.plugin(timestamps);

mongoose.model('user', userSchema);

module.exports = mongoose.model('user');
