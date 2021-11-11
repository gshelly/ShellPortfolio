import React from "react";
import PageTransition from "../../components/PageTransition/PageTransition";
import "./Project.css";
import project2 from "../../images/P2.png";
import project3 from "../../images/Project3.png";
import project1 from "../../images/Project1.png";
import {
	FaReact,
	FaHtml5,
	FaCss3,
	FaNodeJs,
	FaBootstrap,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

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
							display: "inline-block",
							borderBottom: `3px solid ${selectedColor}`,
							paddingBottom: "20px",
							margin: "0px",
						}}
					>
						{" "}
						Personal MERN projects built within 2 months of learning it.
					</h2>
					<h5>
						{" "}
						(Industries projects are not listed here which are built using Swift
						and Objective-C.)
					</h5>
				</div>
				<div className="container-work">
					<div className="container-img">
						<img src={project1} alt="p1" />
					</div>
					<div className="container-text">
						<h2 style={{ color: selectedColor }}> Personal Website </h2>
						<p>
							Coding for your own personal project is an extremely rewarding
							experience. All aspects of this website were designed and
							developed by me, including the logo, the wallpaper, the color
							palette for changing colors, as well as the smooth animations and
							component based coding. The website has been developed using React
							JS and is responsive, as well.
						</p>
						<div style={{ display: "flex", justifyContent: "flex-start" }}>
							<FaReact style={{ fontSize: "20px", margin: "0px 10px" }} />
							<FaHtml5 style={{ fontSize: "20px", margin: "0px 10px" }} />
							<FaCss3 style={{ fontSize: "20px", margin: "0px 10px" }} />
							<SiJavascript style={{ fontSize: "20px", margin: "0px 10px" }} />
						</div>
						<div>
							<a href="https://www.shellyguptaz.com/">
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
						<img src={project2} alt="p2" />
					</div>
					<div className="container-text">
						<h2 style={{ color: selectedColor }}> Stumble On Celluloids </h2>
						<p>
							The vision is to drive the sense of randomly discovering a movie
							that you may or may not have seen.The feeling of randomly
							stumbling onto a gem of a movie is what StubmbleOnCelluliod is all
							about. Join the discussion with strangers across the world to
							discover the fun of discussing a movie and knowing about it
						</p>
						<div style={{ display: "flex", justifyContent: "flex-start" }}>
							<FaReact style={{ fontSize: "20px", margin: "0px 10px" }} />
							<DiMongodb style={{ fontSize: "20px", margin: "0px 10px" }} />
							<FaNodeJs style={{ fontSize: "20px", margin: "0px 10px" }} />
							<FaBootstrap style={{ fontSize: "20px", margin: "0px 10px" }} />
							<FaHtml5 style={{ fontSize: "20px", margin: "0px 10px" }} />
							<FaCss3 style={{ fontSize: "20px", margin: "0px 10px" }} />
							<SiJavascript style={{ fontSize: "20px", margin: "0px 10px" }} />
						</div>
						<div>
							<a href="http://18.219.101.119/">
								<button
									className="view-button block"
									style={{
										backgroundColor: selectedColor,
									}}
								>
									{" "}
									View It Here{" "}
								</button>
							</a>
							<a href="https://github.com/gshelly/stumbleOnCelluloid">
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
						<img src={project3} alt="p3" />
					</div>
					<div className="container-text">
						<h2 style={{ color: selectedColor }}> Rejuvenating You </h2>
						<p>
							Using this project, you can track your carb, protein, and fat
							intake to rejuvenate yourself.With a pie chart, you
							can more easily comprehend your daily diet chart.The user can
							enter the food they ate for breakfast, lunch, and dinner and a pie
							chart will be generated in response.
						</p>
						<div style={{ display: "flex", justifyContent: "flex-start" }}>
							<FaReact style={{ fontSize: "20px", margin: "0px 10px" }} />
							<DiMongodb style={{ fontSize: "20px", margin: "0px 10px" }} />
							<FaNodeJs style={{ fontSize: "20px", margin: "0px 10px" }} />
							<FaBootstrap style={{ fontSize: "20px", margin: "0px 10px" }} />
							<FaHtml5 style={{ fontSize: "20px", margin: "0px 10px" }} />
							<FaCss3 style={{ fontSize: "20px", margin: "0px 10px" }} />
							<SiJavascript style={{ fontSize: "20px", margin: "0px 10px" }} />
						</div>
						<div>
							<a href="http://18.118.137.27/">
								<button
									className="view-button block"
									style={{
										backgroundColor: selectedColor,
									}}
								>
									{" "}
									View It Here{" "}
								</button>
							</a>
							<a href="https://github.com/gshelly/RejuvenatingYou">
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
