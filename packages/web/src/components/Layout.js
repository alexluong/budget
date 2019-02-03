import React from "react"
import styled from "styled-components"

const Layout = styled.div`
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem;
`

export default ({ children }) => <Layout>{children}</Layout>
