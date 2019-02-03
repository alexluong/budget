import React from "react"
import styled from "styled-components"

const Layout = styled.div`
  background: #eee;
  height: 100%;
  overflow: hidden;

  & > div {
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 5rem;
    overflow-y: scroll;
  }
`

export default ({ children }) => (
  <Layout>
    <div>{children}</div>
  </Layout>
)
