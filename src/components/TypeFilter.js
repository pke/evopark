import React, { PropTypes } from 'react'
import TypeFilterItem from './TypeFilterItem'

function onChange(addFilter, removeFilter, id, active) {
  return active ? addFilter(id) : removeFilter(id)
}

let Component = ({filters,addFilter,removeFilter}) => (
  <div>{filters.map(filter => (
    <TypeFilterItem key={filter} id={filter} name={filter} active={filter.active} onChange={onChange.bind(null, addFilter, removeFilter)} />
  ))}
  </div>
)
Component.displayName = "TypeFilter"
const filterShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
})
Component.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  addFilter: PropTypes.func.isRequired,
  removeFilter: PropTypes.func.isRequired
}
export default Component
