import React from "react";
import projImg from "../assets/template-project-screenshot.png";

const Projects = () => {
  return (
    <div id="projects-container">
      <h1>Projects</h1>
      <div className="project-block">
        <img className="project-image" src={projImg} alt="matap-img" />
        <h2 className="project-title">TODO List App</h2>
        <ul className="language-list">
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <ul className="project-links">
          <li>
            <a href="">View Project</a>
          </li>
          <li>
            <a href="">View Code</a>
          </li>
        </ul>
      </div>
      <div className="project-block">
        <img className="project-image" src={projImg} alt="matap-img" />
        <h2 className="project-title">MATAP - Food Ordering System App</h2>
        <ul className="language-list">
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <ul className="project-links">
          <li>
            <a href="">View Project</a>
          </li>
          <li>
            <a href="">View Code</a>
          </li>
        </ul>
      </div>
      <div className="project-block">
        <img className="project-image" src={projImg} alt="matap-img" />
        <h2 className="project-title">Memory Game</h2>
        <ul className="language-list">
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <ul className="project-links">
          <li>
            <a href="">View Project</a>
          </li>
          <li>
            <a href="">View Code</a>
          </li>
        </ul>
      </div>
      <div className="project-block">
        <img className="project-image" src={projImg} alt="matap-img" />
        <h2 className="project-title">Schedule Management Web App</h2>
        <ul className="language-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <ul className="project-links">
          <li>
            <a href="">View Project</a>
          </li>
          <li>
            <a href="">View Code</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
