import React from "react";
import Navigation from "./Componants/Navigation/Navigation";
import './style.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Componants/Home/Home/Home";
import Footer from "./Componants/Footer/Footer";
import Resume from "./Componants/Resume/Resume";
import Contact from "./Componants/Contact/Contact";
import Project from "./Componants/Projects/Project/Project";
import ProjectDetails from "./Componants/Projects/ProjectDetails/ProjectDetails";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/project" component={Project} />
        <Route path="/projects/:id" component={ProjectDetails} />
        {/* <Route path='projects/:id'>
          <ProjectDetails />
        </Route> */}

        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
