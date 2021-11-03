import React, { useState, useEffect } from "react";
import "../../App.css";
import "./style.css";
import styled, { keyframes } from "styled-components";
import HomePageTransition from "../../components/PageTransition/HomePageTransition";
import resume from "../../components/Resume/resume.pdf"

const Home = (props) => {
	const slideInFromLeft = keyframes`
    0% {
      transform: translateX(40%);
    }
    100% {
      transform: translateX(0.2%);
    }
  `;
	const Transition1 = styled.blockquote`
		animation: ${slideInFromLeft} 1s ease-in 1s 1;
	`;

	return (
		<>
			{props.toggleNewColor ? (
				<HomePageTransition selectedColor={props.selectedColor} />
			) : null}
			<div className="homeBackground">
				<div style={{ padding: "170px 40px" }}>
					<h1 className="nameHeading">
						I'm <span style={{ color: props.selectedColor }}>Shelly</span> Gupta
						!
					</h1>
					{/* <div> */}
					<p className="intro">
						I am a keen young developer who is inspired and motivated by the
						fast-paced and ever-changing environment of software development.
						Bringing the technical and visual aspects of digital products to
						life is my passion.
					</p>
					{/* <blockquote
						style={{ borderLeft: `3px solid ${props.selectedColor}` }}
						className="quote"
					>
						Be Creative and fun
					</blockquote> */}
					{
          props.toggleNewColor ? 
          <Transition1  style={{borderLeft:`3px solid ${props.selectedColor}`}} className="quote">Be Creative and fun</Transition1> 
         : <blockquote  style={{borderLeft:`3px solid ${props.selectedColor}`}} className="quote">Be Creative and fun</blockquote>
         }
				 <a href={resume} download="Shelly-Resume" target='_blank' rel="noreferrer" style={{textDecoration: "none"}}>
					<button
						style={{ backgroundColor: props.selectedColor }}
						className="downloadCvButton"
						onClick={`window.open(${resume})`}
					>
						{" "}
						Download CV
					</button>
					</a>

				</div>
			</div>
		</>
	);
};

export default Home;
