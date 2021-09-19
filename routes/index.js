const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const homeController = require("../controllers/home_controller");
const facilitators = require("../models/facilitators");
const schoolSchema = require("../models/SchoolSchema");
const teacherSchema = require("../models/teachers");
const schedule = require("../models/scheduling");

console.log("router loaded");

router.get("/", async function (req, res) {
  //schedule.scheduleSchool("Tilak", 5, "B", "Wednesday", 800, "Hindi");
  schoolSchema.find({}, function (err, users) {
    if (err) {
      console.log(err);
    }
    else {
      for (var i = 0; i < users.length; i++) {
        //console.log(users[i].name);
        //schedule.scheduleSchool(users[i].name, users[i].class, users[i].grade, users[i].day, users[i].time, users[i].language);
      }
    }
  })

});

router.get("/facilitators", async function (req, res) {
  teacherSchema.find({}, function (err, users) {
    var userMap = {};

    teacherSchema.find({}, function (err, users) {
      // var userMap = {};

      // users.forEach(function (user) {
      //     userMap[user._id] = user;
      // });
      //console.log(users);
      res.json(users);
    });
  });
});

router.get("/schools/:schoolName/:class/:grade", async function (req, res) {
  const s_name = req.params.schoolName;
  const classs = req.params.class;
  const gradee = req.params.grade;
  console.log(s_name + classs + gradee);
  const details = await schoolSchema.find(
    { name: s_name, class: classs, grade: gradee },
    function (err, details) {
      if (err) {
        console.log(err);
      } else {
        return res.json(details);
      }
    }
  );
});

router.get("/schools", (req, res) => {
  schoolSchema.distinct("name", function (error, names) {
    if (error) console.log(error);
    else {
      //console.log(names);
      res.json(names);
    }
  });
});

router.get("/schools/:schoolName", async (req, res) => {
  const s_name = req.params.schoolName;
  var distinc_classes = [
  ];
  await schoolSchema.find({ name: s_name }, function (error, names) {
    if (error) console.log(error);
    else {
      distinc_classes.push(names);
    }
  });
  console.log(distinc_classes);
  // var arr = [];
  // for (var i = 0; i < distinc_classes.length; i++){
  //   for (var j = 0; j < arr.length; j++)
  //   {
  //     if(arr[j].name==distinc_classes)
  //   }
  // }
  res.json(distinc_classes);
});

router.get("/schools/:schoolName/:class", async (req, res) => {
  const s_name = req.params.schoolName;
  const classs = req.params.class;
  await schoolSchema.find(
    { name: s_name, class: classs },
    function (error, names) {
      if (error) console.log(error);
      else {
        var f = 0;
        for (var j = 0; j < distinc_sec.length; j++) {
          if (distinc_sec[j].grade == names[0].grade) {
            f = 1;
            break;
          }
        }
        if (!f) {
          distinc_sec.push(names[0].grade);
        }
      }
    }
  );
  //console.log(distinc_sec);
  res.json(distinc_sec);
});

router.get("/facilitators/:id", async function (req, res) {
  const id = req.params.id;
  console.log(id);
  const details = await teacherSchema.find(
    { _id: id },
    function (err, details) {
      if (err) {
        console.log(err);
      } else {
        //console.log(details);
        return res.json(details[0]);
      }
    }
  );
});

module.exports = router;
