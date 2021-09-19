import { Switch, Route } from "react-router-dom";
import OneSchool from "./OneSchool";
import Schools from "./Schools";
import ClassGradesForSchool from "./ClassGradesForSchool";

const FacilitatorRouter = () => {
  return (
    <Switch>
      <Route path="/schools" exact component={Schools} />
      <Route
        path="/schools/:schoolName/"
        exact
        component={ClassGradesForSchool}
      />
      <Route path="/schools/:schoolName/:clas/:grade" component={OneSchool} />
    </Switch>
  );
};

export default FacilitatorRouter;
