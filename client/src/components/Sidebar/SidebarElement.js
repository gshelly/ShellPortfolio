import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
// import {Link as LinkS} from 'react-scroll'
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999; // because we want to be fixed at the top
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6,80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6,80px);
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;  

  &:hover {
    transition: 0.2s ease-in-out;
    color: red;
  }
`;

// export const SidebarRoute = styled(LinkR)`
// border-radius: 50px;
// background: red;
// white-space: nowrap;
// padding: 16px 64px;
// color: #010606;
// font-size: 1.5rem;
// cursor: pointer;
// outline: none;
// transition: 0.2s ease-in-out;
// text-decoration: none;
// border: none;

// &:hover {
//   transition: all 0.2s ease-in-out;
//   background: #fff;
//   color: #010606;
// }
// `;

