import React from "react";
import "./about.css";
import {
	FaSwift,
	FaApple,
	FaReact,
	FaNodeJs,
	FaHtml5,
	FaCss3,
	FaGit,
	FaGithub,
	FaJenkins,
	FaJira,
} from "react-icons/fa";
import { DiMongodb, DiResponsive } from "react-icons/di";
import { SiJavascript, SiJquery, SiC, SiXcode } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
import styled from "styled-components";

function Skills(props) {
	let { selectedColor } = props;

	const OtherSkills = styled.h5`
		color: ${selectedColor};
		margin: 0px 0px 0px -10px;
		display: inline-block;

		&:before {
			content: ".";
			background-color: ${selectedColor};
			width: 40px;
			height: 40px;
			border-radius: 50%;
			display: inline-block;
			text-align: center;
			color: ${selectedColor};
			line-height: 10px;
			/* margin-top: 10px; */
			/* margin-top: 30px; */
		}
	`;

	const OtherSkillsType = styled.p`
		display: inline-block;
		padding: 10px 40px;
		margin: 0px -2px;
		border-bottom: 3px solid ${selectedColor};

		@media screen and (max-width: 768px) {
			display: block;
			border: none;
			border-left: 3px solid ${selectedColor};
			margin: 0px 0px -10px 10px;
		}
	`;

	return (
		<div className="skills">
			<h2
				style={{
					border: `3px solid #555555`,
					padding: "10px",
					display: "inline-block",
				}}
			>
				Programming Skills and Tools
			</h2>
			<div className="skills-container">
				<h3 style={{ color: selectedColor }}>
					{" "}
					My Toolbox and Things I Can Do{" "}
				</h3>
				<p>
					{" "}
					The skills, tools and technologies I use to bring your products to
					life:{" "}
				</p>

				<div className="container-icons">
					<div className="box-icon">
						<FaSwift color={selectedColor} style={{ fontSize: "80px" }} />
						<p>Swift</p>
					</div>

					<div className="box-icon">
						<FaApple color={selectedColor} style={{ fontSize: "80px" }} />
						<p>Objective-C</p>
					</div>

					<div className="box-icon">
						<DiMongodb color={selectedColor} style={{ fontSize: "80px" }} />
						<p>MongoDB</p>
					</div>

					<div className="box-icon">
						<span
							style={{
								color: selectedColor,
								fontSize: "1rem",
								// marginBottom: "60px",
							}}
						>
							Express
						</span>
						<SiJavascript color={selectedColor} style={{ fontSize: "60px" }} />
						<p style={{ margin: "30px 0px 0px 0px" }}>Express Js</p>
					</div>

					<div className="box-icon">
						<FaReact color={selectedColor} style={{ fontSize: "80px" }} />
						<p>React JS</p>
					</div>

					<div className="box-icon">
						<FaNodeJs color={selectedColor} style={{ fontSize: "80px" }} />
						<p>Node js</p>
					</div>

					<div className="box-icon">
						<FaHtml5 color={selectedColor} style={{ fontSize: "80px" }} />
						<p>HTML</p>
					</div>
					<div className="box-icon">
						<FaCss3 color={selectedColor} style={{ fontSize: "80px" }} />
						<p>CSS</p>
					</div>
					<div className="box-icon">
						<SiJavascript color={selectedColor} style={{ fontSize: "80px" }} />
						<p>JavaScript</p>
					</div>
					<div className="box-icon">
						<SiJquery color={selectedColor} style={{ fontSize: "80px" }} />
						<p>Jquery</p>
					</div>
					<div className="box-icon">
						<SiC color={selectedColor} style={{ fontSize: "80px" }} />
						<p>C</p>
					</div>
					<div className="box-icon">
						<CgCPlusPlus color={selectedColor} style={{ fontSize: "80px" }} />
						<p>C++</p>
					</div>
					<div className="box-icon">
						<FaGit color={selectedColor} style={{ fontSize: "80px" }} />
						<p>Git</p>
					</div>
					<div className="box-icon">
						<FaGithub color={selectedColor} style={{ fontSize: "80px" }} />
						<p>Github</p>
					</div>

					<div className="box-icon">
						<FaJenkins color={selectedColor} style={{ fontSize: "80px" }} />
						<p>Jenkins</p>
					</div>
					<div className="box-icon">
						<FaJira color={selectedColor} style={{ fontSize: "80px" }} />
						<p>Jira</p>
					</div>
					<div className="box-icon">
						<SiXcode color={selectedColor} style={{ fontSize: "80px" }} />
						<p>Xcode</p>
					</div>
					<div className="box-icon">
						<DiResponsive color={selectedColor} style={{ fontSize: "80px" }} />
						<p>Responsive Website</p>
					</div>
				</div>
			</div>
			<h2
				style={{
					border: `3px solid #555555`,
					padding: "10px",
					display: "inline-block",
				}}
			>
				Other Skills/Hobbies
			</h2>
			<div className="other-skills">
				<OtherSkills />
				<OtherSkillsType>Dancing</OtherSkillsType>
				<OtherSkills />
				<OtherSkillsType>Travelling</OtherSkillsType>

				<OtherSkills />
				<OtherSkillsType>Cooking</OtherSkillsType>

				<OtherSkills />
				<OtherSkillsType>Yoga</OtherSkillsType>
			</div>
		</div>
	);
}

export default Skills;
