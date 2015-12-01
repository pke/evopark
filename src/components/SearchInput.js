import React, { PropTypes } from "react"

let SearchInput = ({value, onChange}) => (
  <input type="search" onChange={({target}) => {onChange(target.value)}} value={value} />
)
export default SearchInput
