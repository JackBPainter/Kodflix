import React from "react";
import Gallery from "./Gallery";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./Details";
import NotFound from "./NotFound";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header"/>
        <Switch> 
        <Route exact path="/NotFound" component={NotFound}/>
        <Route exact path="/" component={Gallery}/>
        <Route exact path="/:tvShowUrl" component={Details}/>
        </Switch>
      </div>
    </Router>
  );
}
