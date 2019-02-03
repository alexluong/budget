import React from "react"
import SEO from "./components/SEO"
import BaseStyle from "./components/BaseStyle"

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SEO />
        <BaseStyle />

        {this.props.children}
      </React.Fragment>
    )
  }
}

export default App
