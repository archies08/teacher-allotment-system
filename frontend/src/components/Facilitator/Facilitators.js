import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
const Facilitator = () => {
  const [facilitator, setFacilitator] = useState();
  useEffect(() => {
    console.log("Making an API call");
    fetch("/facilitators", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setFacilitator(json));
  }, []);
  return (
    <>
      <h1 className="text-center">Facilitator</h1>
      <br></br>
      <ul className="text-center">
        {facilitator
          ? facilitator.map((one) => {
              let url = "/facilitators/" + one._id;
              return (
                <ListGroup>
                  <ListGroup.Item variant="dark">
                    <Link to={url}>{one.name}</Link>
                  </ListGroup.Item>
                </ListGroup>
              );
            })
          : "Facilitator are not loaded"}
      </ul>
      <Link to="/" style={{ textAlign: "center" }}>
        Back
      </Link>
    </>
  );
};
export default Facilitator;
