import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedin,
	faFacebook,
	faTwitter,
	faInstagram,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./Social.css";

export default function SocialFollow(props) {
	const [hoverLinkedin, setHoverLinkedin] = useState(false);
	const [hoverFB, setHoverFB] = useState(false);
	const [hoverTwitter, setHoverTwitter] = useState(false);
	const [hoverInstagram, setHoverInstagram] = useState(false);
	const [hoverGithub, setHoverGithub] = useState(false);

	const onMouseEnterLinkedin = () => {
		setHoverLinkedin(true);
	};

	const onMouseLeaveLinkedin = () => {
		setHoverLinkedin(false);
	};
	const onMouseEnterFB = () => {
		setHoverFB(true);
	};

	const onMouseLeaveFB = () => {
		setHoverFB(false);
	};

	const onMouseEnterTwitter = () => {
		setHoverTwitter(true);
	};

	const onMouseLeaveTwitter = () => {
		setHoverTwitter(false);
	};

	const onMouseEnterInstagram = () => {
		setHoverInstagram(true);
	};

	const onMouseLeaveInstagram = () => {
		setHoverInstagram(false);
	};

	const onMouseEnterGithub = () => {
		setHoverGithub(true);
	};

	const onMouseLeaveGithub = () => {
		setHoverGithub(false);
	};

	return (
		<div className="social-container">
			<a
				href="https://www.linkedin.com/in/shelly-gupta-370a04143/"
				className="linkedin social"
				onMouseEnter={onMouseEnterLinkedin}
				onMouseLeave={onMouseLeaveLinkedin}
				style={hoverLinkedin ? { color: props.selectedColor } : null}
			>
				<FontAwesomeIcon icon={faLinkedin} />
			</a>
			<a
				href="https://www.facebook.com/shelly.gupta.71/"
				className="facebook social"
				onMouseEnter={onMouseEnterFB}
				onMouseLeave={onMouseLeaveFB}
				style={hoverFB ? { color: props.selectedColor } : null}
			>
				<FontAwesomeIcon icon={faFacebook} size="1x" />
			</a>
			<a
				href="https://twitter.com/Shell_believer"
				className="twitter social"
				onMouseEnter={onMouseEnterTwitter}
				onMouseLeave={onMouseLeaveTwitter}
				style={hoverTwitter ? { color: props.selectedColor } : null}
			>
				<FontAwesomeIcon icon={faTwitter} size="1x" />
			</a>
			<a
				href="https://www.instagram.com/shellyJgupta/"
				className="instagram social"
				onMouseEnter={onMouseEnterInstagram}
				onMouseLeave={onMouseLeaveInstagram}
				style={hoverInstagram ? { color: props.selectedColor } : null}
			>
				<FontAwesomeIcon icon={faInstagram} size="1x" />
			</a>
			<a
				href="https://github.com/gshelly"
				className="github social"
				onMouseEnter={onMouseEnterGithub}
				onMouseLeave={onMouseLeaveGithub}
				style={hoverGithub ? { color: props.selectedColor } : null}
			>
				<FontAwesomeIcon icon={faGithub} size="1x" />
			</a>
		</div>
	);
}
