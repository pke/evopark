import React, { PropTypes } from 'react'

let component = ({name,onClick}) => (
  <div style={style}>{name}</div>
)
let style = {
  height: "3em"
}
component.displayName = "ListItem"
component.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node
}
export default component
