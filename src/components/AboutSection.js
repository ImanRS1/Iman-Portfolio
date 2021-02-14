import React from "react";
import home1 from "../img/placeholder-img.jpg";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>lorem 1</h2>
          </div>
          <div className="hide">
            <h2>
              lor<span>rem</span> 3
            </h2>
          </div>
          <div className="hide">
            <h2>lorem 3</h2>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
          praesentium deserunt amet?
        </p>
        <button>Contact Iman</button>
      </div>
      <div className="image">
        <img src={home1} alt="Image of Iman Reza Soltani" />
      </div>
    </div>
  );
};

export default AboutSection;
