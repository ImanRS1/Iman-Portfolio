import React from "react";
import {
  StyledContact,
  StyledContactOptions,
  StyledContactOptionSocial,
  StyledContactOptionNandMCon,
  StyledContactOptionNandM,
} from "../styles";
import { useScroll } from "./useScroll";
import { scrollReveal, lineAnim } from "../animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeSquare,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [element, controls] = useScroll();

  return (
    <StyledContact
      variants={scrollReveal}
      animate={controls}
      initial={"hidden"}
      ref={element}
    >
      <div>
        <h2>
          Contact <span>Iman</span>
        </h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <p>Lets get in touch!</p>
      </div>
      <StyledContactOptions>
        <StyledContactOptionNandMCon>
          <StyledContactOptionNandM>
            <a href="tel:+46736189682">
              <FontAwesomeIcon icon={faPhoneSquareAlt} color="#23d997" />
            </a>
            <h1>+46 73 61 89 682</h1>
          </StyledContactOptionNandM>
          <StyledContactOptionNandM>
            <a href="mailto:iman.rezasoltani@gmail.com">
              <FontAwesomeIcon icon={faEnvelopeSquare} color="#c5352b" />
            </a>
            <h1>iman.rezasoltani@gmail.com</h1>
          </StyledContactOptionNandM>
        </StyledContactOptionNandMCon>
        <StyledContactOptionSocial>
          <a href="https://se.linkedin.com/in/imanrezasoltani">
            <FontAwesomeIcon icon={faLinkedin} color="#0077B5" />
          </a>
        </StyledContactOptionSocial>
        <StyledContactOptionSocial>
          <a href="https://github.com/ImanRS1">
            <FontAwesomeIcon icon={faGithubSquare} color="#fafafa" />
          </a>
        </StyledContactOptionSocial>
      </StyledContactOptions>
    </StyledContact>
  );
};

export default ContactSection;
