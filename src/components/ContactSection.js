import React from "react";
import { StyledContact } from "../styles";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
          <FontAwesomeIcon icon={faLinkedin} color="#0077B5" />
        </h2>
        <p>Lets get in touch!</p>
      </div>
      <div className="contactOptions">
        <div className="contactOption"></div>
      </div>
    </StyledContact>
  );
};

export default ContactSection;
