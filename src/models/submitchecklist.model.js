const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const objectId = mongoose.Types.ObjectId;
const submitChecklistSchema = new mongoose.Schema({
  user_mobile_no: { type: Number },
  activity_id: { type: objectId },
  equipment_tag: { type: objectId },
  equipment_tag_name: { type: String },
  start_time: { type: String },
  end_time: { type: String },
  check_list_type: { type: Array },
  check_list_time: { type: Array },
  description: [
    {
      activites_to_check: { type: String },
      status: { type: String },
    },
  ],
  unit_parameters: [
    {
      parameter: { type: String },
      value: { type: String || Number },
    },
  ],
  technicians_name: { type: Array },
  shift_supervisor_name: { type: objectId },
  shift_incharge_name: { type: objectId },
  supervisor_sign: { type: String },
  incharge_sign: { type: String },
  delete_status: { type: Boolean, default: false },
  maintenance_done_by: { type: objectId },
});
submitChecklistSchema.plugin(timestamps);
mongoose.model("submitchecklist", submitChecklistSchema);
module.exports = mongoose.model("submitchecklist");
