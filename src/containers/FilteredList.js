import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ListItem from "../components/ListItem"
import TypeFilter from "../components/TypeFilter"
import { addFilter, removeFilter } from "../actions/filters"

function mapStateToProps({cities,garages,retailers,types,typeFilter}) {
	var items = []
	if (typeFilter.length == 0 || typeFilter.indexOf("garage") != -1) {
		items.concat(garages.map(item => {
      item.type = "garage"
      return item
    }))
	}
	if (typeFilter.length == 0 || typeFilter.indexOf("retailer") != -1) {
		items.concat(retailers.map(item => {
      item.type = "retailer"
      return item
    }))
	}
	items.concat(cities.map(item => {
		item.type = "city"
		return item
	}))
  return {
		items: items,
		types,
		typeFilter
  };
}

function mapDispatchToProps(dispatch) {
	debugger
	return bindActionCreators({addFilter, removeFilter}, dispatch)
}

let FilteredList = ({items, types, children}) => (
	<div>
		<ol>{items && items.map(item => (
				<li key={item.id+item.type}><ListItem {...item} /></li>
			))
		}
		</ol>
		<TypeFilter filters={types} addFilter={addFilter} removeFilter={removeFilter}/>
	</div>
)
FilteredList.displayName = "FilteredList"
const itemShape = PropTypes.shape({
	id: PropTypes.oneOfType([
				PropTypes.string,
        PropTypes.number]).isRequired,
	name: PropTypes.string.isRequired
})
FilteredList.propTypes = {
	items: PropTypes.arrayOf(itemShape).isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(FilteredList)
