import React from "react";
import Header from "../components/Header";
import "../App.css";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      <Header />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Root;
