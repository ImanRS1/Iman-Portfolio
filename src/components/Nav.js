import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNavContainer>
      <StyledNav>
        <div>
          <h1>
            <Link id="logo" to="/">
              Iman Reza Soltani
            </Link>
          </h1>
          <h6 style={{ color: "white" }}>Full-stack Developer</h6>
        </div>
        <ul>
          <li>
            <Link to="/">
              <div className="navText"> 1. About Iman</div>
              <Line1
                transition={{ duration: 0.75 }}
                initial={{ width: "0%" }}
                animate={{ width: pathname === "/" ? "8rem" : "0%" }}
              />
            </Link>
          </li>
          <li>
            <Link to="/workexperiance">
              <div className="navText">2. Work Experiance</div>
            </Link>
            <Line2
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{
                width: pathname === "/workexperiance" ? "11rem" : "0%",
              }}
            />
          </li>
          <li>
            <Link to="/educationandskills">
              <div className="navText">Contact</div>
            </Link>
            <Line3
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{
                width: pathname === "/educationandskills" ? "11.5rem" : "0%",
              }}
            />
          </li>
        </ul>
      </StyledNav>
    </StyledNavContainer>
  );
};

const StyledNav = styled.nav`
  position: absolute;
  z-index: 30;
  width: 100%;

  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;

  li {
    padding-left: 10rem;
    position: relative;
  }

  ul {
    display: flex;
    list-style: none;
  }

  @media (max-width: 1173px) {
    li {
      padding: 0rem 2rem;
    }
    padding: 1rem;
    min-height: 11vh;
  }

  @media (max-width: 715px) {
    flex-direction: column;

    ul {
      justify-content: space-around;
      width: 100%;
      padding: 0.5rem;
    }
    li {
      padding: 0;
    }
  }

  @media (max-width: 640px) {
    margin-bottom: 1rem;
  }

  @media (max-width: 550px) {
    .navText {
      font-size: 12px;
    }

    ul {
      justify-content: space-between;
      width: 100%;
    }
  }

  @media (max-width: 374px) {
    padding: 1rem 0rem;
    li {
      padding: 0.3rem;
    }
  }
`;

const StyledNavContainer = styled.nav`
  min-height: 10vh;
  position: sticky;
  top: 0;
  z-index: 99;
  a {
    color: white;
    text-decoration: none;
  }

  #logo {
    font-size: 1.8rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
`;

const Line1 = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0;
  position: absolute;
  bottom: -80%;
  left: 10rem;

  @media (max-width: 1173px) {
    left: 2rem;
  }

  @media (max-width: 715px) {
    bottom: -30%;
    left: 0rem;
  }

  @media (max-width: 550px) {
    left: 0rem;
    max-width: 6.5rem !important;
  }

  @media (max-width: 374px) {
    max-width: 4.5rem !important;
    bottom: -10%;
  }
`;

const Line2 = styled(Line1)`
  @media (max-width: 550px) {
    max-width: 9rem !important;
  }

  @media (max-width: 374px) {
    max-width: 4.5rem !important;
  }
`;

const Line3 = styled(Line1)`
  @media (max-width: 550px) {
    max-width: 9.5rem !important;
  }

  @media (max-width: 374px) {
    max-width: 4.5rem !important;
  }
`;

export default Nav;
