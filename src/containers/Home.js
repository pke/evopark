import React, { PropTypes } from "react"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addFilter, removeFilter } from "../actions/filters"

import FilteredList from "./FilteredList"
import TypeFilter from "../components/TypeFilter"

let Home = ({items, typeFilter, addFilter, removeFilter}) => {
  return <div MapListView>
    <TypeFilter filters={typeFilter} addFilter={addFilter} removeFilter={removeFilter}/>
    <FilteredList items={items}/>
  </div>
}
Home.displayName = "Home"

function mapStateToProps({cities,garages,retailers,typeFilter}) {
	var items = []
  if (typeFilter.garage) {
    items = items.concat(garages.map(item => {
      item.type = "garage"
      return item
    }))
  }
  if (typeFilter.retailer) {
    items = items.concat(retailers.map(item => {
      item.type = "retailer"
      return item
    }))
  }
  items = items.concat(cities.map(item => {
    item.type = "city"
    return item
  }))
  return {
    items: items,
    typeFilter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addFilter, removeFilter}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
