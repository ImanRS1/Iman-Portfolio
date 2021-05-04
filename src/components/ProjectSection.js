import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import fp1 from "../img/fp1.JPG";
import fp2 from "../img/fp2.jpg";
import fp3 from "../img/fp3.JPG";
import { useScroll } from "./useScroll";
import {
  scrollReveal,
  lineAnimSlow,
  expandProject,
  reduceProject,
  fpInfoFade,
  fpLinkFadeCode,
  fpLinkFadeDemo,
  skillsStagger,
  fastFade,
  linkIconAnim1,
  linkIconAnim2,
} from "../animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import ht from "../img/html-icon.svg";
import css from "../img/css-icon.png";
import scss from "../img/sass-icon.svg";
import js from "../img/javascript-icon.svg";
import npm from "../img/npmjs-icon.svg";
import reactI from "../img/reactjs-icon.svg";
import nodeI from "../img/nodejs-icon.svg";
import gitI from "../img/git-scm-icon.svg";
import redux from "../img/redux.svg";
import motionI from "../img/motion-icon.png";
import jsxI from "../img/jsx-icon.png";
import styledI from "../img/styled-icon.png";

const ProjectSection = () => {
  const [element, controls] = useScroll();

  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);

  return (
    <StyledProjectContainer
      variants={scrollReveal}
      animate={controls}
      initial={"hidden"}
      ref={element}
    >
      <div>
        <h2 className="section-header">
          Featured <span>Projects</span>
        </h2>
        <motion.div variants={lineAnimSlow} className="line"></motion.div>
      </div>
      <StyledProjectHolder>
        <StyledProject
          onClick={() => (
            setClicked1(!clicked1), setClicked2(false), setClicked3(false)
          )}
          variants={clicked1 ? expandProject : reduceProject}
          initial="hidden"
          animate="show"
        >
          <img
            src={fp1}
            className={clicked1 ? "clickedProject" : "nonClickedProject"}
          />

          {clicked1 === false && clicked2 === false && clicked3 === false && (
            <motion.div className="fp-name">
              <h2>IGNITE REACT REDUX</h2>
            </motion.div>
          )}

          {clicked1 === true && (
            <div>
              <motion.div
                className="project-info-fp1"
                variants={fpInfoFade}
                initial="hidden"
                animate="show"
              >
                <h2>Ignite React Redux</h2>
                <p>
                  An API connected game library website with a search function.
                  Displaying the latest, most popular, and new games using
                  RAWG.io database and API.
                </p>
                {/*  <p>
                  The website was created using React, Redux for state
                  management, axios API method, styled SASS components and
                  animations from framer motion.
                </p> */}

                <motion.div
                  className="used-skills-fp2"
                  variants={skillsStagger}
                >
                  <motion.img
                    src={reactI}
                    variants={fastFade}
                    title="ReactJS"
                  />
                  <motion.img src={redux} variants={fastFade} title="Redux" />
                  <motion.img src={jsxI} variants={fastFade} title="JSX" />
                  <motion.img src={scss} variants={fastFade} title="SASS" />
                  <motion.img
                    src={motionI}
                    variants={fastFade}
                    title="Framer Motion"
                  />
                  <motion.img src={npm} variants={fastFade} title="NPM" />
                  <motion.img src={nodeI} variants={fastFade} title="NodeJS" />
                  <motion.img src={gitI} variants={fastFade} title="Git" />
                  <motion.img src={ht} variants={fastFade} title="HTML5" />
                  <motion.img src={css} variants={fastFade} title="CSS3" />
                  <motion.img
                    src={js}
                    variants={fastFade}
                    title="JavaScript(ES6)"
                  />
                  <motion.img
                    src={styledI}
                    variants={fastFade}
                    title="Styled Components"
                  />

                  <motion.a
                    href="https://imanrs1.github.io/Ignite-React-Redux/"
                    target="_blank"
                    className="project-demolink-fp1"
                    variants={fpLinkFadeDemo}
                    initial="hidden"
                    animate="show"
                  >
                    <motion.div
                      variants={linkIconAnim1}
                      initial="hidden"
                      animate="show"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </motion.div>
                  </motion.a>
                  <motion.a
                    href="https://github.com/ImanRS1/Ignite-React-Redux"
                    target="_blank"
                    className="project-codelink-fp1"
                    variants={fpLinkFadeCode}
                    initial="hidden"
                    animate="show"
                  >
                    <motion.div
                      variants={linkIconAnim2}
                      initial="hidden"
                      animate="show"
                    >
                      <FontAwesomeIcon icon={faCode} />
                    </motion.div>
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          )}
        </StyledProject>
        <StyledProject
          onClick={() => (
            setClicked2(!clicked2), setClicked1(false), setClicked3(false)
          )}
          variants={clicked2 ? expandProject : reduceProject}
          initial="hidden"
          animate="show"
        >
          <img
            src={fp2}
            className={clicked2 ? "clickedProject" : "nonClickedProject"}
          />

          {clicked1 === false && clicked2 === false && clicked3 === false && (
            <motion.div className="fp-name">
              <h2>Nice weather everyday</h2>
            </motion.div>
          )}

          {clicked2 === true && (
            <div>
              <motion.div
                className="project-info-fp2-1"
                variants={fpInfoFade}
                initial="hidden"
                animate="show"
              >
                <h2>Nice Weather Everyday</h2>
                <p>
                  Pixel art inspired weather site using API from weatherapi.com.
                  The site includes a search function, actual wind force updated
                  wind turbine, forecasts for the following 3 day as well as an
                  interactive chart with hourly forecasts and conditions.
                </p>

                <motion.div
                  className="used-skills-fp2"
                  variants={skillsStagger}
                >
                  <motion.img
                    src={reactI}
                    variants={fastFade}
                    title="ReactJS"
                  />
                  <motion.img src={redux} variants={fastFade} title="Redux" />
                  <motion.img
                    src={motionI}
                    variants={fastFade}
                    title="Framer Motion"
                  />
                  <motion.img src={npm} variants={fastFade} title="NPM" />
                  <motion.img src={nodeI} variants={fastFade} title="NodeJS" />
                  <motion.img src={gitI} variants={fastFade} title="Git" />
                  <motion.img src={ht} variants={fastFade} title="HTML5" />
                  <motion.img src={css} variants={fastFade} title="CSS3" />
                  <motion.img
                    src={js}
                    variants={fastFade}
                    title="JavaScript(ES6)"
                  />
                  <motion.img
                    src={styledI}
                    variants={fastFade}
                    title="Styled Components"
                  />
                </motion.div>

                <motion.a
                  href="https://imanrs1.github.io/Nice-Weather-Everyday/"
                  target="_blank"
                  className="project-demolink-fp2"
                  variants={fpLinkFadeDemo}
                  initial="hidden"
                  animate="show"
                >
                  <motion.div
                    variants={linkIconAnim1}
                    initial="hidden"
                    animate="show"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </motion.div>
                </motion.a>
                <motion.a
                  href="https://github.com/ImanRS1/Nice-Weather-Everyday"
                  target="_blank"
                  className="project-codelink-fp2"
                  variants={fpLinkFadeCode}
                  initial="hidden"
                  animate="show"
                >
                  <motion.div
                    variants={linkIconAnim2}
                    initial="hidden"
                    animate="show"
                  >
                    <FontAwesomeIcon icon={faCode} />
                  </motion.div>
                </motion.a>
              </motion.div>
            </div>
          )}
        </StyledProject>
        <StyledProject
          onClick={() => (
            setClicked3(!clicked3), setClicked1(false), setClicked2(false)
          )}
          variants={clicked3 ? expandProject : reduceProject}
          initial="hidden"
          animate="show"
        >
          <img
            src={fp3}
            className={clicked3 ? "clickedProject" : "nonClickedProject"}
          />

          {clicked1 === false && clicked2 === false && clicked3 === false && (
            <motion.div className="fp-name">
              <h2>React music player</h2>
            </motion.div>
          )}

          {clicked3 === true && (
            <div>
              <motion.div
                className="project-info-fp3"
                variants={fpInfoFade}
                initial="hidden"
                animate="show"
              >
                <h2>React Music Player</h2>
                <p>
                  An app like music player with minimalistic styling, easy to
                  use and easy to like.
                </p>
                <p>
                  The website was created using React, JS (ES6), HTML5 and SASS
                  with imported fontawesome icons.
                </p>
                <motion.div
                  className="used-skills-fp2"
                  variants={skillsStagger}
                >
                  <motion.img
                    src={reactI}
                    variants={fastFade}
                    title="ReactJS"
                  />

                  <motion.img src={jsxI} variants={fastFade} title="JSX" />
                  <motion.img src={scss} variants={fastFade} title="SASS" />

                  <motion.img src={npm} variants={fastFade} title="NPM" />
                  <motion.img src={nodeI} variants={fastFade} title="NodeJS" />
                  <motion.img src={gitI} variants={fastFade} title="Git" />
                  <motion.img src={ht} variants={fastFade} title="HTML5" />
                  <motion.img src={css} variants={fastFade} title="CSS3" />
                  <motion.img
                    src={js}
                    variants={fastFade}
                    title="JavaScript(ES6)"
                  />
                  <motion.img
                    src={styledI}
                    variants={fastFade}
                    title="Styled Components"
                  />
                </motion.div>
                <motion.a
                  href="https://imanrs1.github.io/React-Music-Player/"
                  target="_blank"
                  className="project-demolink-fp3"
                  variants={fpLinkFadeDemo}
                  initial="hidden"
                  animate="show"
                >
                  <motion.div
                    variants={linkIconAnim1}
                    initial="hidden"
                    animate="show"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </motion.div>
                </motion.a>
                <motion.a
                  href="https://github.com/ImanRS1/React-Music-Player"
                  target="_blank"
                  className="project-codelink-fp3"
                  variants={fpLinkFadeCode}
                  initial="hidden"
                  animate="show"
                >
                  <motion.div
                    variants={linkIconAnim2}
                    initial="hidden"
                    animate="show"
                  >
                    <FontAwesomeIcon icon={faCode} />
                  </motion.div>
                </motion.a>
              </motion.div>
            </div>
          )}
        </StyledProject>
      </StyledProjectHolder>
    </StyledProjectContainer>
  );
};

