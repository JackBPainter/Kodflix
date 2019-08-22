import React from "react";
import Gallery from "./Gallery";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Details from "./Details";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header"/>
        <Route exact path="/" component={Gallery}/>
        <Route exact path="/:tvShowUrl" component={Details}/>
      </div>
    </Router>
  );
}
