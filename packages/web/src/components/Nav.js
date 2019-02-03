import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledNav = styled.div`
  display: flex;
  margin-bottom: 5rem;

  * {
    margin-right: 5rem;
  }
`

function Nav() {
  return (
    <StyledNav>
      <h1>Budget Remindr</h1>

      <Link to="/">Dashboard</Link>
      <Link to="/reminders">Reminders</Link>
      <Link to="/details">Details</Link>
    </StyledNav>
  )
}

export default Nav
