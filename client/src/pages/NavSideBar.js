import React,{useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const NavSideBar = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState(props.selectedColor)
  const [visiblityCheck, setVisiblityCheck] = useState(props.visiblityCheck)
  const [toggleNewColor, setToggleNewColor] = useState(props.toggleNewColor)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    props.setSelectedColor(selectedColor)
    props.setVisiblityCheck(visiblityCheck)
    props.setToggleNewColor(toggleNewColor)
  }, [props, selectedColor, visiblityCheck, toggleNewColor])

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar 
        toggle = {toggle} 
        setSelectedColor={setSelectedColor} 
        selectedColor={selectedColor} 
        visiblityCheck={visiblityCheck} 
        setVisiblityCheck={setVisiblityCheck}
        toggleNewColor={toggleNewColor} 
        setToggleNewColor={setToggleNewColor} 
        />
        {console.log("tt",toggleNewColor)}
    </>
  )
}

export default NavSideBar
