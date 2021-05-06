import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledAbout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 10rem;
  color: white;

  @media (max-width: 1323px) {
    padding: 0rem 1rem;
  }

  @media (max-width: 640px) {
    min-height: 70vh;
    flex-direction: column;
    padding-top: 3rem;
    p {
      padding: 1rem 0rem;
    }

    button {
      margin-bottom: 1rem;
      margin-right: 1rem;
      float: right;
    }

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-height: 600px) {
    min-height: 50vh;
  }

  @media (max-width: 374px) {
    padding-top: 5rem;
  }
`;

export const StyledAttriHeader = styled.div`
  flex: 1;
  padding-left: 2rem;
  z-index: 2;
  font-size: 3rem;
  padding-bottom: 4rem;
  p {
    width: 80%;
  }
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1323px) {
    font-size: 2rem;
    padding: 2rem 1rem 4rem 1rem;
  }
`;

export const StyledDescription = styled.div`
  flex: 1;
  padding-left: 2rem;
  z-index: 2;
  p {
    width: 80%;
  }
  h2 {
    font-weight: lighter;
  }

  @media (max-width: 640px) {
    p {
      width: 100%;
    }
  }

  @media (max-width: 550px) {
    padding-left: 0;

    h2 {
      padding-left: 1rem;
    }
  }
`;

export const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 90%;
    height: 80vh;
    object-fit: cover;
  }
  img:last-child {
    display: none;
  }

  @media (max-width: 640px) {
    img:first-child {
      display: none;
    }
    img:last-child {
      display: block;
      width: 100vw;
      height: 250px;
      object-fit: cover;
      padding: 0;
    }
  }
`;

export const StyledSecImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 90%;
    height: 80vh;
    object-fit: cover;
  }
  z-index: 2;

  @media (max-width: 1323px) {
    display: flex;
    justify-content: center;
    img {
      width: 100%;
      height: 40vh;
    }
  }

  @media (max-width: 710px) {
    img {
      width: 100%;
      height: 25vh;
    }
  }
`;

export const StyledHide = styled.div`
  overflow: hidden;
`;

export const StyledCards = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  overflow-y: hidden;

  @media (max-width: 1323px) {
    justify-content: space-evenly;
  }

  @media (max-width: 455px) {
    padding: 0rem 1rem;
  }
`;

export const StyledAttriP = styled(motion.div)`
  padding: 3rem 0rem;
  color: #ccc;
  line-height: 150%;

  font-size: 1.4rem;

  @media (max-width: 640px) {
    font-size: 1rem;
    line-height: 140%;
    width: 95%;
    padding: 1.5rem 0rem 2rem 0rem;
  }
`;

export const StyledCard = styled(motion.div)`
  width: 20rem;
  padding-left: 2rem;
  .icon {
    display: flex;
    align-items: center;
    svg {
      font-size: 50px;
    }
    h3 {
      margin-left: 1rem;
      background: white;
      padding: 1rem;
      color: black;
      white-space: nowrap;
    }
  }

  @media (max-width: 1323px) {
    width: 25rem;
    margin-right: 8rem;
  }

  @media (max-width: 940px) {
    padding-left: 0;
    margin-right: 0rem;
  }

  @media (max-width: 710px) {
    width: 20rem;
  }

  @media (max-width: 640px) {
    .icon {
      svg {
        font-size: 40px;
      }
      h3 {
        margin-left: 1rem;
        background: white;
        padding: 0.5rem;
      }
    }
  }


  @media (max-width: 581px) {
    width: 15rem;
  }
`;

export const StyledAttribute = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  img {
    overflow: hidden;
  }

  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }

  @media (max-width: 1370px) {
    p {
      width: 90%;
    }
  }

  @media (max-width: 1323px) {
    flex-direction: column-reverse;
    padding: 2.5rem 0rem 0rem 0rem;
    object-fit: cover;
  }

  @media (max-width: 640px) {
    min-height: 70vh;
  }
