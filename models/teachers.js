const mongo = require('mongoose');
const { stringify } = require('querystring');

const TeacherSchema = mongo.Schema({
    // teacherid: {
    //     type: String,
    //     required: true
    // },
    name: {
        type: String,
        required: true
    },
    class: {
        type: Number,
        required: true
    },
    language: {
        type: Array,
        required: true
    },
    day: {
        type: Array,
        default: [0, 0, 0, 0, 0]
    },
    wcount: {
        type: Number,
        default: 0
    },
    schoolid: {
        type: Array,
        default: [["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""]]
    }
})

var teachers = mongo.model('TeacherSchema', TeacherSchema);

// const newteach = new teachers({
//     //teacherid: 123,
//     name: 'Arnav',
//     class: 4,
//     language: 'Hindi',
// });

// newteach.save();

// const newteach2 = new teachers({
//     //teacherid: 124,
//     name: 'Rahul',
//     class: 6,
//     language: 'English',
// });

// newteach2.save();

module.exports = teachers;
