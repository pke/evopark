import React, { PropTypes } from 'react'

let Component = ({active=false,name,disabled,onChange,id}) => (
  <label><input type="checkbox" checked={active} disabled={disabled} onClick={(e) => {onChange(id, e.target.checked)}}/>{name}</label>
)
Component.displayName = "TypeFilterItem"
Component.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};
export default Component
