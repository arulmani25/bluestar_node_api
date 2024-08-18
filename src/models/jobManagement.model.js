var mongoose = require('mongoose');
const objectId = mongoose.Types.ObjectId;
var timestamps = require('mongoose-timestamp');
const { jobStatus } = require('../utils/enum');
var jobManagementSchema = new mongoose.Schema({
    jobmanagement_id: { type: String },
    equipment_tag: { type: objectId },
    reporter_name: { type: String },
    reporter_mobile_no: { type: Number },
    activity_type: { type: String },
    mechanic_user_name: { type: String },
    mechanic_mobile_no: { type: Number },
    emp_code: { type: String },
    checklist_checked: { type: String, enum: ['YES', 'NO'] },
    job_status: {
        type: String,
        enum: [jobStatus.notStarted, jobStatus.paused, jobStatus.started, jobStatus.submitted],
        default: jobStatus.notStarted
    },
    last_updated_time: { type: Date },
    job_start_time: { type: Date },
    job_end_time: { type: Date },
    job_location: { type: Date },
    job_start_lat: { type: Date },
    job_start_log: { type: Date },
    job_end_lat: { type: String },
    job_end_log: { type: String },
    current_and_last_update_time: { type: Date },
    file_image: { type: Array },
    deleteStatus: {
        type: Boolean,
        default: false
    },
    remarks: { type: String },
    ticket_Id: { type: objectId }
});

jobManagementSchema.plugin(timestamps);

mongoose.model('jobmanagement', jobManagementSchema);

module.exports = mongoose.model('jobmanagement');
