import React from "react";
import githubImg from "../assets/github.png";
import instaImg from "../assets/instagram-new.png";
import linkedinImg from "../assets/linkedin.png";
import twitterxImg from "../assets/twitterx.png";
import dorianImg from "../assets/dorian.png";
import Links from "./sub-components/Links";
import "./header.css";

const Header = () => {
  return (
    <div id="header" className="container black-container flex-container">
      <Links />
      <img className="dorian-img" src={dorianImg} alt="dorian-img" />
      {/* <div className="pattern-container"></div> */}
      <div className="welcome-text">
        <h1>
          Nice to meet you! I'm{" "}
          <span id="full-name">Dorian Taponzing Donfack.</span>
        </h1>
        <p className="description">
          Based in Georgia, USA, I'm an aspiring software engineer passionate
          about building accessible web apps that users love.
        </p>
      </div>
      <div className="contact-link-container">
        <a href="#">Contact Me</a>
      </div>
    </div>
  );
};

export default Header;
