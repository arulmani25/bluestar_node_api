const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const documentSchema = new mongoose.Schema({
  path: { type: String },
  tag_name: { type: String },
  checklist_date: { type: Date },
});
documentSchema.plugin(timestamps);

mongoose.model("document", documentSchema);

module.exports = mongoose.model("document");
