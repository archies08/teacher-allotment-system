import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

const Schools = () => {
  const [school, setSchool] = useState();
  useEffect(() => {
    fetch("/schools", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setSchool(json));
  }, []);
  return (
    <>
      <h1>School</h1>
      {console.log(school)}
      <ul>
        {school
          ? school.map((one, index) => {
              console.log(one);
              let url = "/schools/" + one;
              return (
                <ListGroup>
                  <ListGroup.Item variant="dark">
                    <Link to={url}>{one}</Link>
                  </ListGroup.Item>
                </ListGroup>
                // <li key={index}>
                //   <Link to={url}>{one}</Link>
                // </li>
              );
            })
          : "Schools are not loaded"}
      </ul>
      <Link to="/" style={{ textAlign: "center" }}>
        Back
      </Link>
    </>
  );
};

export default Schools;
