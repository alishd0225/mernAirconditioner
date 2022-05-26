import React from "react";
import playstore from "../../../images/playstore.png";
import appstore from "../../../images/appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Download the App</h4>
        <p>Download the App for Android and IOS System</p>
        <img src={playstore} alt="playstore" />
        <img src={appstore} alt="appstore" />
      </div>

      <div className="midFooter">
        <h1>AirConditioner</h1>
        <p>Adjust the temperature of your life with our Product</p>

        <p>Copyrights 2022 &copy; Kapil and Alish</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="linkedin.com/in/alish-dahal-9b92081a0">LinkedIn</a>
        <a href="https://www.instagram.com/alish_dl">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
