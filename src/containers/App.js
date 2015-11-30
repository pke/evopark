import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Home from "./Home"

let style = {
  fontFamily: "Tahoma",
  a: {
    textDecoration: "none"
  }
}

let App = () => (
  <div style={style}>
    <Home>
      <div ContextView>
      </div>
    </Home>
  </div>
)
App.displayName = "App"

export default App
