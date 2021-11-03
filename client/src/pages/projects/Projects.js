import React from "react";
import PageTransition from "../../components/PageTransition/PageTransition";
import "./Project.css";
import { MdLaptopMac } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import project2 from "../../images/Project2.png";
import project3 from "../../images/Project3.png";
import project1 from "../../images/Project1.png";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const Services = (props) => {
	let { selectedColor } = props;
	return (
		<>
			{props.toggleNewColor ? (
				<PageTransition selectedColor={selectedColor} />
			) : null}
			<div className="main-container">
				<div className="project-header">
					<h2
						style={{
							display: "inline",
							borderBottom: `3px solid ${selectedColor}`,
							paddingBottom: "20px",
						}}
					>
						{" "}
						Personal MERN projects built within 6 months of learning it.
					</h2>
				</div>
				<div className="container-work">
        <div className="container-img">
						<img src={project1} alt="p1" style={{ width:"500px" }} />
					</div>
					<div className="container-text">
						<h2 style={{ color: selectedColor }}> Personal Website </h2>
						<p>
							I am a keen young developer who is inspired and motivated by the
							fast-paced and ever-changing environment of software development.
							Bringing the technical and visual aspects of digital products to
							life is my passion.
						</p>
						<div style={{ display: "flex", justifyContent: "flex-start" }}>
							<FaReact style={{ fontSize: "20px", margin: "0px 10px" }} />
							<FaHtml5 style={{ fontSize: "20px", margin: "0px 10px" }} />
							<FaCss3 style={{ fontSize: "20px", margin: "0px 10px" }} />
							<SiJavascript style={{ fontSize: "20px", margin: "0px 10px" }} />
						</div>
						<div>
							<a href="https://github.com/gshelly/ShellPortfolio">
								<button
									className="view-button"
									style={{
										backgroundColor: selectedColor,
									}}
								>
									{" "}
									View It Here{" "}
								</button>
							</a>
							<a href="https://github.com/gshelly/ShellPortfolio">
								<button
									className="view-button"
									style={{
										backgroundColor: selectedColor,
										margin: "20px",
									}}
								>
									{" "}
									View Github Repo{" "}
								</button>{" "}
							</a>
						</div>
					</div>
				</div>{" "}
				{/* project1  */}
				<div className="container-work">
        <div className="container-img">
						<img src={project2} alt="p1" style={{ width: "600px" }} />
					</div>
					<div className="container-text">
						<h2 style={{ color: selectedColor }}> Stumble On Celluloids </h2>
						<p>
							I am a keen young developer who is inspired and motivated by the
							fast-paced and ever-changing environment of software development.
							Bringing the technical and visual aspects of digital products to
							life is my passion.
						</p>
						<div style={{ display: "flex", justifyContent: "flex-start" }}>
							<FaReact style={{ fontSize: "20px", margin: "0px 10px" }} />
							<FaHtml5 style={{ fontSize: "20px", margin: "0px 10px" }} />
							<FaCss3 style={{ fontSize: "20px", margin: "0px 10px" }} />
							<SiJavascript style={{ fontSize: "20px", margin: "0px 10px" }} />
						</div>
						<div>
							<a href="https://github.com/gshelly/ShellPortfolio">
								<button
									className="view-button"
									style={{
										backgroundColor: selectedColor,
									}}
								>
									{" "}
									View It Here{" "}
								</button>
							</a>
							<a href="https://github.com/gshelly/ShellPortfolio">
								<button
									className="view-button"
									style={{
										backgroundColor: selectedColor,
										margin: "20px",
									}}
								>
									{" "}
									View Github Repo{" "}
								</button>{" "}
							</a>
						</div>
					</div>
				</div>

        <div className="container-work">
        <div className="container-img">
						<img src={project3} alt="p1" style={{ width: "500px" }} />
					</div>
					<div className="container-text">
						<h2 style={{ color: selectedColor }}> Rejuvenating You </h2>
						<p>
							I am a keen young developer who is inspired and motivated by the
							fast-paced and ever-changing environment of software development.
							Bringing the technical and visual aspects of digital products to
							life is my passion.
						</p>
						<div style={{ display: "flex", justifyContent: "flex-start" }}>
							<FaReact style={{ fontSize: "20px", margin: "0px 10px" }} />
							<FaHtml5 style={{ fontSize: "20px", margin: "0px 10px" }} />
							<FaCss3 style={{ fontSize: "20px", margin: "0px 10px" }} />
							<SiJavascript style={{ fontSize: "20px", margin: "0px 10px" }} />
						</div>
						<div>
							<a href="https://github.com/gshelly/ShellPortfolio">
								<button
									className="view-button"
									style={{
										backgroundColor: selectedColor,
									}}
								>
									{" "}
									View It Here{" "}
								</button>
							</a>
							<a href="https://github.com/gshelly/ShellPortfolio">
								<button
									className="view-button"
									style={{
										backgroundColor: selectedColor,
										margin: "20px",
									}}
								>
									{" "}
									View Github Repo{" "}
								</button>{" "}
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Services;
