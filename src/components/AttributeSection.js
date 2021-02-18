import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faFileCode,
  faCogs,
  faStreetView,
} from "@fortawesome/free-solid-svg-icons";
import home1 from "../img/placeholder-img.jpg";
import code1 from "../img/code1.jpg";
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
        <img src={code1} alt="Image of code" />
      </StyledImage>
      <StyledDescription>
        <h2>
          Bullet <span>points</span> about Iman.
        </h2>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <FontAwesomeIcon icon={faPlane} color="#23d997" />
              <h3>International</h3>
            </div>
            <p>International work experience stretching over 17 countries</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <FontAwesomeIcon icon={faFileCode} color="#23d997" />
              <h3>Coding</h3>
            </div>
            <p>Ambitious programmer, always striving to improve</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <FontAwesomeIcon icon={faCogs} color="#23d997" />
              <h3>Engineer</h3>
            </div>
            <p>Experienced engineer, a professional problem solver</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <FontAwesomeIcon icon={faStreetView} color="#23d997" />
              <h3>Data & Location</h3>
            </div>
            <p>Born 1989, residing in Stockholm Sweden</p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
    </StyledAttribute>
  );
};

export default AttributeSection;
