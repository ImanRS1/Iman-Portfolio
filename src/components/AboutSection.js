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
          <StyledHide>
            <motion.h2 variants={titleAnim}>Learning</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>
              <span>Never</span>
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>Ends</motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fade} style={{width: "80%"}}>
          “I believe that a persons greatest asset is not necessarily the knowledge they possess, but their ability to acquire and understand new knowledge.”
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
