const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const adminSchema = new mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String },
  status: { type: String },
  email_id: { type: String },
  mobile_no: { type: String },
  user_name: { type: String },
  password: { type: String },
  confirm_password: { type: String },
  access_location: { type: Array },
  delete_status: { type: Boolean, default: false },
  last_login: { type: Date },
  role: { type: String },
  employee_detail: { type: Array },
});
mongoose.model("admin", adminSchema);
adminSchema.plugin(timestamps);
module.exports = mongoose.model("admin");
