import React from "react"
import Layout from "components/Layout"

class ClearPage extends React.Component {
  componentDidMount() {
    localStorage.clear()
    this.props.navigate("/intro")
  }

  render() {
    return (
      <Layout>
        <p>Clearing</p>
      </Layout>
    )
  }
}

export default ClearPage
