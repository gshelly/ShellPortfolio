import React, {useState, useEffect} from 'react';
import './App.css';
import {Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/home/index';
import About from "./pages/about/about"
import Services from './pages/projects/Projects';
import Contact from './pages/contact/contact';
import NavSideBar from './pages/NavSideBar';

function App(props) {
  const [selectedColor, setSelectedColor] = useState("#33B18A")
  const [visiblityCheck, setVisiblityCheck] = useState({ "green": true, "red": false, "yellow": false, "blue": false, "pink": false, "purple": false })
  const [toggleNewColor, setToggleNewColor] = useState(props)
  	
  useEffect(() => {
	
		setToggleNewColor(toggleNewColor);
	}, [props, toggleNewColor]);

    return (
      <div className="App">
        {console.log(toggleNewColor)}
        <NavSideBar 
          setSelectedColor={setSelectedColor} 
          selectedColor={selectedColor} 
          visiblityCheck={visiblityCheck} 
          setVisiblityCheck={setVisiblityCheck}
          toggleNewColor={toggleNewColor} 
          setToggleNewColor={setToggleNewColor}  />
        {/* <Color/> */}
        <Switch>
          <Route exact path='/' component={() => <Home selectedColor={selectedColor} toggleNewColor={toggleNewColor} setToggleNewColor={setToggleNewColor}/>} />
          <Route exact path='/about' component={() => <About selectedColor={selectedColor} toggleNewColor={toggleNewColor} setToggleNewColor={setToggleNewColor}/>} />
          <Route path='/services' component={() => <Services selectedColor={selectedColor} toggleNewColor={toggleNewColor} setToggleNewColor={setToggleNewColor}/>} />
          <Route path='/contact-us' component={() => <Contact selectedColor={selectedColor} toggleNewColor={toggleNewColor} setToggleNewColor={setToggleNewColor}/>} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
}

export default App;
