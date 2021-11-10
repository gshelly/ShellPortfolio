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
							Hello, I'm{" "}
							<spans style={{ color: selectedColor }}>Shelly Gupta </spans>
						</h1>
						<p>
							{" "}
							A curiosity-driven iOS and full-stack developer. <br />
							Passionate about bringing both the technical and visual
							aspects of digital products to life. My expertise lies in iOS & Full Stack Development
							 with a focus on interactive user experience and building an end-to-end application.
							<br /> <br />
							With over 4.5 years of industry experience developing iOS
							applications, I have decided to branch out into full stack technologies by deep diving into MERN and developing various passion projects.
							<br /> <br />
							Apart from being a techie exploring technologies and its unlimited possibilities,
							I am also a movie enthusiast 📺. Love dancing 👯‍♀️ and outdoor trekking 🏃🏻‍♀️
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
