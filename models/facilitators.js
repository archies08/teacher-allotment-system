const mongoose = require('mongoose');


const facilitatorSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        unique: true
    },
    lastname: {
        type: String,
        required: true,
        unique: true
    },
    fid: {
        type: Number,
        unique: true,
        required: true
    },
    language: {
        type: String,
        required: true
    }
});


const facilitator = mongoose.model('facilitator', facilitatorSchema);

module.exports = facilitator;