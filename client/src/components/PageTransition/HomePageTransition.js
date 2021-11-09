import React, { useState } from 'react'
import styled, { keyframes } from "styled-components";

const HomePageTransition = (props) => {
  // const [color, setColor] = useState(props.selectedColor)

  const slideInFromLeft = keyframes`
    0% {
      transform: translateX(-100vh);
      background-color: ${props.selectedColor};
      z-index: 999;
      height: 100vh;
    }
    100% {
      transform: translateX(100%);
      background-color: ${props.selectedColor};
      z-index: 999;
      height: 100vh;
    }
    /* 10%{
      transform: scale(1, 0.002)
      background-color: ${props.selectedColor};
      z-index: 999;
      height: 100vh;}
  35%{
    transform: scale(0.2, 0.002);
    background-color: ${props.selectedColor};
      z-index: 999;
      height: 100vh;
    opacity: 1;}
  50%{
    transform: scale(0.2, 0.002);
    background-color: ${props.selectedColor};
      z-index: 999;
      height: 100vh;
    opacity: 0;}
  80% {
    transform :scale(1, 0.002);
    background-color: ${props.selectedColor};
      z-index: 999;
      height: 100vh;}
      100% {
    transform :scale(1, 1);
    background-color: ${props.selectedColor};
      z-index: 999;
      height: 100vh;} */
  `;
  const Transition1 = styled.div` 
    position: relative;
    height: 0vh;
    display: block;
    animation: 0.8s ease-in 0s 1 ${slideInFromLeft};
  `;

  return (
    <Transition1 />
  )
}

export default HomePageTransition
