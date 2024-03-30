const mongoose = require('mongoose');

const readAppConfigSchema = new mongoose.Schema({
    key: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('ReadAppConfig', readAppConfigSchema);