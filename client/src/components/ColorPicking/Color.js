
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CheckIcon from '@mui/icons-material/Check';

export default function Color(props) {
  const [visiblityCheck, setVisiblityCheck] = useState(props.visiblityCheck)
  const [selectedColor, setSelectedColor] = useState(props.selectedColor )

  useEffect(() => {
    props.setSelectedColor(selectedColor)
    props.setVisiblityCheck(visiblityCheck)
  }, [props, selectedColor, visiblityCheck])


  const ColorPallete = styled.button`
  width: 20px;
  height:20px;
  background:${({color}) => color};
  border-radius: 10px;
  margin: 0px 5px;
  position:relative;
  border: 1px solid black;
  &:hover {
     border: 1px solid white;
    }
    @media screen and (max-width: 768px) {
      width: 17px;
  }
  `

  const ColorPickerView = styled.div`
  display: flex;
  justify-content: space-between;
  padding:7px;
  margin:10px; 
  background:${selectedColor};
  color: white;
  border-radius: 5px;
 
  @media screen and (max-width: 768px) {
    margin-left: -50px;
  }
  `
  const checkIconStyling = {
    color: "white",
    width: "15px",
    height: "15px",
    margin: " 0px 0px 0px -5px",
  };

  const chooseColor = (colorValue, name) => {
    setSelectedColor(colorValue)
    setVisiblityCheck({ [name]: true })
    // setToggleNewColor(false)
    props.setSelectedColor(colorValue)
    props.setVisiblityCheck({ [name]: true })
      // props.setToggleNewColor(false)
  }

  return (
    <div>
      <ColorPickerView >
        {/* <FaEyeDropper /> */}
        <ColorPallete color="#33B18A" onClick={() => chooseColor("#33B18A", "green")}>
          {visiblityCheck.green ? <CheckIcon style={checkIconStyling} /> : null}
        </ColorPallete>
        <ColorPallete color="#FF013D" onClick={() => chooseColor("#FF013D", "red")}>
          {visiblityCheck.red ? <CheckIcon style={checkIconStyling} /> : null}
        </ColorPallete>
        <ColorPallete color="#ffb135" onClick={() => chooseColor("#ffb135", "yellow")}>
          {visiblityCheck.yellow ? <CheckIcon style={checkIconStyling} /> : null}
        </ColorPallete>
        <ColorPallete color="#51a5c4" onClick={() => chooseColor("#51a5c4", "blue")}>
          {visiblityCheck.blue ? <CheckIcon style={checkIconStyling} /> : null}
        </ColorPallete>
        <ColorPallete color="#dc4970" onClick={() => chooseColor("#dc4970", "pink")}>
          {visiblityCheck.pink ? <CheckIcon style={checkIconStyling} /> : null}
        </ColorPallete>
        <ColorPallete color="#5D5EB4" onClick={() => chooseColor("#5D5EB4", "purple")}>
          {visiblityCheck.purple ? <CheckIcon style={checkIconStyling} /> : null}
        </ColorPallete>
        {/* <ColorPallete >
        <button>Red</button>
        <button>green</button>
        </ColorPallete> */}
      </ColorPickerView>
      {/* <FontAwesomeIcon icon="fa-solid fa-eye-dropper" /> */}
    </div>
  );
}