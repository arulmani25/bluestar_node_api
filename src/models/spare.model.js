const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const spareSchema = new mongoose.Schema({
    spare_id: { type: String },
    equipment: { type: mongoose.Types.ObjectId, ref: 'activities' },
    equipment_name: { type: String },
    spare_name: { type: String }
});
spareSchema.plugin(timestamps);

mongoose.model('spare', spareSchema);

module.exports = mongoose.model('spare');