const StyledProjectContainer = styled(motion.div)`
  padding: 5rem 10rem;
  color: white;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  .section-header {
    padding-bottom: 1.5rem;
  }

  @media (max-width: 1323px) {
    padding: 5rem 1rem 1rem 1rem;
  }

  @media (max-width: 640px) {
    .section-header {
      font-size: 2rem;
    }
  }
`;

const StyledProjectHolder = styled(motion.div)`
  display: flex;
  width: 100%;
  position: relative;
`;

const StyledProject = styled(motion.div)`
  display: flex;
  justify-content: center;
  border: 1px solid black;
  height: 70vh;
  cursor: pointer;
  .nonClickedProject {
    filter: grayscale(90%);
    height: 100%;
    width: 100%;
    &:hover {
      filter: grayscale(0%);
    }
  }

  .clickedProject {
    filter: grayscale(0%);
    margin: auto;
  }

  .fp-name {
    position: absolute;
    z-index: 5;
    transform: rotate(-90deg);
    bottom: 15rem;
    width: 29rem;

    h2 {
      font-size: 3rem;
      text-transform: uppercase;
      letter-spacing: 0.5rem;
      color: #7a4477;
      text-shadow: 4px 5px 4px #ababab;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: #23d997;
    }

    @media (max-width: 530px) {
      h2 {
        font-size: 2.5rem;
      }
    }
  }

  .project-info-fp1 {
    background-color: #1b1b1b;
    position: absolute;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 2px #ffffff;
    padding: 2rem;
    border: 5px solid #1b1b1b;
    width: 35rem;
    height: auto;
    top: 3%;
    left: 60%;

    h2 {
      font-size: 2rem;
      color: #23d997;
    }
    p {
      padding: 1rem 0;
    }

    img {
      width: 2rem;
      height: 2rem;
      margin: 0.5rem;
    }

    @media (max-width: 1464px) {
      padding: 1rem;
    }

    @media (max-width: 1020px) {
      width: 25rem;
    }

    @media (max-width: 715px) {
      width: 35rem;
      top: 64%;
      left: 10%;

      h2 {
        font-size: 1.5rem;
      }
      p {
        font-size: 1rem;
        padding: 0.2rem 0;
      }

      img {
        width: 1.2rem;
        height: 1.2rem;
        margin: 0.3rem;
      }
    }

    @media (max-width: 550px) {
      width: 35rem;
      top: 64%;
      left: 2%;
    }

    @media (max-width: 520px) {
      width: 25rem;
      top: 55%;
    }

    @media (max-width: 375px) {
      left: 0.1%;
      width: 20rem;
      h2 {
        margin-right: 5rem;
      }
    }
  }

  .project-demolink-fp1 {
    position: absolute;
    left: -22%;
    top: 5%;
    svg {
      font-size: 6rem;
    }

    @media (max-width: 1020px) {
      left: -30%;
    }

    @media (max-width: 715px) {
      left: 70%;
      top: 2%;

      svg {
        font-size: 3rem;
      }
    }

    @media (max-width: 375px) {
      left: 66%;
      top: 5%;

      svg {
        font-size: 2.5rem;
      }
    }
  }

  .project-codelink-fp1 {
    position: absolute;
    left: -46%;
    top: 5%;
    svg {
      font-size: 6rem;
    }

    @media (max-width: 1020px) {
      left: -64%;
    }

    @media (max-width: 715px) {
      left: 83%;
      top: 2%;

      svg {
        font-size: 3rem;
      }
    }

    @media (max-width: 375px) {
      left: 82%;
      top: 5%;
      svg {
        font-size: 2.5rem;
      }
    }
  }

  .project-info-fp2-1 {
    background-color: #1b1b1b;
    position: absolute;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 2px #ffffff;
    padding: 2rem;
    border: 5px solid #1b1b1b;
    width: 26rem;
    height: auto;
    top: 6%;
    left: -5%;

    h2 {
      font-size: 2rem;
      color: #23d997;
    }
    p {
      padding: 1rem 0;
    }
    img {
      width: 2rem;
      height: 2rem;
      margin: 0.5rem;
    }

    @media (max-width: 1464px) {
      padding: 1rem;
    }

    @media (max-width: 900px) {
      width: 40rem;
      top: 60%;
      left: -5%;
    }

    @media (max-width: 715px) {
      width: 30rem;
      top: 60%;
      left: -5%;

      h2 {
        font-size: 1.5rem;
      }
      p {
        font-size: 1rem;
        padding: 0.2rem 0;
      }
      img {
        width: 1.2rem;
        height: 1.2rem;
        margin: 0.3rem;
      }
    }

    @media (max-width: 459px) {
      h2 {
        margin-right: 6rem;
      }
      left: -8%;
      width: 22rem;
    }
  }

  .project-demolink-fp2 {
    position: absolute;
    right: -64%;
    top: -2%;
    svg {
      font-size: 6rem;
    }

    @media (max-width: 900px) {
      right: -18%;
      top: -2%;
    }

    @media (max-width: 715px) {
      left: 75%;
      top: 2%;

      svg {
        font-size: 3rem;
      }
    }

    @media (max-width: 459px) {
      left: 65%;
      top: 2%;
    }
  }

  .project-codelink-fp2 {
    position: absolute;
    right: -37%;
    top: -2%;
    svg {
      font-size: 6rem;
    }

    @media (max-width: 900px) {
      right: -20%;
      top: 30%;
    }

    @media (max-width: 715px) {
      left: 87%;
      top: 2%;

      svg {
        font-size: 3rem;
      }
    }

    @media (max-width: 459px) {
      left: 80%;
    }
  }

  .project-info-fp3 {
    background-color: #1b1b1b;
    position: absolute;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 2px #ffffff;
    padding: 2rem;
    border: 5px solid #1b1b1b;
    width: 30rem;
    height: auto;
    top: 3%;
    right: 60%;

    h2 {
      font-size: 2rem;
      color: #23d997;
    }
    p {
      padding: 1rem 0;
    }

    img {
      width: 2rem;
      height: 2rem;
      margin: 0.5rem;
    }

    @media (max-width: 1464px) {
      padding: 1rem;
    }

    @media (max-width: 880px) {
      width: 35rem;
      right: auto;
      left: -16%;
      top: auto;
      bottom: -5%;
    }

    @media (max-width: 715px) {
      width: 30rem;
      bottom: 20%;

      h2 {
        font-size: 1.5rem;
      }
      p {
        font-size: 1rem;
        padding: 0.2rem 0;
      }
      img {
        width: 1.2rem;
        height: 1.2rem;
        margin: 0.3rem;
      }
    }

    @media (max-width: 460px) {
      width: 20rem;
      left: -22%;
      h2 {
        margin-right: 5rem;
      }
    }
  }

  .project-demolink-fp3 {
    position: absolute;
    right: -120%;
    top: 6%;
    svg {
      font-size: 6rem;
    }

    @media (max-width: 1250px) {
      right: -25%;
    }

    @media (max-width: 880px) {
      right: -18%;
    }
    @media (max-width: 715px) {
      left: 75%;
      top: 2%;

      svg {
        font-size: 3rem;
      }
    }

    @media (max-width: 460px) {
      top: 5%;
      left: 62%;
    }
  }

  .project-codelink-fp3 {
    position: absolute;
    right: -148%;
    top: 6%;
    svg {
      font-size: 6rem;
    }

    @media (max-width: 1250px) {
      right: -54%;
    }

    @media (max-width: 880px) {
      right: -40%;
    }
    @media (max-width: 715px) {
      left: 87%;
      top: 2%;

      svg {
        font-size: 3rem;
      }
    }

    @media (max-width: 460px) {
      top: 5%;
      left: 79%;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default ProjectSection;
