import React from "react";
import { motion } from "framer-motion";
import {
  pageAnimation,
  slider,
  sliderContainer,
  fade,
  lineAnim,
} from "../animation";
import ScrollTop from "../components/ScrollTop";
import {
  Frame1,
  Frame2,
  Frame3,
  Frame4,
  StyledEandSContainer,
  StyledEducationsHolder,
  StyledEducation,
  StyledSkillsHolder,
  StyledSkill,
} from "../styles";
import { useScroll } from "../components/useScroll";
import mdh from "../img/mdh.jpg";
import cme from "../img/cme.jpg";
import jqr from "../img/jquery-icon.svg";
import ht from "../img/html-icon.svg";
import css from "../img/css-icon.png";
import scss from "../img/sass-icon.svg";
import js from "../img/javascript-icon.svg";
import bs from "../img/bootstrap-icon.svg";
import npm from "../img/npmjs-icon.svg";
import reactI from "../img/reactjs-icon.svg";
import nodeI from "../img/nodejs-icon.svg";
import gitI from "../img/git-scm-icon.svg";
import redux from "../img/redux.svg";

const EducationAndSkills = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <StyledEandSContainer
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

      <motion.h2 variants={fade}>Education and Skills</motion.h2>
      <motion.div variants={lineAnim} className="line"></motion.div>

      <h4>Skilled in:</h4>
      <StyledSkillsHolder>
        <StyledSkill>
          <img src={reactI} />
          <p>React</p>
        </StyledSkill>
        <StyledSkill>
          <img src={scss} />
          <p>SCSS</p>
        </StyledSkill>
        <StyledSkill>
          <img src={npm} />
          <p>NPM</p>
        </StyledSkill>
        <StyledSkill>
          <img src={nodeI} />
          <p>NodeJS</p>
        </StyledSkill>
        <StyledSkill>
          <img src={bs} />
          <p>BootStrap5</p>
        </StyledSkill>
        <StyledSkill>
          <img src={js} />
          <p>JavaScript</p>
        </StyledSkill>
        <StyledSkill>
          <img src={ht} />
          <p>HTML5+</p>
        </StyledSkill>
        <StyledSkill>
          <img src={redux} />
          <p>Redux</p>
        </StyledSkill>
        <StyledSkill>
          <img src={css} />
          <p>CSS3</p>
        </StyledSkill>
        <StyledSkill>
          <img src={gitI} />
          <p>Git</p>
        </StyledSkill>
        <StyledSkill>
          <img src={jqr} />
          <p>jQuerry</p>
        </StyledSkill>
      </StyledSkillsHolder>

      <StyledEducationsHolder
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
        layout="position"
      >
        <h4>Educations:</h4>
        <StyledEducation>
          <img src={cme} />
          <div>
            <h3>Changemaker Educations</h3>
            <p>Front-end development</p>
          </div>
        </StyledEducation>
        <StyledEducation>
          <img src={mdh} />
          <div>
            <h3>University of Mälardalen</h3>
            <p>Bachelors degree in Engineering - Aeronautical engineering</p>
          </div>
        </StyledEducation>
      </StyledEducationsHolder>

      <ScrollTop />
    </StyledEandSContainer>
  );
};

export default EducationAndSkills;
