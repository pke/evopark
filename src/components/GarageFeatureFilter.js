import React, { PropTypes} from "react"
import * as Colors from "../styles/colors"

export const FILTERS = {
  women_places: "Frauen-P",
  handicapped_places: "Behinderten-P",
}

const style = {
  active: {
    background: Colors.EVOPARK_ORANGE,
    color: "white"
  }
}

let GarageFeatureFilter = ({filters, addFilter, removeFilter}) => (
  <span>
    {Object.keys(FILTERS).map(filterName => {
      let active = filters.indexOf(filterName) != -1
      let buttonStyle
      if (active) {
        buttonStyle = style.active
      }
      return <button key={filterName} style={buttonStyle} onClick={({target}) => { active ? removeFilter(filterName) : addFilter(filterName)}}>{FILTERS[filterName]}</button>
    })
    }
  </span>
)
GarageFeatureFilter.displayName = "GarageFeatureFilter"
GarageFeatureFilter.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default GarageFeatureFilter
