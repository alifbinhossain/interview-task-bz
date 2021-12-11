import React from "react";
import "./CtaIntro.css";

const CtaIntro = () => {
  const icons = ["fas fa-code", "fas fa-heart color-pink", "far fa-star"];
  return (
    <section className="cta-intro">
      {icons.map((icon, index) => (
        <i className={icon} key={index}></i>
      ))}
      <h2>Better Landing for Your Startup</h2>
      <p>
        We have created a new product that will help designers, developers and
        companies create websites for their startups quickly and easily.
      </p>
    </section>
  );
};

export default CtaIntro;
