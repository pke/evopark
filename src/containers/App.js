import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FilteredList from "./FilteredList"


let App = () => (
  <FilteredList />
)
App.displayName = "App"
export default App
