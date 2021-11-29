import React from "react";
import Navigation from "./Componants/Navigation/Navigation";
import './style.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Componants/Home/Home/Home";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/project" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} /> */}
      </Switch>
    </Router>
  );
}

export default App;
