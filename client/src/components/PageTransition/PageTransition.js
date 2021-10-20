import React, { useState } from 'react'
import styled, { keyframes } from "styled-components";

const PageTransition = (props) => {
  // const [color, setColor] = useState(props.selectedColor)

  const slideInFromLeft = keyframes`
    0% {
      transform: translateX(100vh);
      background-color: ${props.selectedColor};
      z-index: 999;
      height: 100vh;
    }
    100% {
      transform: translateX(-100%);
      background-color: ${props.selectedColor};
      z-index: 999;
      height: 100vh;
    }
  `;
  const Transition1 = styled.div` 
    position: relative;
    height: 0vh;
    display: block;
    animation: 1s ease-in 0s 1 ${slideInFromLeft};
  `;

  return (
    <Transition1 />
  )
}

export default PageTransition
