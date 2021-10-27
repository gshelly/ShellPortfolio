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
			<div style={{ marginLeft: "40px" }}>
				<h3 style={{ color: selectedColor }}>
					{" "}
					My Toolbox and Things I Can Do{" "}
				</h3>
				<p>
					{" "}
					The skills, tools and technologies I use to bring your products to
					life:{" "}
				</p>

				<table style={{ border: "none" }}>
					<tbody>
						<tr>
							<td className="section-skill-tools">
								<FaSwift
									color={selectedColor}
									style={{ width: "80px", height: "80px" }}
								/>
								<p className="name">Swift</p>
							</td>
							<td className="section-skill-tools">
								<FaApple
									color={selectedColor}
									style={{ width: "90px", height: "80px" }}
								/>
								<p className="name" style={{ width: "107px" }}>
									Objective-C
								</p>
							</td>
							<td className="section-skill-tools">
								<DiMongodb
									color={selectedColor}
									style={{ width: "80px", height: "80px" }}
								/>
								<p className="name">MongoDB</p>
							</td>
							<td
								className="section-skill-tools"
								style={{ paddingTop: "40px" }}
							>
								<div style={{ display: "flex" }}>
									<span
										style={{
											color: selectedColor,
											fontSize: "1.2rem",
											paddingTop: "30px",
										}}
									>
										Express
									</span>
									<SiJavascript
										color={selectedColor}
										style={{ width: "50px", height: "50px" }}
									/>
								</div>
								<p className="name">Express Js</p>
							</td>
							<td className="section-skill-tools">
								<FaReact
									color={selectedColor}
									style={{ width: "80px", height: "80px" }}
								/>
								<p className="name">React JS</p>
							</td>
							<td className="section-skill-tools">
								<FaNodeJs
									color={selectedColor}
									style={{ width: "80px", height: "80px" }}
								/>
								<p className="name">Node js</p>
							</td>
						</tr>

						<tr style={{ marginTop: "180px" }}>
							<td className="section-skill-tools">
								<FaHtml5
									color={selectedColor}
									style={{ width: "80px", height: "80px" }}
								/>
								<p className="name">HTML</p>
							</td>
							<td className="section-skill-tools">
								<FaCss3
									color={selectedColor}
									style={{ width: "80px", height: "80px" }}
								/>
								<p className="name">CSS</p>
							</td>
							<td className="section-skill-tools">
								<SiJavascript
									color={selectedColor}
									style={{ width: "80px", height: "70px" }}
								/>
								<p className="name" style={{ paddingLeft: "0px" }}>
									JavaScript
								</p>
							</td>
							<td className="section-skill-tools">
								<SiJquery
									color={selectedColor}
									style={{ width: "80px", height: "80px" }}
								/>
								<p className="name">Jquery</p>
							</td>
							<td className="section-skill-tools">
								<SiC
									color={selectedColor}
									style={{ width: "80px", height: "80px" }}
								/>
								<p className="name">C</p>
							</td>
							<td className="section-skill-tools">
								<CgCPlusPlus
									color={selectedColor}
									style={{ width: "80px", height: "80px" }}
								/>
								<p className="name" style={{ paddingLeft: "0px" }}>
									C++
								</p>
							</td>
						</tr>

						<tr style={{ marginTop: "180px" }}>
							<td className="section-skill-tools">
								<FaGit
									color={selectedColor}
									style={{ width: "80px", height: "80px" }}
								/>
								<p className="name">Git</p>
							</td>
							<td className="section-skill-tools">
								<FaGithub
									color={selectedColor}
									style={{ width: "80px", height: "80px" }}
								/>
								<p className="name">Github</p>
							</td>
							<td className="section-skill-tools">
								<FaJenkins
									color={selectedColor}
									style={{ width: "80px", height: "80px" }}
								/>
								<p className="name">Jenkins</p>
							</td>
							<td className="section-skill-tools">
								<FaJira
									color={selectedColor}
									style={{ width: "80px", height: "80px" }}
								/>
								<p className="name">Jira</p>
							</td>
							<td className="section-skill-tools">
								<SiXcode
									color={selectedColor}
									style={{ width: "80px", height: "80px" }}
								/>
								<p className="name">Xcode</p>
							</td>
							<td className="section-skill-tools">
								<DiResponsive
									color={selectedColor}
									style={{ width: "80px", height: "80px" }}
								/>
								<p className="name">Responsive Website</p>
							</td>
						</tr>
					</tbody>
				</table>
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
      <OtherSkills/>
					<p
						style={{
							padding: "10px 40px",
							margin: "0px -2px",
							borderBottom: `3px solid ${selectedColor}`,
              display: "inline-block"
						}}
					>
					Dancing
					</p>
          <OtherSkills />
					<p
						style={{
							padding: "10px 40px",
							margin: "0px -2px",
							borderBottom: `3px solid ${selectedColor}`,
              display: "inline-block"
						}}
					>
					Travelling
					</p>

          <OtherSkills />
					<p
						style={{
							padding: "10px 40px",
							margin: "0px -2px",
							borderBottom: `3px solid ${selectedColor}`,
              display: "inline-block"
						}}
					>
					Cooking
					</p>

          <OtherSkills />
					<p
						style={{
							padding: "10px 40px",
							margin: "0px -2px",
							borderBottom: `3px solid ${selectedColor}`,
              display: "inline-block"
						}}
					>
					Yoga
					</p>
          </div>
		</div>
	);
}

export default Skills;
