import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import {Link, glide } from 'react-tiger-transition';

// inject glide styles
glide({
  name: 'glide-left'
});
glide({
  name: 'glide-right',
  direction: 'right'
});

const Navbar = (props) => {
  const { toggle } = props
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>Shelly Gupta</h1>
        </NavLink>
        <Bars onClick={toggle}/>
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Projects
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;
