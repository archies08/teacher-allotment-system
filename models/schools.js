const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/dschoolDB", { useNewUrlParser: true });
// const sampleSchema = new mongoose.Schema({
//     userName: String,
//     password: String,
//     handle: String,
//     todoList: [{
//         contestId: String,
//         name: String
//     }],
//     rejList: [{
//         contestId: String,
//         name: String
//     }]
// });
const schoolSchema = new mongoose.Schema({
    schoolname: {
        type: String,
        required: true,
        unique: true
    },
    schoolid: {
        type: Number,
        unique: true,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    group: {
        type: String,
    },
    language: {
        type: String,
        required: true
    },
    day: {
        type: String,
    },
    start_Time: {
        type: Number,
    }
});


const schoolSchema = mongoose.model('schoolSchema', schoolSchema);

module.exports = schoolSchema;