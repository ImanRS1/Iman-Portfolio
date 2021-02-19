import React from "react";
import {
  StyledContact,
  StyledContactOptions,
  StyledContactOptionSocial,
  StyledContactOptionNandMCon,
  StyledContactOptionNandM,
  StyledHide,
} from "../styles";
import { useScroll } from "./useScroll";
import {
  scrollReveal,
  lineAnimSlow,
  titleAnim,
  contactAnim,
  contactStagger,
} from "../animation";
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
        <motion.div variants={lineAnimSlow} className="line"></motion.div>
        <p>Let's get in touch!</p>
      </div>
      <StyledContactOptions variants={contactStagger}>
        <StyledHide>
          <StyledContactOptionNandMCon variants={contactAnim}>
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
        </StyledHide>
        <StyledHide>
          <StyledContactOptionSocial variants={titleAnim}>
            <a href="https://se.linkedin.com/in/imanrezasoltani">
              <FontAwesomeIcon icon={faLinkedin} color="#0077B5" />
            </a>
          </StyledContactOptionSocial>
        </StyledHide>
        <StyledHide>
          <StyledContactOptionSocial variants={titleAnim}>
            <a href="https://github.com/ImanRS1">
              <FontAwesomeIcon icon={faGithubSquare} color="#fafafa" />
            </a>
          </StyledContactOptionSocial>
        </StyledHide>
      </StyledContactOptions>
    </StyledContact>
  );
};

export default ContactSection;
