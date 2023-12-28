const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const objectId = mongoose.Schema.ObjectId;
const checkListSchema = new mongoose.Schema({
  cat_id: { type: String },
  index: { type: Number },
  field_name: { type: String },
  field_type: { type: String },
  field_length: { type: String },
  field_comments: { type: String },
  field_value: { type: String },
  drop_down: { type: Array },
  ac_list: { type: Array },
  field_update_reason: { type: String },
  date_of_create: { type: Date },
  date_of_update: { type: Date },
  created_by: { type: objectId },
  updated_by: { type: objectId },
  activity_id: { type: objectId },
  sub_activity_id: { type: objectId },
  delete_status: { type: Boolean, default: false },
  field_required: { type: Boolean },
});
mongoose.model("checklist", checkListSchema);
checkListSchema.plugin(timestamps);
module.exports = mongoose.model("checklist");

