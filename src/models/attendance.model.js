const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const objectId = mongoose.Types.ObjectId;

const attendanceSchema = new mongoose.Schema({
    attendance_id: { type: String },
    user_id: { type: objectId },
    user_mobile_no: { type: Number },
    att_status: { type: String },
    att_reason: { type: String },
    att_date: { type: Date },
    att_start_lat: { type: String },
    att_start_long: { type: String },
    att_start_time: { type: String },
    login_lat: { type: String },
    login_long: { type: String },
    login_address: { type: String },
    logout_lat: { type: String },
    logout_long: { type: String },
    logout_address: { type: String }
});

attendanceSchema.plugin(timestamp);

mongoose.model('attendance', attendanceSchema);

module.exports = mongoose.model('attendance');
