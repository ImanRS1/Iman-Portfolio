import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { WorkState } from "../workState";
import { pageAnimation, fade } from "../animation";
import ScrollTop from "../components/ScrollTop";
import mie from "../img/mie.jpg";
import ln from "../img/ln.jpg";
import ttt from "../img/ttt.jpg";
import rmp from "../img/rmp.jpg";
import ip from "../img/ip.jpg";

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
          desc6={work.title === "Front-end Developer" ? WorkDetailDesc() : ""}
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

const WorkDetailDesc = () => {
  return (
    <div>
      <StyledFedDesc>
        <a href="https://imanrs1.github.io/MakeItEasy/">
          <img src={mie} />
        </a>
        <div>
          <h2>Title: MakeItEasy</h2>
          <p>
            Description: This website was created as part of my education at
            Changemaker Educations and is a website of a made believe web
            developer company targeting smaller sized businesses.
          </p>
          <p>
            The website was created using vanilla JS, HTML5 and CSS3 with
            imported fonts.
          </p>
          <p>
            Link:{" "}
            <a href="https://imanrs1.github.io/MakeItEasy/">
              imanrs1.github.io/MakeItEasy
            </a>
          </p>
        </div>
      </StyledFedDesc>
      <StyledFedDesc>
        <a href="https://imanrs1.github.io/Lorem-News/">
          <img src={ln} />
        </a>
        <div>
          <h2 href="">Title: Lorem News</h2>
          <p>
            Description: Lorem News is designed and structured as a news website
            using different layout options and image animations, your best place
            for the latest news in lorem!
          </p>
          <p>The website was created using vanilla JS, HTML5 and CSS3.</p>
          <p>
            Link:{" "}
            <a href="https://imanrs1.github.io/Lorem-News/">
              imanrs1.github.io/Lorem-News
            </a>
          </p>
        </div>
      </StyledFedDesc>
      <StyledFedDesc>
        <a href="https://imanrs1.github.io/TicTacToe/">
          <img src={ttt} />
        </a>
        <div>
          <h2>Title: TicTacToe</h2>
          <p>
            Description: A TicTacToe game with retro neon arcade inspiration,
            demonstrating javascript DOM traversing and stylish CSS.
          </p>
          <p>
            The website was created using vanilla JS, HTML5 and CSS3 with
            imported neon fonts.
          </p>
          <p>
            Link:{" "}
            <a href="https://imanrs1.github.io/TicTacToe/">
              imanrs1.github.io/TicTacToe
            </a>
          </p>
        </div>
      </StyledFedDesc>
      <StyledFedDesc>
        <a href="https://imanrs1.github.io/React-Music-Player/">
          <img src={rmp} />
        </a>
        <div>
          <h2>Title: React Music Player</h2>
          <p>
            Description: An app like music player with minimalistic styling,
            easy to use and easy to like.
          </p>
          <p>
            The website was created using React, JS (ES6), HTML5 and SCSS with
            imported fontawesome icons.
          </p>
          <p>
            Link:{" "}
            <a href="https://imanrs1.github.io/React-Music-Player/">
              imanrs1.github.io/React-Music-Player
            </a>
          </p>
        </div>
      </StyledFedDesc>
      <StyledFedDesc>
        <a href="https://imanrs1.github.io/Iman-Portfolio/">
          <img src={ip} />
        </a>
        <div>
          <h2>Title: Iman Portfolio</h2>
          <p>
            Description: A smooth portfolio website I created to showcase myself
            and my other projects, using carefully selected color themes and
            smooth animations pleasing to the eyes.
          </p>
          <p>
            The website was created using React, JS (ES6), HTML5, SCSS,
            animations with framer motion package, styled components and
            imported fontawesome icons.
          </p>
          <p>
            Link:{" "}
            <a href="https://imanrs1.github.io/Iman-Portfolio/">
              imanrs1.github.io/Iman-Portfolio
            </a>
          </p>
        </div>
      </StyledFedDesc>
    </div>
  );
};

export default WorkDetail;
