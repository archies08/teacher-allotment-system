const teachers = require("./teachers");
const school = require("./SchoolSchema")

const mongoose = require("mongoose");


module.exports.scheduleSchool = async function scheduleSchool(schoolname, clas, grade, day, time, lang) {
  const ret_val = await allocateTeacher(schoolname, clas, day, time, lang);

  await updateTeacher(ret_val, schoolname, day, time);

  await updateSchool(ret_val.name, schoolname, clas, grade, lang, day, time);
}

allocateTeacher = async function allocateTeacher(
  schoolname,
  clas,
  day,
  time,
  lang
) {
  var allocatedteacher = "";

  var dayquery;
  const dayIndex = getDayIndex(day);
  if (dayIndex > 4) {
    console.log("Day Error");
    return;
  } else {
    dayquery = "day." + dayIndex;
  }
  var timequery;
  const timeIndex = getTimeIndex(time);
  if (timeIndex < 0 || timeIndex > 9) {
    console.log("Time Error");
    return;
  } else {
    timequery = "schoolid." + dayIndex + "." + timeIndex;
  }

  console.log(dayquery);
  console.log(timequery);

  try {
    const unsorted_details = await teachers
      .find({ language: lang })
      .where("class", { $gt: clas - 1 })
      .where(dayquery, { $lt: 5 })
      .where("wcount", { $lt: 13 })
      .where(timequery, { $eq: "" })
      .sort({
        class: 1,
        dayquery: 1,
        wcount: 1,
      })
      .exec();

    console.log("data", unsorted_details);
    console.log(unsorted_details.length);

    for (let i = 0; i < unsorted_details.length; i++) {
      teacher = unsorted_details[i];
      if (timeIndex != 0) {
        if (teacher.schoolid[dayIndex][timeIndex - 1] == schoolname) {
          allocatedteacher = teacher;
          break;
        }
      }
      if (timeIndex != 9) {
        if (teacher.schoolid[dayIndex][timeIndex + 1] == schoolname) {
          allocatedteacher = teacher;
          break;
        }
      }
    }

    if (allocatedteacher == "") {
      allocatedteacher = unsorted_details[0];
    }

    //console.log("allocated teacher after sort", allocatedteacher?.name);

    if (!allocatedteacher) {
      console.log("No teacher found");
      return;
    }
    return allocatedteacher;
  } catch (error) {
    console.log(error);
  }
};

updateTeacher = async function updateTeacher(teacher, schoolname, day, time) {
  const dayIndex = getDayIndex(day);
  const timeIndex = getTimeIndex(time);

  try {
    teacher.schoolid[dayIndex][timeIndex] = schoolname;
    teacher.day[dayIndex] += 1;
    teacher.wcount += 1;

    var upsertData = teacher.toObject();
    delete upsertData._id;
    teachers.findOneAndUpdate({ _id: teacher.id }, upsertData, { upsert: true }, function (err, doc) {
      if (err) console.log('Error:', error);
      console.log('Teacher Assigned');
    });
  } catch (error) {
    console.log("Error: ", error);
  }

  return;
}

updateSchool = async function updateSchool(teachername, schoolname, clas, grade, language, day, time) {
  const newschool = new school({
    name: schoolname,
    class: clas,
    grade: grade,
    day: day,
    time: time,
    language: language,
    teacherassigned: teachername
  });

  newschool.save();

}

function getDayIndex(day) {
  switch (day) {
    case "Monday":
      return 0;
    case "Tuesday":
      return 1;
    case "Wednesday":
      return 2;
    case "Thursday":
      return 3;
    case "Friday":
      return 4;
    default:
      return 10;
  }
}

function getTimeIndex(time) {
  return (time - 800) / 100;
}
