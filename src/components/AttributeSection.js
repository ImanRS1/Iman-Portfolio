import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faFileCode,
  faCogs,
  faStreetView,
} from "@fortawesome/free-solid-svg-icons";
import code1 from "../img/codex.jpg";
import styled from "styled-components";
import { useScroll } from "./useScroll";
import { scrollReveal, animStagger, attributeAnim } from "../animation";
import {
  StyledDescription,
  StyledSecImage,
  StyledCards,
  StyledCard,
  StyledAttribute,
  StyledHide,
  StyledAttriHeader,
  StyledAttriP
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
      <StyledSecImage>
        <img src={code1} alt="Image of code" />
      </StyledSecImage>
      <StyledDescription>
          <StyledAttriHeader>
          Bullet <span>points</span> about Iman.
          </StyledAttriHeader>
        <StyledCards variants={animStagger}>
          <StyledHide>
            <StyledCard variants={attributeAnim}>
              <div className="icon">
                <FontAwesomeIcon icon={faFileCode} color="#23d997" />
                <h3>Coding</h3>
              </div>
              <StyledAttriP>Ambitious programmer, always striving to improve</StyledAttriP>
            </StyledCard>
          </StyledHide>
          <StyledHide>
            <StyledCard variants={attributeAnim}>
              <div className="icon">
                <FontAwesomeIcon icon={faPlane} color="#23d997" />
                <h3>International</h3>
              </div>
              <StyledAttriP>International work experience stretching over 17 countries</StyledAttriP>
            </StyledCard>
          </StyledHide>

          <StyledHide>
            <StyledCard variants={attributeAnim}>
              <div className="icon">
                <FontAwesomeIcon icon={faCogs} color="#23d997" />
                <h3>Engineer</h3>
              </div>
              <StyledAttriP>Experienced engineer, a professional problem solver</StyledAttriP>
            </StyledCard>
          </StyledHide>
          <StyledHide>
            <StyledCard variants={attributeAnim}>
              <div className="icon">
                <FontAwesomeIcon icon={faStreetView} color="#23d997" />
                <h3>Data & Location</h3>
              </div>
              <StyledAttriP>Born 1989 residing in Stockholm Sweden</StyledAttriP>
            </StyledCard>
          </StyledHide>
        </StyledCards>
      </StyledDescription>
    </StyledAttribute>
  );
};

export default AttributeSection;
