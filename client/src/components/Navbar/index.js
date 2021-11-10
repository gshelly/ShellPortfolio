import React, { useState, useEffect } from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	Customization,
	NavButton,
  NavBrand,
  SocialNavMenu,
	NavBrandButton
} from "./NavbarElements";

import image from "../../images/logo.png";
import SocialFollow from "../Social/SocialFollow";
import Dropdown from "../dropDown/Dropdown";
import { useHistory } from "react-router-dom";

const Navbar = (props) => {
	const history = useHistory();
	const { toggle } = props;
	const [dropdown, setDropdown] = useState(false);

	const [selectedColor, setSelectedColor] = useState(props.selectedColor);
	const [visiblityCheck, setVisiblityCheck] = useState(props.visiblityCheck);
	const [toggleNewColor, setToggleNewColor] = useState(props.toggleNewColor);

	useEffect(() => {
		props.setSelectedColor(selectedColor);
		props.setVisiblityCheck(visiblityCheck);
	}, [props, selectedColor, visiblityCheck, toggleNewColor]);

	const onMouseEnter = () => {
		setDropdown(true);
		props.setToggleNewColor(false);
	};

	const onMouseLeave = () => {
		setDropdown(false);
    props.setToggleNewColor(false);
	};

	const handleNavigate = (pageName) => {
		let url = "/" + pageName;
		props.setToggleNewColor(true);
		// props.setToggleNewColor(tr!ue)
		history.push(url);
	};

  const clickedCustomization = () => {
    setDropdown(!dropdown)
    console.log("clicked");
    props.setToggleNewColor(false);
  }

	return (
		<>
			<Nav>
				<NavBrandButton onClick={() => handleNavigate("")}>
          {/* Shelly Gupta */}
					<NavBrand
						src={image}
						alt="logo"
					/>
				</NavBrandButton>
				<Bars onClick={toggle} />
				<NavMenu>
					<NavButton
						activeStyle
						selectedColor={selectedColor}
						onClick={() => handleNavigate("about")}
					>
						About
					</NavButton>
					<NavButton
						activeStyle
						selectedColor={selectedColor}
						onClick={() => handleNavigate("services")}
					>
						Projects
					</NavButton>
					<NavButton
						activeStyle
						selectedColor={selectedColor}
						onClick={() => handleNavigate("contact-us")}
					>
						Contact Me
					</NavButton>
					<Customization
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}
						selectedColor={selectedColor}
					>
						Customize{" "}
						<i className="fas fa-caret-down" style={{ marginLeft: "5px" }} onClick={clickedCustomization}/>
						{dropdown && (
							<Dropdown
								setSelectedColor={setSelectedColor}
								selectedColor={selectedColor}
								setVisiblityCheck={setVisiblityCheck}
								visiblityCheck={visiblityCheck}
							/>
						)}
					</Customization>

					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				<SocialNavMenu>
					<SocialFollow selectedColor={selectedColor} />
				</SocialNavMenu>
				{/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
			</Nav>
		</>
	);
};

export default Navbar;
