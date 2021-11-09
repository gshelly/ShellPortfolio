import React from "react";
import "../../App.css";
import "./style.css";
import styled, { keyframes } from "styled-components";
import HomePageTransition from "../../components/PageTransition/HomePageTransition";
import resume from "../../components/Resume/resume.pdf";
import { useHistory } from "react-router-dom";

const Home = (props) => {
	let history = useHistory();
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

	const navigateContact = () => {
		props.setToggleNewColor(true);
		history.push("/contact-us");
	};

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
						I am full-stack web developer and an iOS App developer living in San
						Jose, CA. I have worked on iPhone App projects for clients, now I am
						working on upgrading my skill set by developing projects using
						MERN(MongoDb, React js, Node js, Express js) If you're looking for
						an employee to hire, please get in touch{" "}
						<button
							onClick={navigateContact}
							className="contactLink"
							style={{ color: props.selectedColor }}
						>
							here
						</button>
					</p>
					{/* <blockquote
						style={{ borderLeft: `3px solid ${props.selectedColor}` }}
						className="quote"
					>
						Be Creative and fun
					</blockquote> */}
					{props.toggleNewColor ? (
						<Transition1
							style={{ borderLeft: `3px solid ${props.selectedColor}` }}
							className="quote"
						>
							Be Creative and fun
						</Transition1>
					) : (
						<blockquote
							style={{ borderLeft: `3px solid ${props.selectedColor}` }}
							className="quote"
						>
							Be Creative and fun
						</blockquote>
					)}
					<a
						href={resume}
						download="Shelly-Resume"
						target="_blank"
						rel="noreferrer"
						style={{ textDecoration: "none" }}
					>
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
