import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faFileCode } from "@fortawesome/free-solid-svg-icons";
import home1 from "../img/placeholder-img.jpg";
import styled from "styled-components";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";
import {
  StyledDescription,
  StyledImage,
  StyledCards,
  StyledCard,
  StyledAttribute,
} from "../styles";

const AttributeSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledAttribute
      variants={scrollReveal}
      animate={controls}
      initial={"hidden"}
      ref={element}
    >
      <StyledImage>
        <img src={home1} alt="Image of code" />
      </StyledImage>
      <StyledDescription>
        <h2>
          Lorem <span>ipsum dolor</span> sit amet.
        </h2>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <FontAwesomeIcon icon={faPlane} color="green" />
              <h3>Efficent</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <FontAwesomeIcon icon={faFileCode} color="green" />
              <h3>Efficent</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <FontAwesomeIcon icon={faPlane} color="green" />
              <h3>Efficent</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <FontAwesomeIcon icon={faFileCode} color="green" />
              <h3>Efficent</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
    </StyledAttribute>
  );
};

export default AttributeSection;
