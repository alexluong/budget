import React from "react"
import { Link, navigate } from "gatsby"
import styled from "styled-components"

const StyledNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5rem;

  & > div {
    display: flex;
    align-items: center;

    * {
      margin-right: 5rem;
    }

    h1 {
      font-size: 3.6rem;
      font-family: "Bungee Shade";
      color: #044e54;
      cursor: pointer;
    }

    a {
      padding: 0.4rem 0.8rem;
      text-decoration: none;
      border-bottom: 1px solid currentColor;
      font-weight: 700;
      transition: all 0.5s ease;

      &,
      &:visited {
        color: #0f609b;
      }

      &:hover {
        background: #0f609b;
        color: #faf9f7;
      }
    }
  }
`

function Nav() {
  return (
    <StyledNav>
      <div>
        <h1 onClick={() => navigate("/")}>Remind</h1>

        <Link to="/">Dashboard</Link>
        <Link to="/reminders">Reminders</Link>
        <Link to="/details">Details</Link>
      </div>

      <div>{localStorage.getItem("name")}</div>
    </StyledNav>
  )
}

export default Nav
