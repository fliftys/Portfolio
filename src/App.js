import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import Start from "./pages/Start/Start";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";

import Contact from "./pages/Contact/Contact";

import Footer from "./components/Footer/Footer";

import {projects as data} from './data';

import Loading from './components/Loading/Loading';

class App extends Component {
  state = {
    projects: [],
    sortedProjects: [],
    projectType: "all",
  };

  handleChange = e => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const name = e.target.name;

    this.setState(() => ({
      [name]: value
    }))

  }

  sortProjects = () => {

    let projects = [...this.state.projects];
    const type = this.state.projectType;


    for(let i=0; i<projects.length; i++){
      const los = Math.floor(Math.random() * 5);
      const tmp = projects[los];
      projects[los] = projects[i];
      projects[i] = tmp;
    }

    if(type !== 'all') {
      projects = projects.filter(project => project.type === type);
    }
    


    this.setState(() => ({
      sortedProjects: projects
    }));

  }


  componentDidMount(){
    const projects = [...data];
    
    this.setState(() => ({
      projects,
      sortedProjects: projects
    }));

  }



  render() {
    return (
      <>
        <Loading />
        <Navbar />
        <Switch>
          <Route exact path="/" component={() => <Start />} />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/portfolio"
            component={() => (
              <Projects
                value={{
                  ...this.state,
                  handleChange: this.handleChange,
                  sortProjects: this.sortProjects
                }}
              />
            )}
          />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
