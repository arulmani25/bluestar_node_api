const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const temperatureLogsTitleSchema = new mongoose.Schema({
    temperature_logs_title_id: { type: String },
    title: { type: String },
    isActive: { type: Boolean, default: true }
});
temperatureLogsTitleSchema.plugin(timestamps);

mongoose.model('temperature_logs_title', temperatureLogsTitleSchema);

module.exports = mongoose.model('temperature_logs_title');
