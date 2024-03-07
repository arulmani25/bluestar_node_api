const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const temperatureLogsSchema = new mongoose.Schema({
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
temperatureLogsSchema.plugin(timestamps);

mongoose.model("temperature_log_form", temperatureLogsSchema);

module.exports = mongoose.model("temperature_log_form");
