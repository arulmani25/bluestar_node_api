const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const ObjectId = mongoose.Types.ObjectId;
const userSchema = new mongoose.Schema({
  user_mobile_no: { type: Number },
  user_id: { type: String },
  user_password: { type: String },
  user_per_mob: { type: Number },
  user_name: { type: String },
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
  user_type: { type: String },
  emp_type: { type: ObjectId },
  login_lat: { type: String },
  login_long: { type: String },
  login_address: { type: String },
  logout_lat: { type: String },
  logout_long: { type: String },
  logout_address: { type: String },
  att_status: { type: String },
  att_date: { type: Date },
  att_start_lat: { type: String },
  att_start_long: { type: String },
  att_start_time: { type: String },
});
userSchema.plugin(timestamps);

mongoose.model("user", userSchema);

module.exports = mongoose.model("user");
