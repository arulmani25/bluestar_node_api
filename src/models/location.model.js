const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const locationSchema = new mongoose.Schema({
    mainlocation_id: { type: String },
    main_location: { type: String },
    is_active: { type: Boolean, default: true }
});
locationSchema.plugin(timestamps);
mongoose.model('mainlocation', locationSchema);
module.exports = mongoose.model('mainlocation');
