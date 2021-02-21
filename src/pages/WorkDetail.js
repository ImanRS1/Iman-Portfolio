import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { WorkState } from "../workState";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";
import pr1 from "../img/mie.jpg";

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
    <StyledDetails
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <StyledHeadLine>
        <h2>{work.title}</h2>
        <img src={work.mainImg} alt="Work picture" />
      </StyledHeadLine>
      <StyledWorkDescription>
        <WorkDescription
          title={work.title}
          desc1={work.workDescription1}
          desc2={work.workDescription2}
          desc3={work.workDescription3}
          desc4={work.workDescription4}
          desc5={work.workDescription5}
          key={work.title}
          desc6={work.title === "Front-end Developer" ? fedDesc() : ""}
        />
      </StyledWorkDescription>
      <StyledImageDisplay>
        <img src={work.secondaryImg} alt="Work picture" />
      </StyledImageDisplay>
      <ScrollTop />
    </StyledDetails>
  );
};

const StyledDetails = styled(motion.div)`
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
    height: 50vh;
    object-fit: cover;
  }
`;

const StyledWorkDescription = styled.div`
  min-height: 40vh;
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
    padding: 1rem 0rem;
  }
`;

const StyledImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
`;

const WorkDescription = ({
  title,
  desc1,
  desc2,
  desc3,
  desc4,
  desc5,
  desc6,
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{desc1}</p>
      <p>{desc2}</p>
      <p>{desc3}</p>
      <p>{desc4}</p>
      <p>{desc5}</p>
      <div>{desc6}</div>
    </div>
  );
};

const fedDesc = () => {
  return (
    <div>
      <StyledFedDesc>
        <img src={pr1} />
        <div>
          <h2>Title: MakeItEasy</h2>
          <p>
            Description: This website was created as part of my education at
            Changemaker Educations and is a website of a made believe web
            developer company targeting smaller sized businesses.
          </p>
          <p>The website was created using vanilla JS, HTML5 and CSS3.</p>
          <p>
            Link:{" "}
            <a href="https://imanrs1.github.io/MakeItEasy/">
              imanrs1.github.io/MakeItEasy
            </a>
          </p>
        </div>
      </StyledFedDesc>
      <StyledFedDesc>
        <img src={pr1} />
        <div>
          <h2>Title: MakeItEasy</h2>
          <p>
            Description: This website was created as part of my education at
            Changemaker Educations and is a website of a made believe web
            developer company targeting smaller sized businesses.
          </p>
          <p>The website was created using vanilla JS, HTML5 and CSS3.</p>
          <p>
            Link:{" "}
            <a href="https://imanrs1.github.io/MakeItEasy/">
              imanrs1.github.io/MakeItEasy
            </a>
          </p>
        </div>
      </StyledFedDesc>
    </div>
  );
};

const StyledFedDesc = styled.div`
  margin: 2rem 0rem;
  display: flex;
  align-items: center;
  min-height: 25vh;
  background-color: #252525;
  img {
    margin: 1rem;
    border: 5px solid #23d997;
    height: 25vh;
    cursor: pointer;
    filter: brightness(90%);
    &:hover {
      filter: brightness(105%);
    }
  }
  div {
    padding: 1rem;
  }
  h2 {
    font-weight: normal;
    font-size: 30px;
  }
  a {
    text-decoration: none;
    color: white;
    font-size: 1.4rem;
  }
`;

export default WorkDetail;
