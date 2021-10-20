import React, {useState, useEffect} from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Customization,
  NavButton
} from './NavbarElements';

import image from '../../images/logo.png'
import SocialFollow from '../Social/SocialFollow';
import Dropdown from '../dropDown/Dropdown';
import { useHistory } from 'react-router-dom';


const Navbar = (props) => {
  const history = useHistory()
  const { toggle } = props
  const [dropdown, setDropdown] = useState(false);

  const [selectedColor, setSelectedColor] = useState(props.selectedColor)
  const [visiblityCheck, setVisiblityCheck] = useState(props.visiblityCheck)
  const [toggleNewColor, setToggleNewColor] = useState(props.toggleNewColor)

  useEffect(() => {
    props.setSelectedColor(selectedColor)
    props.setVisiblityCheck(visiblityCheck)
  }, [props, selectedColor, visiblityCheck, toggleNewColor])

  const onMouseEnter = () => {
    setDropdown(true);
    props.setToggleNewColor(false)
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const handleNavigate = (pageName) => {
    let url = "/"+pageName
    props.setToggleNewColor(true)
    // props.setToggleNewColor(tr!ue)
    history.push(url)
  }

  return (
    <>
      <Nav> 
        <NavLink to='/'>
          <img src={image} style={{width:"400px", height:"230px"}} alt="logo" />
        </NavLink>
        <Bars onClick={toggle}/>
        <NavMenu>
          <NavButton activeStyle selectedColor={selectedColor} onClick={() => handleNavigate("about")}>
            About 
          </NavButton>  
          <NavButton  activeStyle selectedColor={selectedColor} onClick={() => handleNavigate("services")} >
            Projects
          </NavButton>
          <NavButton  activeStyle selectedColor={selectedColor} onClick={() => handleNavigate("contact-us")}>
            Contact Us
          </NavButton>
          <Customization onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} selectedColor={selectedColor}>
            Customize <i className='fas fa-caret-down' style={{marginLeft:"5px"}}/>
            {dropdown && <Dropdown 
              setSelectedColor={setSelectedColor} 
              selectedColor={selectedColor} 
              setVisiblityCheck={setVisiblityCheck}
              visiblityCheck={visiblityCheck}
              />}
          </Customization>
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavMenu>
        <SocialFollow selectedColor={selectedColor}/>
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;
