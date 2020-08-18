import React, { Component } from "react";
import Details from "../Component/Details";
import Card from "../Component/Card";
import NotFound from "../Component/NotFound";
import ProductList from "../Component/ProductList";
import NavBar from "../Component/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

class Routes extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/card" component={Card} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
