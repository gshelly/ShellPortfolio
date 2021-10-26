import React, {useState} from 'react';
import './App.css';
import {Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/home/index';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import NavSideBar from './pages/NavSideBar';

function App(props) {
  const [selectedColor, setSelectedColor] = useState("#33B18A")
  const [visiblityCheck, setVisiblityCheck] = useState({ "green": true, "red": false, "yellow": false, "blue": false, "pink": false, "purple": false })
  const [toggleNewColor, setToggleNewColor] = useState(true)

    return (
      <div className="App">
        <NavSideBar 
          setSelectedColor={setSelectedColor} 
          selectedColor={selectedColor} 
          visiblityCheck={visiblityCheck} 
          setVisiblityCheck={setVisiblityCheck}
          toggleNewColor={toggleNewColor} 
          setToggleNewColor={setToggleNewColor}  />
        {/* <Color/> */}
        <Switch>
          <Route exact path='/' component={() => <Home selectedColor={selectedColor}/>} toggleNewColor={toggleNewColor}/>
          <Route exact path='/about' component={() => <About selectedColor={selectedColor} toggleNewColor={toggleNewColor} setToggleNewColor={setToggleNewColor}/>} />
          <Route path='/services' component={() => <Services selectedColor={selectedColor} toggleNewColor={toggleNewColor} setToggleNewColor={setToggleNewColor}/>} />
          <Route path='/contact-us' component={() => <Contact selectedColor={selectedColor} toggleNewColor={toggleNewColor} setToggleNewColor={setToggleNewColor}/>} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
}

export default App;
