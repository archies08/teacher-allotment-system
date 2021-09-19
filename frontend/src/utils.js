function getFirstDateOfCurrentWeek() {
  let curr = new Date(); // get current date
  let first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
  let sundayOfWeek = new Date(curr.setDate(first));
  let month = sundayOfWeek.getUTCMonth(); //months from 1-12
  let day = sundayOfWeek.getUTCDate();
  let year = sundayOfWeek.getUTCFullYear();
  return [year, month, day + 1];
}

export const convert2DArrayToTime = (array) => {
  console.log(array);
  let dataSource = [];
  let [year, month, day] = getFirstDateOfCurrentWeek();

  for (let i = 0; i < 5; i++) {
    // i=0 means monday
    for (let j = 0; j < 10; j++) {
      // j=0 means 8 o clock
      if (array[i][j] != "") {
        let obj = {
          Subject: array[i][j],
          StartTime: new Date(year, month, day + i, j + 8, 0),
          EndTime: new Date(year, month, day + i, j + 9, 0),
          isAllDay: false,
        };
        dataSource.push(obj);
      }
    }
  }
  return { dataSource };
};

const dayMap = {
  Monday: 0,
  Tuesday: 1,
  Wednesday: 2,
  Thursday: 3,
  Friday: 4,
};

export function getTimeBlocks({ day, time, nameOfFacilitator }) {
  let [year, month, date] = getFirstDateOfCurrentWeek();

  // console.log(year, month, date, day, time, nameOfFacilitator);
  let dataSource = [];
  let obj = {
    Subject: nameOfFacilitator,
    StartTime: new Date(year, month, date + dayMap[day], time / 100, 0),
    EndTime: new Date(year, month, date + dayMap[day], time / 100 + 1, 0),
    isAllDay: false,
  };
  dataSource.push(obj);
  // console.log("dataSource ", dataSource);
  return { dataSource };
}
