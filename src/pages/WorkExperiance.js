import React from "react";
import plane1 from "../img/plane3.jpg";
import code2 from "../img/code2.jpg";
import turbine1 from "../img/gasturbine12.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  imgAnim,
  lineAnim,
  slider,
  sliderContainer,
  skillsStagger,
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
import ScrollTop from "../components/ScrollTop";


const WorkExperiance = () => {

  return (
    <StyledWorks
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
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
              alt="Picture of some html code"
            />
          </StyledHide>
        </Link>
      </StyledWork>
      <StyledWork
        variants={fade}
        animate={skillsStagger}
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
              alt="Picture of a gas turbine"
            />
          </StyledHide>
        </Link>
      </StyledWork>
      <StyledWork
        variants={fade}
        animate={skillsStagger}
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
              alt="Picture of an airplane"
            />
          </StyledHide>
        </Link>
      </StyledWork>
      <ScrollTop />
    </StyledWorks>
  );
};


export default WorkExperiance;
