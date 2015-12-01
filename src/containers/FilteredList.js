import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import ListItem from "../components/ListItem"

import Shuffle from "react-shuffle"

let FilteredList = ({items, children, highlight}) => (
  <div>
    <ol>
      <div>{items && items.map(item => (
          <div href={item.id} key={item.id+item.type}><li><ListItem {...item} highlight={highlight} /></li></div>
        ))}
      </div>
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
  items: PropTypes.arrayOf(itemShape).isRequired,
  highlight: PropTypes.string
}
export default FilteredList
