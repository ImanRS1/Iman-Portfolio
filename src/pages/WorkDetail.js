import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { WorkState } from "../workState";

const WorkDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [works, setWorks] = useState(WorkState);
  const [work, setWork] = useState({});

  useEffect(() => {
    const currentWork = works.filter((stateWork) => stateWork.url === url);
    setWork(currentWork[0]);
  }, [works, url]);

  return (
    <StyledDetails>
      <StyledHeadLine>
        <h2>{work.title}</h2>
        <img src={work.mainImg} alt="Work picture" />
      </StyledHeadLine>
      <StyledWorkDescription>
        <WorkDescription
          title={work.title}
          description={work.workDescription}
          key={work.title}
        />
      </StyledWorkDescription>
      <StyledImageDisplay>
        <img src={work.secondaryImg} alt="Work picture" />
      </StyledImageDisplay>
    </StyledDetails>
  );
};

const StyledDetails = styled.div`
  color: white;
`;

const StyledHeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyledWorkDescription = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  h3 {
    font-size: 5rem;
  }
  .line {
    width: 100%;
    background-color: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const StyledImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const WorkDescription = ({ title, description }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </div>
  );
};

export default WorkDetail;
