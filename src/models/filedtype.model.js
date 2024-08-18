const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const fieldTypeSchema = new mongoose.Schema({
    fieldtype_id: { type: String },
    field_name: { type: String }
});
fieldTypeSchema.plugin(timestamps);

mongoose.model('fieldtype', fieldTypeSchema);

module.exports = mongoose.model('fieldtype');
