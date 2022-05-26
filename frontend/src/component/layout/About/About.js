import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/alish_dl";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dces7in3l/image/upload/v1652926901/avatars/rjdbtsiqni1gcvhwbhrm.jpg"
              alt="profile"
            />
            <Typography>Alish Dahal</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              When it feels scary to jump, that is exactly when you jump,
              otherwise you end up staying in the same place your whole life,
              and that I can't do.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://linkedin.com/in/alish-dahal-9b92081a0"
              target="blank"
            >
              <LinkedInIcon className="linkedInsvgIcon" />
            </a>

            <a href="https://www.instagram.com/alish_dl" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
