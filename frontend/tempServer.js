const express = require("express");
const cors = require("cors");
const port = 4000;

const app = express();
app.use(cors());

const schools = [
  {
    id: 1,
    schoolName: "School ABC",
    grade: "A",
    class: "6",
  },
  {
    id: 2,
    schoolName: "School XYZ",
    grade: "A",
    class: "6",
  },
  {
    id: 3,
    schoolName: "School XYZ",
    grade: "B",
    class: "6",
  },
  {
    id: 4,
    schoolName: "School Bhole Nath",
    grade: "A",
    class: "6",
  },
];

const facilitator = [
  {
    id: 1,
    name: "facilitator Rampal",
  },
  {
    id: 2,
    name: "facilitator Krishna",
  },
  {
    id: 3,
    name: "facilitator Kushal",
  },
  {
    id: 4,
    name: "facilitator Harsh",
  },
];

const data = {
  id: 123,
  name: "baba",
  work: [
    ["", "School 1", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "School 2", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ],
};
app.get("/schools", (req, res) => {
  res.json(schools);
});

app.get("/facilitators", (req, res) => {
  res.json(facilitator);
});

app.get("/facilitators/:id", (req, res) => {
  res.json(data);
});

app.get("/schools/:schoolName/:class/:grade", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
