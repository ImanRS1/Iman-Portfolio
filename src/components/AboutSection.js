import React from "react";
import iman from "../img/iman.jpg";
import iman1 from "../img/iman1.jpg";
import { motion } from "framer-motion";
import { titleAnim, fade, imgAnim } from "../animation";
import Wave from "./Wave";
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "../styles";

const ScrollBottom = () => {
  window.scrollTo({
    top: 200000,
    left: 0,
    behavior: "smooth",
  });
};

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
        <motion.p variants={fade}>
          “I believe that a persons greatest asset is not necessarily the
          knowledge they possess, but their ability to acquire and understand
          new knowledge.”
        </motion.p>
        <motion.button variants={fade} onClick={ScrollBottom}>
          Contact Iman
        </motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img
          src={iman}
          alt="Image of Iman Reza Soltani"
          variants={imgAnim}
        />
        <motion.img
          src={iman1}
          alt="Image of Iman Reza Soltani"
          variants={imgAnim}
        />
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

export default AboutSection;
