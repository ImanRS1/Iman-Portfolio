import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { WorkState } from "../workState";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";
import pr1 from "../img/mie.jpg";
import {
  StyledDetails,
  StyledHeadLine,
  StyledWorkDescription,
  StyledImageDisplay,
  StyledFedDesc,
} from "../styles";

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
          desc6={work.title === "Front-end Developer" ? workDetailDesc() : ""}
        />
      </StyledWorkDescription>
      <StyledImageDisplay>
        <img src={work.secondaryImg} alt="Work picture" />
      </StyledImageDisplay>
      <ScrollTop />
    </StyledDetails>
  );
};

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

const workDetailDesc = () => {
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

export default WorkDetail;