`;

export const StyledContact = styled(motion.div)`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  padding: 5rem 10rem;
  color: white;
  h2 {
    padding-bottom: 2rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  @media (max-width: 1400px) {
    height: 60rem;
  }
  @media (max-width: 1323px) {
    padding: 5rem 1rem 1rem 1rem;
    height: 80vh;
  }

  @media (max-width: 640px) {
    h2 {
      font-size: 2rem;
    }
    p {
      padding: 0;
    }
  }
`;

export const StyledContactOptions = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 5rem;
  height: 100%;

  @media (max-width: 800px) {
    h1 {
      font-size: 20px;
    }
    flex-direction: column;
    height: 100%;
    padding-top: 1rem;
  }

  @media (max-width: 640px) {
    h1 {
      font-size: 16px;
    }
  }
`;

export const StyledContactOptionSocial = styled(motion.div)`
  svg {
    font-size: 10rem;
    padding: 0rem 1rem;

    @media (max-width: 640px) {
      font-size: 7rem;
    }
  }
`;

export const StyledSocialsContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  min-width: 25%;

  @media (max-width: 800px) {
    width: 28rem;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    width: 0;
  }
`;

export const StyledContactOptionNandMCon = styled(motion.div)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 10rem;
  svg {
    font-size: 5rem;
  }
  h1 {
    padding-left: 1rem;
    font-weight: normal;
  }
  padding: 0rem 1rem;

  @media (max-width: 640px) {
    svg {
      font-size: 3rem;
    }
    justify-content: space-evenly;
    height: 90%;
  }
  @media (max-width: 426px) {
    padding-left: 0;
  }
`;

export const StyledContactOptionNandM = styled(motion.div)`
  a{
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
  }
`;

export const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

export const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

export const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

export const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export const StyledWorks = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem 10rem;
  background-color: whitesmoke;
  h2 {
    padding: 1rem 0rem;
  }

  @media (max-width: 1000px) {
    padding: 1rem;
  }

  @media (max-width: 450px) {
    padding-top: 2rem;
  }

  @media (max-width: 352px) {
    padding-top: 4rem;
  }
`;

export const StyledWork = styled(motion.div)`
  padding-bottom: 5rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 35vh;
    object-fit: cover;
  }
  a {
    text-decoration: none;
    color: black;
  }

  h2 {
    display: flex;
  }

  @media (max-width: 1400px) {
    img {
      height: 40vh;
    }
  }

  @media (max-width: 1250px) {
    h2 {
      font-size: 3rem;
    }
  }

  @media (max-width: 730px) {
    h2 {
      font-size: 2rem;
    }

    img {
      height: 30vh;
    }
  }

  @media (max-width: 500px) {
    padding-bottom: 2rem;
    .line {
      margin-bottom: 1rem;
    }

    h2 {
      font-size: 1rem;
    }

    img {
      height: 20vh;
    }
  }

  @media (max-width: 375px) {
    img {
      height: 15vh;
    }
  }
`;

export const StyledWorkxHeaders = styled(motion.div)`
  display: flex;
  justify-content: space-between;
`;

export const StyledDetails = styled(motion.div)`
  color: white;
  a{
    text-decoration: none;
  }
`;

export const StyledHeadLine = styled.div`
  min-height: 10vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  h2 {
    padding: 2rem;
  }
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }

  @media (max-width: 1020px) {
    h2 {
      font-size: 3rem;
    }
  }

  @media (max-width: 1000px) {
    h2 {
      font-size: 2rem;
    }
    img {
      height: 30vh;
    }
  }

  @media (max-width: 518px) {
    h2 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 350px) and (max-height: 600px) {
    padding-top: 10vh;
  }

  @media (max-width: 290px) and (max-height: 660px) {
    padding-top: 10vh;
  }
`;

export const StyledWorkDescription = styled.div`
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

  @media (max-width: 1056px) {
    margin: 5rem 1rem;

    h3 {
      font-size: 3rem;
    }
  }

  @media (max-width: 518px) {
    h3 {
      font-size: 2rem;
    }
  }
`;

export const StyledImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
`;

export const StyledFedDesc = styled(motion.div)`
  margin: 2rem 0rem;
  display: flex;
  align-items: center;
  min-height: 25vh;
  background-color: #252525;
  transition: all 1s ease;
  &:hover {
    background-color: #333333;
    cursor: pointer;
    img {
      filter: brightness(105%);
    }
  }
  img {
    margin: 1rem;
    border: 5px solid #23d997;
    height: 25vh;
    filter: brightness(90%);
  }
  div {
    padding: 1rem;
  }
  h2 {
    font-weight: normal;
    font-size: 30px;
    color: white;
  }
  a {
    text-decoration: none;
    color: #23d997;
    font-size: 1.4rem;
  }

  @media (max-width: 1000px) {
    h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;

    img {
      height: 20vh;
    }
  }
`;

export const StyledEandSContainer = styled(motion.div)`
  background-color: whitesmoke;
  min-height: 100vh;
  padding: 1rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  h4 {
    font-size: 30px;
  }
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  @media (max-width: 1000px) {
    padding: 1rem;
    h2 {
      font-size: 2rem;
    }
    h4 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 600px) {
    padding-top: 3rem;
  }

  @media (max-width: 350px) {
    padding-top: 4rem;
  }
`;

export const StyledEducationsHolder = styled(motion.div)``;

export const StyledEducation = styled(motion.div)`
  margin: 2rem 0rem;
  display: flex;
  align-items: center;
  min-height: 25vh;
  background-color: #252525;
  transition: all 1s ease;
  &:hover {
    background-color: #333333;
    img {
      filter: brightness(105%);
    }
  }
  img {
    margin: 1rem;
    border: 5px solid #23d997;
    height: 25vh;
    filter: brightness(90%);
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
    color: #23d997;
    font-size: 1.4rem;
  }
  h3 {
    padding-bottom: 1rem;
  }
  p {
    padding: 0;
  }

  @media (max-width: 814px) {
    flex-direction: column;
    text-align: center;
    img {
      height: 15vh;
    }
  }
`;

export const StyledSkillsHolder = styled(motion.div)`
  padding: 2rem 0rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const StyledSkill = styled(motion.div)`
  height: 12rem;
  width: 12rem;
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    color: black;
    padding: 0;
    text-align: center;
  }
  img {
    width: 80%;
    height: 80%;
  }

  @media (max-width: 814px) {
    img {
      width: 60%;
      height: 60%;
    }
  }

  @media (max-width: 660px) {
    height: 8rem;
    width: 8rem;
    margin: 2rem;
  }
`;
