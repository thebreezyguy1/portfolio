import React from "react";
import githubImg from "../../assets/github.png";
import instaImg from "../../assets/instagram-new.png";
import linkedinImg from "../../assets/linkedin.png";
import twitterxImg from "../../assets/twitterx.png";

const Links = () => {
  return (
    <>
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
    </>
  );
};

export default Links;