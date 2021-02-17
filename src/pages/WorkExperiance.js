import React from "react";
import home1 from "../img/placeholder-img.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  imgAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";
import { StyledHide } from "../styles";

const WorkExperiance = () => {
  return (
    <Works
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "whitesmoke" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Work>
        <Link to="/work/work1">
          <motion.h2 variants={fade}>Second job</motion.h2>
        </Link>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/work1">
          <StyledHide>
            <motion.img
              variants={imgAnim}
              src={home1}
              alt="Picture of second work experiance"
            />
          </StyledHide>
        </Link>
      </Work>
      <Work>
        <Link to="/work/work2">
          <h2>First job</h2>
        </Link>
        <div className="line"></div>
        <Link to="/work/work2">
          <img src={home1} alt="Picture of first work experiance" />
        </Link>
      </Work>
    </Works>
  );
};

const Works = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Work = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default WorkExperiance;
