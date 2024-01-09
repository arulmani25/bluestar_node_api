const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const objectId = mongoose.Types.ObjectId;
const submitChecklistSchema = new mongoose.Schema({
  user_mobile_no: { type: Number },
  data_store: [
    {
      filter_type: { type: String },
      description: [
        {
          activites_to_check: { type: String },
          status: { type: String },
        },
      ],
    },
  ],
  equipment_tag: { type: objectId },
});
submitChecklistSchema.plugin(timestamps);
mongoose.model("submitchecklist", submitChecklistSchema);
module.exports = mongoose.model("submitchecklist");
