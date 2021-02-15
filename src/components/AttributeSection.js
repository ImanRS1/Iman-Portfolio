import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faFileCode } from "@fortawesome/free-solid-svg-icons";
import home1 from "../img/placeholder-img.jpg";
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
  StyledCards,
  StyledCard,
  StyledAttribute,
} from "../styles";
import styled from "styled-components";

const AttributeSection = () => {
  return (
    <StyledAttribute>
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
            <StyledCard></StyledCard>
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
      <StyledImage>
        <img src={home1} alt="Image of code" />
      </StyledImage>
    </StyledAttribute>
  );
};

export default AttributeSection;
