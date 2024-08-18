const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const checklistValidationSchema = new mongoose.Schema({
    checklistvalidation_id: { type: String },
    equipment_tag: { type: String },
    type: { type: String },
    location: { type: String },
    sub_location: { type: String },
    is_active: { type: Boolean, default: true },
    qrcode: { type: String },
    cobie_tag: { type: String },
    Jan: { type: String, default: 'not checked' },
    Feb: { type: String, default: 'not checked' },
    Mar: { type: String, default: 'not checked' },
    Apr: { type: String, default: 'not checked' },
    Mar: { type: String, default: 'not checked' },
    Jun: { type: String, default: 'not checked' },
    Jul: { type: String, default: 'not checked' },
    Aug: { type: String, default: 'not checked' },
    Sep: { type: String, default: 'not checked' },
    Oct: { type: String, default: 'not checked' },
    Nov: { type: String, default: 'not checked' },
    Dec: { type: String, default: 'not checked' }
});
checklistValidationSchema.plugin(timestamps);
mongoose.model('checklistvalidation', checklistValidationSchema);
module.exports = mongoose.model('checklistvalidation');
