import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import ListItem from "../components/ListItem"

let FilteredList = ({items, typeFilter, children}) => (
  <div>
    <ol>{items && items.map(item => (
        <a href={item.id} key={item.id+item.type}><li><ListItem {...item} /></li></a>
      ))
    }
    </ol>
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
export default FilteredList
