import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
// import { Link, glide } from 'react-tiger-transition';
import styled from 'styled-components';
import Color from '../../ColorPicking/Color';

export const Nav = styled.nav`
  background: black;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0 0.2rem;
  z-index: 10;
  
  // overflow:auto;

  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link).attrs((props: { selectedColor: String }) => props)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0px;
  margin: 0px;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: ${props => props.selectedColor};
  }
`;

export const NavButton = styled.button.attrs((props: { selectedColor: String }) => props)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0px;
  margin: 0px;
  height: 100%;
  cursor: pointer;
  background: transparent;
  border: none;
  font-family: 'Domine', serif;
  font-size:1rem;

  &:hover {
    color: ${props => props.selectedColor};
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  // align-items: center;
  width: 350px;
  justify-content: space-between;
  // margin-right: -24px;

  /* Second Nav */
  /* margin-right: 24px; */

  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */ 

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Customization = styled.p.attrs((props: { selectedColor: String }) => props)`
color: #fff;
display: flex;
align-items: center;
padding: 0px;
margin: 0px;
height: 100%;
cursor: pointer;

&:hover {
  color: ${props => props.selectedColor}};
}
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
