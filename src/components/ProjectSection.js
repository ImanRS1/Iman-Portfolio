import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  StyledContact,
  StyledContactOptions,
  StyledContactOptionSocial,
  StyledContactOptionNandMCon,
  StyledContactOptionNandM,
  StyledHide,
  StyledSocialsContainer,
} from "../styles";
import { useScroll } from "./useScroll";
import {
  scrollReveal,
  lineAnimSlow,
  titleAnim,
  contactAnim,
  animStagger,
} from "../animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeSquare,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";

const ProjectSection = () => {
  const [element, controls] = useScroll();

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
        <StyledProject>adwadaw</StyledProject>
        <StyledProject />
        <StyledProject />
      </StyledProjectHolder>
    </StyledProjectContainer>
  );
};

const StyledProjectContainer = styled(motion.div)`
  flex-direction: column;
  padding: 5rem 10rem;
  color: white;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
`;

const StyledProjectHolder = styled(motion.div)`
  display: flex;
`;

const StyledProject = styled(motion.div)`
  width: 33%;
  border: 1px solid black;
  height: 65vh;
  background-color: silver;
`;

export default ProjectSection;
