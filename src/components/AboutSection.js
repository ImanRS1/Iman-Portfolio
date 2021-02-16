import React from "react";
import home1 from "../img/placeholder-img.jpg";
import {motion} from "framer-motion";
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "../styles";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div className="title">
          <StyledHide className="StyledHide">
            <motion.h2>lorem 1</motion.h2>
          </StyledHide>
          <StyledHide className="StyledHide">
            <motion.h2>
              lor<span>rem</span> 3
            </motion.h2>
          </StyledHide>
          <StyledHide className="StyledHide">
            <motion.h2>lorem 3</motion.h2>
          </StyledHide>
        </motion.div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
          praesentium deserunt amet?
        </p>
        <button>Contact Iman</button>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt="Image of Iman Reza Soltani" />
      </StyledImage>
    </StyledAbout>
  );
};

export default AboutSection;
