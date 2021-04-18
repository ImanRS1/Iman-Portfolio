import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import fp1 from "../img/fp1.JPG";
import fp2 from "../img/fp2.JPG";
import fp3 from "../img/fp3.JPG";
import { useScroll } from "./useScroll";
import { scrollReveal, lineAnimSlow, expandProject } from "../animation";
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
          variants={clicked1 ? expandProject : ""}
          initial="hidden"
          animate="show"
        >
          <div className={clicked1 ? "clickedProject" : "nonClickedProject"}>
            {clicked1 ? <div className="project-info"></div> : ""}
            <img src={fp1} />
          </div>
        </StyledProject>
        <StyledProject
          onClick={() => (
            setClicked2(!clicked2), setClicked1(false), setClicked3(false)
          )}
          variants={clicked2 ? expandProject : ""}
          initial="hidden"
          animate="show"
        >
          <div className={clicked2 ? "clickedProject" : "nonClickedProject"}>
            <img src={fp2} />
          </div>
        </StyledProject>
        <StyledProject
          onClick={() => (
            setClicked3(!clicked3), setClicked1(false), setClicked2(false)
          )}
          variants={clicked3 ? expandProject : ""}
          initial="hidden"
          animate="show"
        >
          <div className={clicked3 ? "clickedProject" : "nonClickedProject"}>
            <img src={fp3} />
          </div>
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
`;

const StyledProject = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 33%;
  border: 1px solid black;
  height: 85vh;
  cursor: pointer;
  .nonClickedProject {
    filter: grayscale(80%);
    height: 100%;
    &:hover {
      filter: grayscale(0%);
    }
  }

  .clickedProject {
    filter: grayscale(0%);
    height: 100%;
  }

  /*   .project-info {
    background-color: #1b1b1b;
    position: absolute;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 2px #ffffff;
    padding: 2rem;
    border: 5px solid #1b1b1b;
    width: 40rem;
    height: 40rem;
  } */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default ProjectSection;
