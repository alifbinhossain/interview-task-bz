import React from "react";
import Header from "../Header/Header";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <Header></Header>
      <div className="hero-content">
        <h1 className="heading-primary" data-aos="fade-up">
          Startup <br /> Framework. Suit <br /> Up Your Startup
        </h1>
        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
          We have created a new product that will help designers, developers and
          companies create websites for their startups quickly and easily.
        </p>
        <button
          className="btn-started"
          data-aos="fade-in"
          data-aos-delay="700"
          data-aos-duration="1500"
          data-aos-offset="0"
        >
          Get Started
        </button>
        <button
          className="btn-learn"
          data-aos="fade-in"
          data-aos-delay="700"
          data-aos-duration="1500"
          data-aos-offset="0"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
