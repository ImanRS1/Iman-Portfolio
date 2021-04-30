import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
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
} from "../animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
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
        <h2>
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
                <p>
                  The website was created using React, Redux for state
                  management, axios API method, styled SASS components and
                  animations from framer motion.
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
                </motion.div>
              </motion.div>
              <motion.a
                href="https://imanrs1.github.io/Ignite-React-Redux/"
                target="_blank"
                className="project-demolink-fp1"
                variants={fpLinkFadeDemo}
                initial="hidden"
                animate="show"
              >
                <FontAwesomeIcon icon={faGithub} color="#fafafa" />
              </motion.a>
              <motion.a
                href="https://github.com/ImanRS1/Ignite-React-Redux"
                target="_blank"
                className="project-codelink-fp1"
                variants={fpLinkFadeCode}
                initial="hidden"
                animate="show"
              >
                <FontAwesomeIcon icon={faCode} color="#fafafa" />
              </motion.a>
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
                  interactive chart with hourly forecasts and and conditions.
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
                </motion.div>
              </motion.div>
              {/*  <motion.div
                className="project-info-fp2-2"
                variants={fpInfoFade}
                initial="hidden"
                animate="show"
              >
                <p>
                  The website was created using the rechart npm package for the
                  weather chart, React and Redux for state management, Axios API
                  call methord, styled components, animations from the framer
                  motion package and JSX.
                </p>
              </motion.div> */}
              <motion.a
                href="https://imanrs1.github.io/Nice-Weather-Everyday/"
                target="_blank"
                className="project-demolink-fp2"
                variants={fpLinkFadeDemo}
                initial="hidden"
                animate="show"
              >
                <FontAwesomeIcon icon={faGithub} color="#fafafa" />
              </motion.a>
              <motion.a
                href="https://github.com/ImanRS1/Nice-Weather-Everyday"
                target="_blank"
                className="project-codelink-fp2"
                variants={fpLinkFadeCode}
                initial="hidden"
                animate="show"
              >
                <FontAwesomeIcon icon={faCode} color="#fafafa" />
              </motion.a>
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
              </motion.div>
              <motion.a
                href="https://imanrs1.github.io/React-Music-Player/"
                target="_blank"
                className="project-demolink-fp3"
                variants={fpLinkFadeDemo}
                initial="hidden"
                animate="show"
              >
                <FontAwesomeIcon icon={faGithub} color="#fafafa" />
              </motion.a>
              <motion.a
                href="https://github.com/ImanRS1/React-Music-Player"
                target="_blank"
                className="project-codelink-fp3"
                variants={fpLinkFadeCode}
                initial="hidden"
                animate="show"
              >
                <FontAwesomeIcon icon={faCode} color="#fafafa" />
              </motion.a>
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

  @media (max-width: 1323px) {
    padding: 5rem 1rem 1rem 1rem;
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
    bottom: 20rem;
    width: 29rem;

    h2 {
      font-size: 3rem;
      text-transform: uppercase;
      letter-spacing: 0.5rem;

      /* color: #00000000; */
      color: #7a4477;
      text-shadow: 4px 5px 4px #ababab;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: #23d997;
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
  }

  .project-demolink-fp1 {
    position: absolute;
    left: 35%;
    top: 5%;
    svg {
      font-size: 6rem;
    }
  }

  .project-codelink-fp1 {
    position: absolute;
    left: 46%;
    top: 5%;
    svg {
      font-size: 6rem;
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
      /*   top: -8%;
      margin-left: 5%;
      width: 75rem; */
      padding: 1rem;
    }
  }

  .project-info-fp2-2 {
    background-color: #1b1b1b;
    position: absolute;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 2px #ffffff;
    padding: 2rem;
    border: 5px solid #1b1b1b;
    width: 24rem;
    height: auto;
    top: 6%;
    right: -5%;

    h2 {
      font-size: 2rem;
      color: #23d997;
    }
    p {
      padding: 1rem 0;
    }
  }

  .project-demolink-fp2 {
    position: absolute;
    left: 27%;
    top: 5%;
    svg {
      font-size: 6rem;
    }

    @media (max-width: 1464px) {
      left: 33%;
      top: 5%;
    }

    @media (max-width: 1323px) {
      svg {
        font-size: 3rem;
      }
    }
  }

  .project-codelink-fp2 {
    position: absolute;
    left: 38%;
    top: 5%;
    svg {
      font-size: 6rem;
    }

    @media (max-width: 1464px) {
      left: 46%;
      top: 5%;
    }

    @media (max-width: 1323px) {
      svg {
        font-size: 3rem;
      }
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
  }

  .project-demolink-fp3 {
    position: absolute;
    right: 20%;
    top: 8%;
    svg {
      font-size: 6rem;
    }
  }

  .project-codelink-fp3 {
    position: absolute;
    right: 8%;
    top: 8%;
    svg {
      font-size: 6rem;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default ProjectSection;
