import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FacilitatorRouter from "./components/Facilitator/FacilitatorRouter";
import SchoolRouter from "./components/Schools/SchoolRouter";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/facilitators" component={FacilitatorRouter} />
        <Route path="/schools" component={SchoolRouter} />
        <Route path="/" exact={true} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
