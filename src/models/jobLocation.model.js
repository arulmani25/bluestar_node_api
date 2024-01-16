var mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;
var timestamps = require("mongoose-timestamp");
var jobTrackingSchema = new mongoose.Schema({
  equipment_tag: { type: objectId },
  user_mobile_no: { type: String },
  location_text: { type: String },
  loc_lat: { type: String },
  loc_long: { type: String },
  date: { type: Date, default: Date.now() },
  km: { type: String },
  remarks: { type: String },
});
jobTrackingSchema.plugin(timestamps);

mongoose.model("job_tracking", jobTrackingSchema);

module.exports = mongoose.model("job_tracking");
