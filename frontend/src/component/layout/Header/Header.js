import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";


const options = {
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "140px",
  navColor1: "#9cbbd6",
  logoHoverSize: "4px",
  logoHoverColor: "#241201",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "20px",
  link1Color: "#010430",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#0513e3",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "#010430",
  searchIconColor: "#010430",
  cartIconColor: "#010430",
  profileIconColorHover: "#0513e3",
  searchIconColorHover: "#0513e3",
  cartIconColorHover: "#0513e3",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};
export default Header;
