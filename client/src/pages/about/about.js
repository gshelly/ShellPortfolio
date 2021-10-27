import React, { useState, useEffect } from "react";
import PageTransition from "../../components/PageTransition/PageTransition";
import "./about.css";
import "../../App.css";
import profilePic from "../../images/profilePic3.jpg";
import Experience from "./Experience";
import Skills from "./Skills";

export default function About(props) {
	let { selectedColor } = props;

	return (
		<div style={{ backgroundColor: "black" }}>
			{props.toggleNewColor ? (
				<PageTransition selectedColor={selectedColor} />
			) : null}

			<div className="about-background">
				<div className="header">
					<h4 style={{ color: selectedColor }} className="title">
						{" "}
						Who I Am
					</h4>
					<h1
						className="title"
						style={{ borderBottom: `3px solid ${selectedColor}` }}
					>
						About Me
					</h1>
				</div>
				<div className="container1">
					<div class="img-hover-zoom">
						<img
							src={profilePic}
							alt="profilepic"
							className="pic"
							style={{ border: `5px solid ${selectedColor}` }}
						/>
					</div>
					<div className="wrapper">
						<h1>
							{" "}
							Hello, I'm{" "}
							<spans style={{ color: selectedColor }}>Shelly Gupta </spans>{" "}
						</h1>
						<p>
							{" "}
							I am a keen young developer who is inspired and motivated by the
							fast-paced and ever-changing environment of software development.
							Bringing the technical and visual aspects of digital products to
							life is my passion.
							<br /> <br />
							I am a keen young developer who is inspired and motivated by the
							fast-paced and ever-changing environment of software development.
							Bringing the technical and visual aspects of digital products to
							life is my passion.
							<br /> <br />I am a keen young developer who is inspired and
							motivated by the fast-paced and ever-changing environment of
							software development. Bringing the technical and visual aspects of
							digital products to life is my passion.
						</p>
					</div>
				</div>
				{/*  End of container1 */}
				<Experience selectedColor={selectedColor} />
        <Skills selectedColor={selectedColor} />
			</div>
		</div>
	);
}
