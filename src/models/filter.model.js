const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const filterSchema = new mongoose.Schema({
    filter_id: { type: String },
    filter_name: { type: String }
});
filterSchema.plugin(timestamps);

mongoose.model('filter', filterSchema);

module.exports = mongoose.model('filter');
