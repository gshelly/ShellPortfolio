import React from "react";
import "../../App.css";
import "./style.css";
import styled, { keyframes } from "styled-components";

const Home = (props) => {
	const slideInFromLeft = keyframes`
    0% {
      transform: translateX(3%);
    }
    100% {
      transform: translateX(0.2%);
    }
  `;
	const Transition1 = styled.blockquote`
		animation: ${slideInFromLeft} 1s ease-in;
	`;

	return (
		<div className="homeBackground">
			<div style={{ padding: "170px 40px" }}>
				<h1 className="nameHeading">
					I'm <span style={{ color: props.selectedColor }}>Shelly</span> Gupta !
				</h1>
				{/* <div> */}
				<p className="intro">
					I am a keen young developer who is inspired and motivated by the
					fast-paced and ever-changing environment of software development.
					Bringing the technical and visual aspects of digital products to life
					is my passion.
				</p>
				<blockquote
					style={{ borderLeft: `3px solid ${props.selectedColor}` }}
					className="quote"
				>
					Be Creative and fun
				</blockquote>
				{/* {
          props.toggleNewColor ? 
          <Transition1  style={{borderLeft:`3px solid ${props.selectedColor}`}} className="quote">Be Creative and fun</Transition1> 
         : <blockquote  style={{borderLeft:`3px solid ${props.selectedColor}`}} className="quote">Be Creative and fun</blockquote>
         } */}
				<button
					style={{ backgroundColor: props.selectedColor }}
					className="downloadCvButton"
				>
					{" "}
					Download CV
				</button>
			</div>
		</div>
	);
};

export default Home;