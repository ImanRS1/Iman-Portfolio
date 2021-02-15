import React from "react";
import home1 from "../img/placeholder-img.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const WorkExperiance = () => {
  return (
    <Works>
      <Work>
        <h2>Second job</h2>
        <div className="line"></div>
        <Link>
          <img src={home1} alt="Picture of second work experiance" />
        </Link>
      </Work>
      <Work>
        <h2>First job</h2>
        <div className="line"></div>
        <Link>
          <img src={home1} alt="Picture of first work experiance" />
        </Link>
      </Work>
    </Works>
  );
};

const Works = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Work = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default WorkExperiance;
