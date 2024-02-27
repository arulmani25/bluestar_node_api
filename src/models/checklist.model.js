const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const objectId = mongoose.Schema.ObjectId;
const { filterByOption } = require("../utils/enum");
const checkListSchema = new mongoose.Schema({
  cobie_tag: { type: String, required: true },
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
  main_activity_id: { type: objectId },
  sub_activity_id: { type: objectId },
  delete_status: { type: Boolean, default: false },
  field_required: { type: Boolean },
  activity_type: { type: objectId },
  equipment_tag: { type: objectId },
  equipment_tag_name: { type: String },
  check_list_type: {
    type: String,
    enum: [
      filterByOption.halfYearly,
      filterByOption.monthly,
      filterByOption.quarterly,
      filterByOption.yearly,
    ],
    required: true,
  },
});
checkListSchema.plugin(timestamps);

mongoose.model("checklist", checkListSchema);

module.exports = mongoose.model("checklist");
