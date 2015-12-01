import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Home from "./Home"
import * as Colors from "../styles/colors"

let style = {
  fontFamily: "OpenSans",
  backgroundColor: Colors.EVOPARK_BLUE,
  color: Colors.EVOPARK_TEXT,
  height: "100vh",
  overflow: "hidden"
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
