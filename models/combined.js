const mongoose = require('mongoose');

const combinedSchema = new mongoose.Schema({
    school_id: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'dsamples'
    },
    facilitator_id: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: ''
    },
    start_time:{
        type:Date,
        required:true
    },
    day:{
        type:String,
        required:true
    }
}, {
    timestamps: true
});


const combined = mongoose.model('combined', combinedSchema);

module.exports = combined;