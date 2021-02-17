import React from "react";
import home1 from "../img/placeholder-img.jpg";
import iman from "../img/iman.jpg";
import { motion } from "framer-motion";
import { titleAnim, fade, imgAnim } from "../animation";
import Wave from "./Wave";
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
            <motion.h2 variants={titleAnim}>lorem 1</motion.h2>
          </StyledHide>
          <StyledHide className="StyledHide">
            <motion.h2 variants={titleAnim}>
              lor<span>rem</span> 3
            </motion.h2>
          </StyledHide>
          <StyledHide className="StyledHide">
            <motion.h2 variants={titleAnim}>lorem 3</motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fade}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
          praesentium deserunt amet?
        </motion.p>
        <motion.button variants={fade}>Contact Iman</motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img
          src={iman}
          alt="Image of Iman Reza Soltani"
          variants={imgAnim}
        />
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

export default AboutSection;
