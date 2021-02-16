import React from "react";
import home1 from "../img/placeholder-img.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const WorkExperiance = () => {
  return (
    <Works
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "whitesmoke" }}
    >
      <Work>
        <Link to="/work/work1">
          <h2>Second job</h2>
        </Link>
        <div className="line"></div>
        <Link to="/work/work1">
          <img src={home1} alt="Picture of second work experiance" />
        </Link>
      </Work>
      <Work>
        <Link to="/work/work2">
          <h2>First job</h2>
        </Link>
        <div className="line"></div>
        <Link to="/work/work2">
          <img src={home1} alt="Picture of first work experiance" />
        </Link>
      </Work>
    </Works>
  );
};

const Works = styled(motion.div)`
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
