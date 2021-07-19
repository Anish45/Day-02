import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";

const Routes = () => {
  return (
    <Router>
      <Route>
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </Route>
    </Router>
  );
};

export default Routes;
