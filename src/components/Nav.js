import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNavContainer>
      <StyledNav>
        <h1>
          <Link id="logo" to="/">
            Iman Reza Soltani
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/">1. About Iman</Link>
          </li>
          <li>
            <Link to="/workexperiance">2. Work Experiance</Link>
          </li>
          <li>
            <Link to="/educationandskills">3. Education and Skills</Link>
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
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.8rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;

export default Nav;
