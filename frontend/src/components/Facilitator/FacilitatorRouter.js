import Facilitator from "./Facilitators";
import { Switch, Route } from "react-router-dom";
import OneFacilitator from "./OneFacilitator";

const FacilitatorRouter = () => {
  return (
    <Switch>
      <Route path="/facilitators" exact component={Facilitator} />
      <Route path="/facilitators/:id" component={OneFacilitator} />
    </Switch>
  );
};

export default FacilitatorRouter;
