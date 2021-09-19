//const school = require('../models/schools');
//const facilitators = require('../models/facilitators');
const schoolSchema = require('../models/SchoolSchema');
const teacherSchema = require('../models/teachers');
const { render } = require('ejs');
const schedule = require('../models/scheduling');

module.exports.home = function (req, res) {
    // query
    //return 'hi';
    console.log("hi");
}