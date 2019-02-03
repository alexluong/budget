import React from "react"
import { TextField, Button } from "ui"
import Layout from "components/Layout"

function MockPage() {
  return (
    <Layout>
      <label>
        To:
        <br />
        <TextField />
      </label>

      <br />

      <label>
        Amount:
        <br />
        <TextField />
      </label>

      <br />
      <br />

      <Button type="button" onClick={() => console.log("click")}>
        Mock
      </Button>
    </Layout>
  )
}

export default MockPage
