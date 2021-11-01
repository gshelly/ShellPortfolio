import React from "react";
import styled from "styled-components";
import "./about.css";

function Experience(props) {
	let { selectedColor } = props;

	const Title1 = styled.h5`
		color: ${selectedColor};
		margin: 0px 0px 0px -10px;

		&:before {
			content: "1";
			background-color: ${selectedColor};
			width: 40px;
			height: 40px;
			border-radius: 50%;
			display: inline-block;
			text-align: center;
			color: white;
			line-height: 40px;
		}
	`;
	const Title2 = styled.h5`
		color: ${selectedColor};
		margin: 0px 0px 0px -10px;

		&:before {
			content: "2";
			background-color: ${selectedColor};
			width: 40px;
			height: 40px;
			border-radius: 50%;
			display: inline-block;
			text-align: center;
			color: white;
			line-height: 40px;
		}
	`;

	const Title3 = styled.h5`
		color: ${selectedColor};
		margin: 0px 0px 0px -10px;

		&:before {
			content: "3";
			background-color: ${selectedColor};
			width: 40px;
			height: 40px;
			border-radius: 50%;
			display: inline-block;
			text-align: center;
			color: white;
			line-height: 40px;
		}
	`;

	return (
		<div className="experience">
			<h2
				style={{
					border: `3px solid #555555`,
					padding: "10px",
					display: "inline-block",
				}}
			>
				{" "}
				Work Experiences{" "}
			</h2>

			<ul style={{ listStyleType: "none" }}>
				<li>
					<Title1>
						{" "}
						<span style={{ paddingLeft: "15px" }}> Aug 2015 to Oct 2018 </span>
					</Title1>
					<p
						style={{
							padding: "20px 40px",
							margin: "0px 10px",
							borderLeft: `3px solid ${selectedColor}`,
						}}
					>
						<span>Associate Software Engineer (iOS App Development)</span>
						<span style={{ color: selectedColor }}> - Accenture </span>
						<p className="exp-desc">
							{" "}
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
							tempora perferendis vero officia enim impedit voluptatem
							dignissimos, veniam ratione est alias rerum aperiam, nam aliquam
							reprehenderit iste dolor.
						</p>
					</p>
				</li>
				<li>
					<Title2>
						<span style={{ paddingLeft: "15px" }}>Nov 2018 to March 2021</span>
					</Title2>
					<p
						style={{
							padding: "20px 40px",
							margin: "0px 10px",
							borderLeft: `3px solid ${selectedColor}`,
						}}
					>
						<span>Consultant (iOS App Development)</span>
						<span style={{ color: selectedColor }}> - Deloitte </span>
						<p className="exp-desc">
							{" "}
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
							tempora perferendis vero officia enim impedit voluptatem
							dignissimos, veniam ratione est alias rerum aperiam, nam aliquam
							reprehenderit iste dolor.
						</p>
					</p>
				</li>
				<li>
					<Title3>
						<span style={{ paddingLeft: "15px" }}> Apr 2021 - Present</span>
					</Title3>
					<p
						style={{
							padding: "0px 40px",
							margin: "0px 10px",
							borderLeft: `3px solid ${selectedColor}`,
						}}
					>
						<span>Currently working on MERN</span>
						<p className="exp-desc">
							{" "}
							Upgrading my skills in, and understanding of MERN(MongoDB, Express
							js, React js, Node js). This Website has been developed by myself
							using React js. Also having fun with animating things via css.
						</p>
					</p>
				</li>
			</ul>
		</div>
	);
}

export default Experience;
