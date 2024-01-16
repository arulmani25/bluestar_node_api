const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const objectId = mongoose.Types.ObjectId;
const temp_checklistSchema = new mongoose.Schema({
  user_mobile_no: { type: Number },
  data_store: [
    {
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
      activity_type: { type: objectId }
    },
  ],
  equipment_tag: { type: objectId },
});
temp_checklistSchema.plugin(timestamps);
mongoose.model("temp_checklist", temp_checklistSchema);
module.exports = mongoose.model("temp_checklist");
