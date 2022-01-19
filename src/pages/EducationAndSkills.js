import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import {
  pageAnimation,
  slider,
  sliderContainer,
  fade,
  lineAnim,
  skillsStagger,
  skillAnim,
  scrollReveal,
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
import treehouse from "../img/treehouse.png";
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
import motionI from "../img/motion-icon.png";
import jsxI from "../img/jsx-icon.png";
import styledI from "../img/styled-icon.png";
import gatsbyI from "../img/gatsby-icon.svg"
import pugI from "../img/pug-icon.svg"
import expressI from "../img/express-icon.png"
import sqlI from "../img/sql-icon.png"
import graphI from "../img/graphql-icon.svg";
import mochaI from "../img/mocha-icon.svg";
import jestI from "../img/jest-icon.svg"
import pSQL from "../img/postgresql-icon.svg"
import mongoI from "../img/mongodb-icon.svg"
import contentI from "../img/contentful-icon.svg"
import nextjs from "../img/next-js.svg"
import docker from "../img/docker.svg"


const EducationAndSkills = () => {
  const [element, controls] = useScroll();
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
            <img src={reactI} alt="skill icon"/>
            <p>React</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={scss} alt="skill icon" />
            <p>SASS</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={npm} alt="skill icon" />
            <p>NPM</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={nodeI} alt="skill icon" />
            <p>NodeJS</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={bs} alt="skill icon" />
            <p>BootStrap5</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={js} alt="skill icon" />
            <p>JavaScript(ES6)</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={ht} alt="skill icon" />
            <p>HTML5+</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={redux} alt="skill icon" />
            <p>Redux</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={css} alt="skill icon" />
            <p>CSS3</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={gitI} alt="skill icon" />
            <p>Git</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={jqr} alt="skill icon" />
            <p>jQuerry</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={motionI} alt="skill icon" />
            <p>Framer Motion</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={jsxI} alt="skill icon" />
            <p>JSX Syntax</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={styledI} alt="skill icon" />
            <p>SComponents</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={gatsbyI} alt="skill icon" />
            <p>Gatsby</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={pugI} alt="skill icon" />
            <p>PugJS</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={expressI} alt="skill icon" />
            <p>ExpressJS</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={sqlI} alt="skill icon" />
            <p>SQLite</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={graphI} alt="skill icon" />
            <p>GraphQL</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={mochaI} alt="skill icon" />
            <p>Mocha</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={jestI} alt="skill icon" />
            <p>Jest</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={pSQL} alt="skill icon" />
            <p>PostgreSQL</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={mongoI} alt="skill icon" />
            <p>MongoDB</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={contentI} alt="skill icon" />
            <p>Contentful</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={nextjs} alt="skill icon" />
            <p>NextJS</p>
          </StyledSkill>
        </StyledHide>
        <StyledHide>
          <StyledSkill variants={skillAnim}>
            <img src={docker} alt="skill icon" />
            <p>Docker</p>
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
        <EducationDiv>

        <StyledEducation variants={scrollReveal}>
          <img src={treehouse} />
          <div>
            <h3>
              <span>Teamtreehouse</span>
            </h3>

            <p>Full Stack JavaScript development</p>
            <p>Online, remote</p>
          </div>
        </StyledEducation>
        <StyledEducation variants={scrollReveal}>
          <img src={cme} />
          <div>
            <h3>
              <span>Changemaker Educations</span>
            </h3>

            <p>Front-end development</p>
            <p>Stockholm, Sweden</p>
          </div>
        </StyledEducation>
        <StyledEducation variants={scrollReveal}>
          <img src={mdh} />
          <div>
            <h3>
              <span>University of Mälardalen</span>
            </h3>
            <p>Bachelors degree in Engineering - Aeronautical engineering</p>
            <p>Västerås, Sweden</p>
          </div>
        </StyledEducation>
        </EducationDiv>
      </StyledEducationsHolder>

      <ScrollTop />
    </StyledEandSContainer>
  );
};

const EducationDiv = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`

export default EducationAndSkills;
