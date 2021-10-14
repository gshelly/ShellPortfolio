import React, { useState } from 'react'
import styled, { keyframes } from "styled-components";

const PageTransition = () => {
  const [color, setColor] = useState("red")

  const slideInFromLeft = keyframes`
    0% {
      transform: translateX(100vh);
      background-color: ${color};
      z-index: 999;
    }
    100% {
      transform: translateX(-100%);
      background-color: ${color};
      z-index: 999;
    }
  `;
  const Transition1 = styled.div` 
    position: relative;
    height: 100vh;
    display: block;
    animation: 2s ease-out 0s 1 ${slideInFromLeft};
  `;

  return (
    <Transition1 />
  )
}

export default PageTransition
