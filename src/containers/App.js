import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Home from "./Home"
import DevTools from "./DevTools"
import * as Colors from "../styles/colors"
import injectTapEventPlugin from "react-tap-event-plugin"

injectTapEventPlugin()

let style = {
  fontFamily: "OpenSans",
  backgroundColor: Colors.EVOPARK_BLUE,
  color: Colors.EVOPARK_TEXT,
  height: "100vh",
  overflow: "hidden"
}

let App = ({store}) => (
  <div style={style}>
    <Home>
      <div ContextView>
      </div>
    </Home>
    <DevTools/>
  </div>
)
App.displayName = "App"

export default App
