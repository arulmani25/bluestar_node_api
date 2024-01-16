const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const objectId = mongoose.Types.ObjectId;
const submitChecklistSchema = new mongoose.Schema({
  user_mobile_no: { type: Number },
  activity_id: { type: objectId },
  check_list_type: { type: String },
  description: [
    {
      activites_to_check: { type: String },
      status: { type: String },
    },
  ],
  gauge_inlet: { type: String },
  gauge_outlet: { type: String },
  pressure_outlet: { type: String },
  pressure_inlet: { type: String },
  total_amps: {
    r: { type: Number },
    y: { type: Number },
    b: { type: Number },
  },
  voltage: {
    ry: { type: Number },
    yb: { type: Number },
    br: { type: Number },
  },
  ahu_cfm: { type: String },
  ahu_operation_mode: { type: String },
  supply_air_temp: { type: Number },
  return_air_temp: { type: Number },
  chw_inlet_temp: { type: Number },
  maintenance_done_by: { type: objectId },
  technicians_name: { type: Array },
  shift_supervisor_name: { type: objectId },
  shift_incharge_name: { type: objectId },
  supervisor_sign: { type: String },
  incharge_sign: { type: String },
  delete_status: { type: Boolean, default: false },
  equipment_tag: { type: objectId },
});
submitChecklistSchema.plugin(timestamps);
mongoose.model("submitchecklist", submitChecklistSchema);
module.exports = mongoose.model("submitchecklist");
