const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const equipmentSchema = new mongoose.Schema({
  equipment_tag: { type: String },
  type: { type: String },
  location: { type: String },
  sub_location: { type: String },
  is_active: { type: Boolean, default: true },
  qrcode: { type: String },
  cobie_tag: { type: String },
  Jan: { type: String },
  Feb: { type: String },
  Mar: { type: String },
  Apr: { type: String },
  May: { type: String },
  Jun: { type: String },
  Jul: { type: String },
  Aug: { type: String },
  Sep: { type: String },
  Oct: { type: String },
  Nov: { type: String },
  Dec: { type: String },
});
equipmentSchema.plugin(timestamps);
mongoose.model("equipments", equipmentSchema);
module.exports = mongoose.model("equipments");
