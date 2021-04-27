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
} from "../animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeSquare,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";

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
            <motion.div
              className="project-info"
              variants={fpInfoFade}
              initial="hidden"
              animate="show"
            >
              <h2>Ignite React Redux</h2>
              <p>
                An API connected game library website with a search function.
                Displaying the latest, most popular, and new games using RAWG.io
                database and API.
              </p>
              <p>
                The website was created using React, Redux for state management,
                axios API method, styled SASS components and animations from
                framer motion.
              </p>
            </motion.div>
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

  .project-info {
    background-color: #1b1b1b;
    position: absolute;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 2px #ffffff;
    padding: 2rem;
    border: 5px solid #1b1b1b;
    width: 40rem;
    height: auto;
    top: 3%;
    left: 60%;

    h2 {
      font-size: 2rem;
    }
    p {
      padding: 1rem 0;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default ProjectSection;
