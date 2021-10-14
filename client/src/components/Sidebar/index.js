import React from 'react'
import { 
  SidebarContainer, 
  Icon, 
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu } from './SidebarElement'

const Sidebar = (props) => {

  const { isOpen, toggle} = props
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="/services" onClick={toggle}>
            Projects
          </SidebarLink>
          <SidebarLink to="/contact-us" onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar  
