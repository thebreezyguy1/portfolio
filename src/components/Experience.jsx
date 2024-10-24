import React, { useEffect } from "react";
import htmlImg from "../assets/html.svg.png";
import cssImg from "../assets/css-icon.webp";
import jsImg from "../assets/js-logo.png";
import pythonImg from "../assets/python-logo.png";
import javaImg from "../assets/java-logo.png";
import "./experience.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Experience = () => {
  // const swiper = new Swiper(".swiper", {
  //   // configure swiper to use modules
  //   modules: [Navigation, Pagination],
  //   autoplay: {
  //     delay: 500,
  //   },
  //   slidesPerView: 1,
  //   spaceBetween: 10,
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 2,
  //       spaceBetween: 20,
  //     },
  //     480: {
  //       slidesPerView: 3,
  //       spaceBetween: 30,
  //     },
  //     640: {
  //       slidesPerView: 4,
  //       spaceBetween: 40,
  //     },
  //   },

  //   speed: 400,
  //   direction: "horizontal",
  //   loop: true,
  // });

  return (
    // <div className="swiper">
    //   <div className="swipper-wrapper">
    //     <div className="swiper-slide experience-item">
    //       <img src={htmlImg} alt="html-img" />
    //       <p>4 Years of Experience</p>
    //     </div>
    //     <div className="swiper-slide experience-item">
    //       <img src={cssImg} alt="css-img" />
    //       <p>4 Years of Experience</p>
    //     </div>
    //     <div className="swiper-slide experience-item">
    //       <img src={jsImg} alt="js-img" />
    //       <p>4 Years of Experience</p>
    //     </div>
    //     <div className="swiper-slide experience-item">
    //       <img src={pythonImg} alt="python-img" />
    //       <p>4 Years of Experience</p>
    //     </div>
    //     {/* <div className="experience-item">
    //       <img src={javaImg} alt="java-img" />
    //       <p>4 Years of Experience</p>
    //     </div>
    //     <div className="experience-item">
    //       <img src={pythonImg} alt="python-img" />
    //       <p>4 Years of Experience</p>
    //     </div> */}
    //   </div>
    // </div>
    <Swiper
      slidesPerView={2}
      spaceBetween={30}
      loop={true}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      id="experience-container"
      className="container"
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Autoplay]}
    >
      <SwiperSlide className="experience-item">
        <img src={htmlImg} alt="html-img" />
        <p>HTML5</p>
      </SwiperSlide>
      <SwiperSlide className="experience-item">
        <img src={cssImg} alt="css-img" />
        <p>CSS3</p>
      </SwiperSlide>
      <SwiperSlide className="experience-item">
        <img src={jsImg} alt="js-img" />
        <p>JavaScript</p>
      </SwiperSlide>
      <SwiperSlide className="experience-item">
        <img src={pythonImg} alt="python-img" />
        <p>Python</p>
      </SwiperSlide>
      <SwiperSlide className="experience-item">
        <img src={javaImg} alt="java-img" />
        <p>Java</p>
      </SwiperSlide>
    </Swiper>
  );
};

export default Experience;
