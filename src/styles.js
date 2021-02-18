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
