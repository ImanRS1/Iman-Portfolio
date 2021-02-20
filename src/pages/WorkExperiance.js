import React from "react";
import plane1 from "../img/plane3.jpg";
import code2 from "../img/code2.jpg";
import turbine1 from "../img/gasturbine12.jpg";
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
import {
  StyledHide,
  Frame1,
  Frame2,
  Frame3,
  Frame4,
  StyledWorks,
  StyledWork,
  StyledWorkxHeaders,
} from "../styles";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const WorkExperiance = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <StyledWorks
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
      <StyledWork>
        <Link to="/work/work">
          <StyledWorkxHeaders variants={fade}>
            <h2>Front-end Developer</h2>
            <h2>2020-2021</h2>
          </StyledWorkxHeaders>
        </Link>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/work">
          <StyledHide>
            <motion.img
              variants={imgAnim}
              src={code2}
              alt="Picture of second work experiance"
            />
          </StyledHide>
        </Link>
      </StyledWork>
      <StyledWork
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
        layout="position"
      >
        <Link to="/work/work1">
          <StyledWorkxHeaders variants={fade}>
            <h2>Commissioning Engineer</h2>
            <h2>2014-2021</h2>
          </StyledWorkxHeaders>
        </Link>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/work1">
          <StyledHide>
            <motion.img
              variants={imgAnim}
              src={turbine1}
              alt="Picture of second work experiance"
            />
          </StyledHide>
        </Link>
      </StyledWork>
      <StyledWork
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
        layout="position"
      >
        <Link to="/work/work2">
          <StyledWorkxHeaders variants={fade}>
            <h2>Engineering Part-M</h2>
            <h2>2012-2014</h2>
          </StyledWorkxHeaders>
        </Link>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/work2">
          <StyledHide>
            <motion.img
              variants={imgAnim}
              src={plane1}
              alt="Picture of first work experiance"
            />
          </StyledHide>
        </Link>
      </StyledWork>
      <ScrollTop />
    </StyledWorks>
  );
};

export default WorkExperiance;
