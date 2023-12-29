const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const activityTypeSchema = new mongoose.Schema({
  activity_name: { type: String },
  created_by: { type: String },
  updated_by: { type: String },
  is_active: { type: String },
});
mongoose.model("activitytype", activityTypeSchema);
activityTypeSchema.plugin(timestamps);
module.exports = mongoose.model("activitytype");
