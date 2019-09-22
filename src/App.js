import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.scss';

import Navbar from './components/Navbar/Navbar';
import Start from './pages/Start/Start';
import About from './pages/About/About';


import Footer from './components/Footer/Footer';

class App extends Component{


  render(){
    return(
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer />
      </>
    )
  }
}

export default App;
