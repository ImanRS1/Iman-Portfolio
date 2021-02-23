import React from "react";
import { motion } from "framer-motion";
import {
  pageAnimation,
  slider,
  sliderContainer,
  fade,
  lineAnim,
  skillsStagger,
  skillAnim,
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
  StyledHide,
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

      <motion.h4 variants={fade}>Skilled in:</motion.h4>
      <StyledSkillsHolder variants={skillsStagger}>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={reactI} />
            <p>React</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={scss} />
            <p>SASS</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={npm} />
            <p>NPM</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={nodeI} />
            <p>NodeJS</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={bs} />
            <p>BootStrap5</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={js} />
            <p>JavaScript</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={ht} />
            <p>HTML5+</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={redux} />
            <p>Redux</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={css} />
            <p>CSS3</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={gitI} />
            <p>Git</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={jqr} />
            <p>jQuerry</p>
          </StyledSkill>
        </StyledHide>
      </StyledSkillsHolder>

      <StyledEducationsHolder
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
        layout="position"
      >
        <h4>Education:</h4>
        <StyledEducation>
          <img src={cme} />
          <div>
            <h3>
              <span>Changemaker Educations</span>
            </h3>

            <p>Front-end development</p>
            <p>Stockholm, Sweden</p>
          </div>
        </StyledEducation>
        <StyledEducation>
          <img src={mdh} />
          <div>
            <h3>
              <span>University of Mälardalen</span>
            </h3>
            <p>Bachelors degree in Engineering - Aeronautical engineering</p>
            <p>Västerås, Sweden</p>
          </div>
        </StyledEducation>
      </StyledEducationsHolder>

      <ScrollTop />
    </StyledEandSContainer>
  );
};

export default EducationAndSkills;
