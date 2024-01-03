const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const equipmentSchema = new mongoose.Schema({
  equipement_tag: { type: String },
  type: { type: String },
  location: { type: String },
  sub_location: { type: String },
  is_active: { type: Boolean, default: true },
});
equipmentSchema.plugin(timestamps);
mongoose.model("equipments", equipmentSchema);
module.exports = mongoose.model("equipments");
