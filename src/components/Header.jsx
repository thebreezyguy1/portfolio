import React from "react";
import githubImg from "../assets/github.png";
import instaImg from "../assets/instagram-new.png";
import linkedinImg from "../assets/linkedin.png";
import twitterxImg from "../assets/twitterx.png";
import dorianImg from "../assets/dorian.png";

const Header = () => {
  return (
    <div id="header">
      <h1 id="my-name">doriantaponzing</h1>
      <ul className="links">
        <li>
          <a href="https://github.com/thebreezyguy1">
            <img src={githubImg} alt="github" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/thebreezyguy">
            <img src={instaImg} alt="instagram" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/dorian-taponzing-donfack">
            <img src={linkedinImg} alt="linkedin" />
          </a>
        </li>
        <li>
          <a href="https://x.com/thebreezyguy168">
            <img src={twitterxImg} alt="x" />
          </a>
        </li>
      </ul>
      <img className="dorian-img" src={dorianImg} alt="dorian-img" />
      <div className="welcome-text">
        <h1>
          Nice to meet you! I'm{" "}
          <span id="full-name">Dorian Taponzing Donfack.</span>
        </h1>
        <p>
          Based in Georgia, USA, I'm an aspiring software engineer passionate
          about building accessible web apps that users love.
        </p>
      </div>
    </div>
  );
};

export default Header;
