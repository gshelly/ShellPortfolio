import React from 'react';
import './App.css';
import {Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import NavSideBar from './pages/NavSideBar';

function App() {
    return (
      <div className="App">
        <NavSideBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/contact-us' component={Contact} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
}

export default App;
