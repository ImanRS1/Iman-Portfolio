import React from "react";
import home1 from "../img/placeholder-img.jpg";
import styled from "styled-components";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <StyledHide className="StyledHide">
            <h2>lorem 1</h2>
          </StyledHide>
          <StyledHide className="StyledHide">
            <h2>
              lor<span>rem</span> 3
            </h2>
          </StyledHide>
          <StyledHide className="StyledHide">
            <h2>lorem 3</h2>
          </StyledHide>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
          praesentium deserunt amet?
        </p>
        <button>Contact Iman</button>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt="Image of Iman Reza Soltani" />
      </StyledImage>
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 150%;
    height: 80vh;
    object-fit: cover;
  }
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
