import React from "react";
import Header from "../components/Header";
import "../App.css";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Root = () => {
  return (
    <>
      <Header />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default Root;
