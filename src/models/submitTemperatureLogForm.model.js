const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const submitTemperatureLogFormSchema = new mongoose.Schema({
  titleName: { type: String },
  titleId: { type: mongoose.Types.ObjectId },
  logs: { type: Array },
  DutyTechnicianName: { type: String, default: "" },
  DutyTechnicianSign: { type: String, default: "" },
  BSLDutyEngineer: { type: String, default: "" },
  BSLDutyEngineerSign: { type: String, default: "" },
  BIALShiftEngineer: { type: String, default: "" },
  BIALShiftEngineerSign: { type: String, default: "" },
  OperatorName: { type: String, default: "" },
  SupervisorSign: { type: String, default: "" },
});
submitTemperatureLogFormSchema.plugin(timestamps);

mongoose.model(
  "submitted_temperature_log_form",
  submitTemperatureLogFormSchema
);

module.exports = mongoose.model("submitted_temperature_log_form");
