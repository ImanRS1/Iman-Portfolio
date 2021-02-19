import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledAbout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
  }
`;

export const StyledDescription = styled.div`
  flex: 1;
  padding-left: 2rem;
  h2 {
    font-weight: lighter;
  }
  z-index: 2;
`;

export const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 90%;
    height: 80vh;
    object-fit: cover;
  }
  z-index: 2;
`;

export const StyledHide = styled.div`
  overflow: hidden;
`;

export const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledCard = styled.div`
  flex-basis: 20rem;
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
    }
  }
`;

//const StyledAttribute = styled(StyledAbout)``

export const StyledAttribute = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

export const StyledContact = styled(motion.div)`
  min-height: 50vh;
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
`;

export const StyledContactOptions = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 20rem;
  flex-wrap: wrap; 
  margin-bottom: 5rem;
`;

export const StyledContactOptionSocial = styled(motion.div)`
  svg{
    font-size: 10rem;
    padding: 0rem 1rem;
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
  h1{
    padding-left: 1rem;
  }
  padding: 0rem 1rem;
`

export const StyledContactOptionNandM = styled(motion.div)`
  display: flex;
  align-items: center;
`
