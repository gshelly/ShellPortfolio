import React, { useState, useEffect } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';
import Color from '../../ColorPicking/Color';


function Dropdown(props) {
  const [click, setClick] = useState(false);
  const [selectedColor, setSelectedColor] = useState(props.selectedColor)
  const [visiblityCheck, setVisiblityCheck] = useState(props.visiblityCheck)

  const handleClick = () => setClick(!click);
  
  useEffect(() => {
    props.setSelectedColor(selectedColor)
    props.setVisiblityCheck(visiblityCheck)
  }, [props, selectedColor, visiblityCheck])

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
      <li><Color 
        setSelectedColor={setSelectedColor} 
        selectedColor={selectedColor}
        setVisiblityCheck={setVisiblityCheck}
        visiblityCheck={visiblityCheck}
        />
      </li>
      </ul>
    </>
  );
}

export default Dropdown;