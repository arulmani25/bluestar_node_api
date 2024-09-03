const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const equipmentSchema = new mongoose.Schema({
    equipments_id: { type: String },
    equipment_tag: { type: String },
    type: { type: String },
    location: { type: String },
    sub_location: { type: String },
    is_active: { type: Boolean, default: true },
    qrcode: { type: String },
    cobie_tag: { type: String },
    Jan: { type: String, default: '' },
    Feb: { type: String, default: '' },
    Mar: { type: String, default: '' },
    Apr: { type: String, default: '' },
    May: { type: String, default: '' },
    Jun: { type: String, default: '' },
    Jul: { type: String, default: '' },
    Aug: { type: String, default: '' },
    Sep: { type: String, default: '' },
    Oct: { type: String, default: '' },
    Nov: { type: String, default: '' },
    Dec: { type: String, default: '' }
});
equipmentSchema.plugin(timestamps);
mongoose.model('equipments', equipmentSchema);
module.exports = mongoose.model('equipments');
