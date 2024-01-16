const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const equipmentSchema = new mongoose.Schema({
  equipment_tag: { type: String },
  type: { type: String },
  location: { type: String },
  sub_location: { type: String },
  is_active: { type: Boolean, default: true },
  qrcode: { type: String },
});
equipmentSchema.plugin(timestamps);
mongoose.model("equipments", equipmentSchema);
module.exports = mongoose.model("equipments");
