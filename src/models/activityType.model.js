const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const objectId = mongoose.Types.ObjectId;
const activityTypeSchema = new mongoose.Schema({
  user_type: { type: String },
  created_by: { type: objectId },
  updated_by: { type: objectId },
  is_active: { type: Boolean, default: true },
});
activityTypeSchema.plugin(timestamps);
mongoose.model("activitytype", activityTypeSchema);
module.exports = mongoose.model("activitytype");
