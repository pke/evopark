import React, { PropTypes } from "react"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addTypeFilter, removeTypeFilter, addGarageFeatureFilter, removeGarageFeatureFilter } from "../actions/filters"
import { setSearch } from "../actions/search"

import * as Colors from "../styles/colors"

import List from "./FilteredList"
import TypeFilter from "../components/TypeFilter"
import SearchInput from "../components/SearchInput"
import GarageFeatureFilter from "../components/GarageFeatureFilter"
import Map from "../components/Map"

import * as CitySelectors from "../selectors/city"

function mapStateToProps(state) {
	var items = []
  if (state.typeFilter.garage) {
    items.push.apply(items, state.garages.map(item => {
      item.type = "garage"
      return item
    }))
  }
  if (state.typeFilter.retailer) {
    items.push.apply(items, state.retailers.map(item => {
      item.type = "retailer"
      return item
    }))
  }
  items.push.apply(items, state.cities.map(item => {
    item.type = "city"
    return item
  }))
  if (state.textFilter) {
    let textFilter = state.textFilter.toLowerCase()
    items = items.filter(item => (
      !item.name || item.name.toLowerCase().indexOf(textFilter) >= 0
    ))
  }
  if (state.garageFeatureFilter) {
    items = items.filter(item => {
      if (item.type !== "garage") {
        return true
      }
      return state.garageFeatureFilter.every(featureName => (
        item.features[featureName]
      ))
    })
  }
  let sortDirAdjust = state.sortDirection === "DESC" ? -1 : 1
  console.info(state.sortDirection)
  items = items.sort((a,b) => ( sortDirAdjust * a.name.localeCompare(b.name) ))
  return {
    items: items,
    typeFilter: state.typeFilter,
    textFilter: state.textFilter,
    garageFeatureFilter: state.garageFeatureFilter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({setSearch, addTypeFilter, removeTypeFilter, addGarageFeatureFilter, removeGarageFeatureFilter}, dispatch)
}

const style = {
  height: "100%",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
}

let Home = ({items, typeFilter, setSearch, addTypeFilter, removeTypeFilter, textFilter, garageFeatureFilter, addGarageFeatureFilter, removeGarageFeatureFilter}) => {
  return <div MapListView style={style}>
		<div sarchAndFilters style={{backgroundColor: Colors.EVOPARK_BLUE_DARKER, height: "3em"}}>
			<SearchInput value={textFilter} onChange={setSearch}/>
	    <TypeFilter filters={typeFilter} addFilter={addTypeFilter} removeFilter={removeTypeFilter}/>
	    <GarageFeatureFilter filters={garageFeatureFilter} addFilter={addGarageFeatureFilter} removeFilter={removeGarageFeatureFilter}/>
			<div style={{height: "12px", borderBottom: "1px solid " + Colors.EVOPARK_BLUE_LIGHTER }}/>
		</div>
		<div style={{display:"flex", alignItems: "stretch"}}>
			<div style={{ width: "40%", padding: "10px", overflowY: "auto" }}>
	      <List items={items} highlight={textFilter}/>
	    </div>
			<div style={{ width: "60%", padding: "10px", marginRight: "20px"}}>
				<Map items={[]}/>
			</div>
		</div>
  </div>
}
Home.displayName = "Home"
Home.propTypes = {
  items: PropTypes.array.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
