const mongo = require('mongoose');
const { stringify } = require('querystring');

const SchoolSchema = mongo.Schema({
    name: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    teacherassigned: {
        type: String,
        default: 0
    },
})

const SchoolSchema1 = mongo.model('SchoolSchema', SchoolSchema);

// const newteach = new SchoolSchema1({
//     name: "Tilak Nagar",
//     class: "5",
//     grade: "A",
//     day: "Monday",
//     time: 800,
//     language: 'Hindi',
// });
// newteach.save();
// const newteach2 = new SchoolSchema1({
//     name: "Tilak Nagar",
//     class: "5",
//     grade: "B",
//     day: "Tuesday",
//     time: 1400,
//     language: 'English',
// });
// newteach2.save();
// const newteach3 = new SchoolSchema1({
//     name: "MGM",
//     class: "6",
//     grade: "A",
//     day: "Monday",
//     time: 900,
//     language: 'Hindi',
// });
// newteach3.save();
// const newteach4 = new SchoolSchema1({
//     name: "MGM",
//     class: "6",
//     grade: "B",
//     day: "Wednesday",
//     time: 1200,
//     language: 'Hindi',
// });

// newteach4.save();

module.exports = SchoolSchema1;