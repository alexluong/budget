import React from "react"
import { TextField, Button } from "ui"
import Layout from "components/Layout"

function IntroPage({ navigate }) {
  return (
    <Layout>
      <div>
        <label>
          Name:
          <br />
          <TextField id="name" />
        </label>
      </div>

      <div>
        <label>
          Phone number:
          <br />
          <TextField id="phone" />
        </label>
      </div>

      <Button
        style={{ marginTop: "2rem" }}
        onClick={() => {
          const name = document.getElementById("name").value
          const phone = `+1${document.getElementById("phone").value}`

          localStorage.setItem("name", name)
          localStorage.setItem("phone", phone)

          navigate("/")
        }}
      >
        Save
      </Button>
    </Layout>
  )
}

export default IntroPage
