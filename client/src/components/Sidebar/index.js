import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router'
import { 
  SidebarContainer, 
  Icon, 
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SidebarButton } from './SidebarElement'
  

const Sidebar = (props) => {

  const { isOpen, toggle} = props
  const [selectedColor, setSelectedColor] = useState(props.selectedColor)
  // const [visiblityCheck, setVisiblityCheck] = useState(props.visiblityCheck)
  const history = useHistory();
  const [toggleNewColor, setToggleNewColor] = useState(props.toggleNewColor)

  useEffect(() => {
    props.setSelectedColor(selectedColor)
    // props.setVisiblityCheck(visiblityCheck)
    // props.setToggleNewColor(true)
  }, [props, selectedColor, toggleNewColor])

  const handleNavigate = (pageName) => {
		let url = "/" + pageName;
		props.setToggleNewColor(true);
		history.push(url);
	};


  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarButton onClick={() => handleNavigate("about")} selectedColor={selectedColor} >
            About
            {/* {props.setToggleNewColor(true)} */}
          </SidebarButton>
          <SidebarButton onClick={() => handleNavigate("services")} selectedColor={selectedColor} >
            Projects
          </SidebarButton>
          <SidebarButton onClick={() => handleNavigate("contact-us")} selectedColor={selectedColor} >
            Contact Me
          </SidebarButton>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar  
