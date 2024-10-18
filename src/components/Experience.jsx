import React, { useEffect } from "react";
import htmlImg from "../assets/html.svg.png";
import cssImg from "../assets/css-icon.webp";
import jsImg from "../assets/js-logo.png";
import pythonImg from "../assets/python-logo.png";
import javaImg from "../assets/java-logo.png";

const Experience = () => {
  useEffect(() => {
    const slider = document.getElementById("experience-container-slider");
    let currentIndex = 0;

    const slideItems = () => {
      const items = document.querySelectorAll(".experience-item");
      const totalItems = items.length;
      const itemsPerSlide = 2;
      const totalSlides = Math.ceil(totalItems / itemsPerSlide);

      currentIndex = (currentIndex + 1) % totalSlides;
      const offset = -(currentIndex * 100);
      slider.style.transform = `translateX(${offset}%)`;
    };

    const interval = setInterval(slideItems, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="experience-container">
      <div id="experience-container-slider" className="slider">
        <div className="experience-item">
          <img src={htmlImg} alt="html-img" />
          <p>4 Years of Experience</p>
        </div>
        <div className="experience-item">
          <img src={cssImg} alt="css-img" />
          <p>4 Years of Experience</p>
        </div>
        <div className="experience-item">
          <img src={jsImg} alt="js-img" />
          <p>4 Years of Experience</p>
        </div>
        <div className="experience-item">
          <img src={pythonImg} alt="python-img" />
          <p>4 Years of Experience</p>
        </div>
        {/* <div className="experience-item">
          <img src={javaImg} alt="java-img" />
          <p>4 Years of Experience</p>
        </div>
        <div className="experience-item">
          <img src={pythonImg} alt="python-img" />
          <p>4 Years of Experience</p>
        </div> */}
      </div>
    </div>
  );
};

export default Experience;
