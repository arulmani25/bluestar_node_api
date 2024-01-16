const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const objectId = mongoose.Schema.ObjectId;
const mainActivitySchema = new mongoose.Schema({
  index: { type: Number },
  master_location: { type: String },
  sub_location: { type: String },
  activity_code: { type: String },
  activity_name: { type: String },
  // activity_type: { type: objectId },
  description: { type: String },
  delete_status: { type: Boolean, default: false },
  created_by: { type: objectId },
});

mainActivitySchema.plugin(timestamps);

mongoose.model("mainactivity", mainActivitySchema);

module.exports = mongoose.model("mainactivity");
