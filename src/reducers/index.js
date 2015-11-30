import { combineReducers } from 'redux'
import { typeFilter } from './filters'

function identity(state = []) {
  return state
}

const rootReducer = combineReducers({
  cities: identity,
  garages: identity,
  retailers: identity,
  types: identity,
  cityFilter: identity,
  typeFilter
})

export default rootReducer
