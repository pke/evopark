import React, { PropTypes } from 'react'
import { FILTERS } from "./GarageFeatureFilter"
import { EVOPARK_BLUE_LIGHTER, EVOPARK_BLUE_DARKER } from "../styles/colors"

const GarageListItemStyle = {
  backgroundColor: EVOPARK_BLUE_LIGHTER,
  color: EVOPARK_BLUE_DARKER,
  border:"1px solid " + EVOPARK_BLUE_LIGHTER,
  borderRadius: "4px",
  marginRight: ".5em",
  padding: "3px"
}

import Highlight from 'react-highlighter'

const GarageListItem = ({name, features, highlight}) => (
  <div>
    <p><Highlight search={highlight}>{name}</Highlight></p>
    {Object.keys(features).map(feature => (
      <span key={feature} style={GarageListItemStyle}>{features[feature] === true ? FILTERS[feature][0] : FILTERS[feature][0] + " " + features[feature]}</span>
    ))}
  </div>
)
GarageListItem.displayName = "GarageListItem"

let component = (props) => (
  <div style={Object.assign({}, style.base, style[props.type])}>
    {props.type === "garage" ? <GarageListItem {...props}/> : <Highlight search={props.highlight}>{props.name}</Highlight>}
  </div>
)
let style = {
  base: {
    margin: "10px 0",
    padding: "5px"
  },
  city: {
    color: "black",
    backgroundColor: "yellow"
  },
  garage: {
    color: "white",
    backgroundColor: EVOPARK_BLUE_DARKER
  },
  retailer: {
    color: "black",
    backgroundColor: "darkgray"
  }
}
component.displayName = "ListItem"
component.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  highlight: PropTypes.string,
  children: PropTypes.node
}
export default component
