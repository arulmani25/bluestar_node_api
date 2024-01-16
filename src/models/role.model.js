const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const roleSchema = new mongoose.Schema({
  role_type: { type: String },
  is_active: { type: Boolean, default: true },
});
roleSchema.plugin(timestamps);

mongoose.model("role", roleSchema);

module.exports = mongoose.model("role");
