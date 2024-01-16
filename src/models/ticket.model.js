const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const objectId = mongoose.Types.ObjectId;
const { jobStatus, priority } = require("../utils/enum");

const ticketSchema = new mongoose.Schema({
  equipment: { type: String },
  equipment_no: { type: String },
  location: { type: String },
  sub_location: { type: String },
  ticket_heading: { type: String },
  ticket_description: { type: String },
  phase:{type:String},
  type:{type:String},
  fault_description:{type:String},
  status: {
    type: String,
    enum: [
      jobStatus.Open,
      jobStatus.closed,
      jobStatus.completed,
      jobStatus.inProgress,
      jobStatus.pending,
    ],
  },
  priority: {
    type: String,
    enum: [priority.critical, priority.high, priority.low, priority.medium],
  },
});
ticketSchema.plugin(timestamps);

mongoose.model("tickets", ticketSchema);

module.exports = mongoose.model("tickets");
