import React from "react";
import "./GetInTouch.css";

const GetInTouch = () => {
  return (
    <section className="getInTouch" data-aos="fade-in" data-aos-offset="50">
      <h2 data-aos="fade-up">
        Get the new technology for later and read it at any time
      </h2>
      <div className="input-box">
        <input placeholder="Email" type="text" />
        <button>Subscribe</button>
      </div>
    </section>
  );
};

export default GetInTouch;
