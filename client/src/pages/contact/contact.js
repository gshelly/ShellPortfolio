import React, { useState, useRef } from "react";
import PageTransition from "../../components/PageTransition/PageTransition";
import "./contact.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import emailjs from "emailjs-com";
import swal from "sweetalert";
import SocialMobile from "../../components/Social/SocialMobile";

const Contact = (props) => {
	let { selectedColor } = props;
	const form = useRef();
	const [email, setEmail] = useState("");
	const [userName, setUserName] = useState("");
	const [message, setMessage] = useState("");
	const [err, setErr] = useState({});
	const [isShow, setShow] = useState(true);

	const useStyles = makeStyles((theme) => ({
		root: {
			backgroundColor: "transparent",
			"& label.Mui-focused": {
				color: selectedColor,
				opacity: "1",
			},
			"& .MuiFormLabel-root": {
				color: "white",
				opacity: "0.2",
			},
			"& .MuiInput-underline:after": {
				borderBottomColor: "white",
			},
			"& .MuiOutlinedInput-root": {
				"& fieldset": {
					borderColor: "white",
				},
				"&:hover fieldset": {
					borderColor: "white",
				},
				"&.Mui-focused fieldset": {
					borderColor: selectedColor,
				},
			},
			"& .MuiInputBase-root": {
				color: "white",
			},
		},
		paper: {
			marginTop: theme.spacing(2),
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
		},
		form: {
			width: "100%", // Fix IE 11 issue.
			marginTop: theme.spacing(6),
		},
		submit: {
			margin: theme.spacing(3, 0, 2),
			backgroundColor: selectedColor,
			color: "white",
			fontWeight: "bolder",
			"&:hover": {
				backgroundColor: selectedColor,
				color: "black",
				// fontSize:"16px"
			},
			input: {
				color: "white",
				fontSize: "14px",
			},
		},
	}));
	const classes = useStyles();

	function validate(name, email, message) {
		const errors = {};
		if (name.length <= 0) {
			errors["name"] = "Name can't be empty";
		}

		if (email.length < 5) {
			errors["email"] = "Email should be at least 5 charcters long";
		} else if (email.split("").filter((x) => x === "@").length !== 1) {
			errors["email"] = "Email should contain a @";
		} else if (email.indexOf(".") === -1) {
			errors["email"] = "Email should contain at least one dot";
		}

		if (message.length < 10) {
			errors["message"] = "Message should be at least 10 charcters long";
		}

		return errors;
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setShow(false);
		let errors = validate(userName, email, message);
		console.log(Object.entries(errors).length);
		if (Object.entries(errors).length === 0) {
			emailjs
				.sendForm(
					process.env.REACT_APP_SERVICE_ID,
					process.env.REACT_APP_TEMPLATE_ID,
					form.current,
					process.env.REACT_APP_USER_ID
				)
				.then(
					(result) => {
						swal({
							title: "Thanks",
							text: "Your message has been sent successfully",
							icon: "success",
						});
						setUserName("");
						setEmail("");
						setMessage("");
					},
					(error) => {
						console.log(error.text);
					}
				);
		} else {
			setErr(errors);
		}
	};

	const changeNameEvent = (e) => {
		e.preventDefault();
		setShow(false);
		setUserName(e.target.value);
		let errors = validate(e.target.value, email, message);
		setErr(errors);
	};

	const changeEmailEvent = (e) => {
		setEmail(e.target.value);
		setShow(false);
		let errors = validate(userName, e.target.value, message);
		setErr(errors);
	};

	const changeMessageEvent = (e) => {
		setMessage(e.target.value);
		setShow(false);
		let errors = validate(userName, email, e.target.value);
		setErr(errors);
	};

	return (
		<>
			{isShow && props.toggleNewColor ? (
				<PageTransition selectedColor={selectedColor} />
			) : null}
			<div className="wrapper-contactus">
				<div className="header">
					<h4 style={{ color: selectedColor }} className="title">
						{" "}
						I am available for hire
					</h4>
					<h1
						className="title"
						style={{ borderBottom: `3px solid ${selectedColor}` }}
					>
						Contact Me
					</h1>
				</div>
				<Container component="main" maxWidth="xs" className={classes.root}>
					<div className={classes.paper}>
						<form className={classes.form} ref={form}>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<TextField
										autoComplete="name"
										name="name"
										variant="outlined"
										required
										fullWidth
										id="name"
										label="Your Name"
										value={userName}
										onChange={(e) => changeNameEvent(e)}
										error={err.name ? true : false}
										helperText={err.name ? err.name : ""}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										autoComplete="email"
										name="email"
										variant="outlined"
										required
										fullWidth
										id="email"
										label="Your Email"
										value={email}
										onChange={(e) => changeEmailEvent(e)}
										error={err.email ? true : false}
										helperText={err.email ? err.email : ""}
										// autoFocus
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant="outlined"
										required
										fullWidth
										id="outlined-multiline-static"
										label="Message"
										name="message"
										multiline
										rows={5}
										style={{ height: "100px" }}
										value={message}
										onChange={(e) => changeMessageEvent(e)}
										error={err.message ? true : false}
										helperText={err.message ? err.message : ""}
									/>
								</Grid>
							</Grid>

							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
								onClick={(e) => handleSubmit(e)}
								style={{ marginTop: "60px" }}
							>
								Send
							</Button>
							{/* <label style={{textAlign:"center", paddingLeft:"20px"}}> Your message has been sent successfully</label> */}
						</form>
					</div>
				</Container>
				<div className="SocialLink">
					<h4 style={{ margin: "20px", textAlign: "center", fontSize: "18px" }}>
						{" "}
						Feeling Social? Find me on these online spaces too!{" "}
					</h4>
					<SocialMobile selectedColor={selectedColor} />
				</div>
			</div>
		</>
	);
};

export default Contact;
