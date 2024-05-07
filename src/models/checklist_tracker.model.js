const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const checklistTrackerSchema = new mongoose.Schema({
  equipment_tag: { type: String },
  day_of_month: { type: Number },
});
checklistTrackerSchema.plugin(timestamps);

mongoose.model("checklist_tracker", checklistTrackerSchema);

module.exports = mongoose.model("checklist_tracker");
