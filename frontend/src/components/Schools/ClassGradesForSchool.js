import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ClassGradesForSchool = () => {
  let { schoolName } = useParams();
  const [classGrades, setClassGrades] = useState();
  useEffect(() => {
    fetch("/schools/" + schoolName, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setClassGrades(json[0]));
  }, []);
  return (
    <>
      <h1>School</h1>
      <ul>
        {classGrades
          ? classGrades.map((one, index) => {
            let url =
              "/schools/" + one.name + "/" + one.class + "/" + one.grade;
            return (
              <li key={index}>
                <Link to={url}>
                  {one.name} {one.class}
                  {one.grade}
                </Link>
              </li>
            );
          })
          : "Schools are not loaded"}
      </ul>
    </>
  );
};

export default ClassGradesForSchool;
