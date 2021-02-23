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
          <h6 style={{ color: "white" }}>Front-end Developer</h6>
        </div>
        <ul>
          <li>
            <Link to="/">1. About Iman</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/" ? "8rem" : "0%" }}
            />
          </li>
          <li>
            <Link to="/workexperiance">2. Work Experiance</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/workexperiance" ? "11rem" : "0%" }}
            />
          </li>
          <li>
            <Link to="/educationandskills">3. Education and Skills</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{
                width: pathname === "/educationandskills" ? "12.5rem" : "0%",
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
  width: 100vw;

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
    justify-content: space-between;
    
    li{
      padding: 0rem 2rem;
    }
    padding: 1rem 1rem;
    min-height: 11vh;
  }

  @media (max-width: 715px) {
    ul{
      display: block;
    }
    li{
      padding: 0.4rem 1.5rem 0.4rem 1rem;
    }
  }

  @media (max-width: 522px) {
    li{
      padding: 0rem 1rem;
    }
  }
`;

const StyledNavContainer = styled.nav`
  min-height: 10vh;
  position: sticky;
  top: 0;
  z-index: 4;
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

const Line = styled(motion.div)`
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
    bottom: -5%;
    left: 1rem;
  }

  @media (max-width: 522px) {
    left: 1rem;
  }
`;

export default Nav;
