import React, { PropTypes } from 'react'

let Component = ({active=false,name,disabled,onChange,id}) => (
  <label><input type="checkbox" defaultChecked={active} disabled={disabled} onChange={({target}) => { onChange(id, target.checked)}}/>{name}</label>
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
