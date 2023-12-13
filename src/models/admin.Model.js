const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const adminSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  status: String,
  email_id: String,
  mobile_no: String,
  user_name: String,
  password: String,
  confirm_password: String,
  access_location: Array,
  delete_status: String,
  last_login: Date,
  role: String,
  employee_detail: Array,
});
mongoose.model("admin", adminSchema);
adminSchema.plugin(timestamps);
module.exports = mongoose.model("admin");
