import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
// import { Link, glide } from 'react-tiger-transition';
import styled from "styled-components";

export const Nav = styled.nav`
	background: black;
	height: 80px;
	display: flex;
	justify-content: space-between;
	padding: 0 0.2rem;
	z-index: 10;
`;

export const NavLink = styled(Link)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0px;
	margin: 0px;
	height: 100%;
	cursor: pointer;

	&:hover {
		color: ${({selectedColor}) => selectedColor};
	}
`;

export const NavBrandButton = styled.button`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0px;
	margin: 0px;
	height: 100%;
	background: transparent;
	border: none;
	outline: none;
	`;

export const NavBrand = styled.img`
	width: 400px;
	height: 230px;

  @media screen and (max-width: 1000px) {
		width: 200px;
		height: 130px;
    margin-left: -20px;
	}
`;

export const NavButton = styled.button`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0px;
	margin: 0px;
	height: 100%;
	cursor: pointer;
	background: transparent;
	border: none;
	font-family: "Domine", serif;
	font-size: 1rem;

	&:hover {
		color: ${({selectedColor}) => selectedColor};
	}

	@media screen and (max-width: 1000px) {
		font-size: 0.8rem;
	}
  @media screen and (max-width: 768px) {
		display: none;
	}
`;

export const Bars = styled(FaBars)`
	display: none;
	color: #fff;

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 75%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	// align-items: center;
	width: 400px;
	justify-content: space-between;

	/* @media screen and (max-width: 768px) {
		display: none;
	} */
	@media screen and (max-width: 1000px) {
		width: 300px;
		margin: 0px 20px;
	}
`;


// export const NavSideMenu = styled.div`
//   display: none;

// 	@media screen and (max-width: 768px) {
//     display: block;
// 	  align-items: left;
// 	  width: 70px;
//     /* justify-content: space-between; */
//     margin-left:-500px;
//   }
// `;

export const Customization = styled.p`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0px;
  margin: 0px;
  height: 100%;
  cursor: pointer;

&:hover {
  color: ${({selectedColor}) => selectedColor};
}
  @media screen and (max-width: 1000px) {
		font-size: 0.8rem;
    background-color: black;
	}
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    margin-left: -70px;
  }

  @media screen and (max-width: 630px) {
    font-size: 1.1rem;
    margin-left: 0px;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.0rem;
    margin-left: -10px;
  }
`;

export const SocialNavMenu = styled.div`
	display: flex;
	// align-items: center;
	width: 300px;
	justify-content: space-evenly;

	@media screen and (max-width: 768px) {
		display: none;
	}

	@media screen and (max-width: 1000px) {
		width: 150px;
	}
`;

// export const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;
//   margin-right: 24px;

//   /* Third Nav */
//   /* justify-content: flex-end;
//   width: 100vw; */

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const NavBtnLink = styled(Link)`
//   border-radius: 4px;
//   background: #256ce1;
//   padding: 10px 22px;
//   color: #fff;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;

//   /* Second Nav */
//   margin-left: 24px;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     color: #010606;
//   }
// `;
