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
							A curiosity-driven full-stack mobile and web developer. <br />
							I'm passionate about bringing both the technical and visual
							aspects of digital products to life. My expertise lies in creating
							app and website products with an interactive user experience and
							in writing APIs that enable me to build an end-to-end application.
							<br /> <br />
							With over 4.5 years of industry experience developing iOS
							applications, I have decided to branch out into other languages.
							Therefore, I have acquired education and practical experience at
							MERN because it is not harmful to learn and stay current.
							<br /> <br />
							The way animation works really fascinates me, I would love to explore and learn about it.
							I also enjoy watching fictional movies and television
							series 📺, participating in outdoor activities like trekking 🏃🏻‍♀️, and
							dancing 👯‍♀️ during my leisure time.
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
