const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const objectId = mongoose.Schema.ObjectId;
const logoutReasonListSchema = new mongoose.Schema({
  reason: { type: String },
});
logoutReasonListSchema.plugin(timestamps);

mongoose.model("logoutreason", logoutReasonListSchema);

module.exports = mongoose.model("logoutreason");
