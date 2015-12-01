import React, { PropTypes } from 'react'
import TypeFilterItem from './TypeFilterItem'

function onChange(addFilter, removeFilter, id, active) {
  return active ? addFilter(id) : removeFilter(id)
}

let Component = ({filters,addFilter,removeFilter}) => (
  <span>{Object.keys(filters).map(filter => (
    <TypeFilterItem key={filter} id={filter} name={filter} active={filters[filter]} onChange={onChange.bind(null, addFilter, removeFilter)} />
  ))}
  </span>
)
Component.displayName = "TypeFilter"
const filterShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
})
Component.propTypes = {
  filters: PropTypes.object.isRequired,
  addFilter: PropTypes.func.isRequired,
  removeFilter: PropTypes.func.isRequired
}
export default Component
