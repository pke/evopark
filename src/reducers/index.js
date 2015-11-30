import { combineReducers } from 'redux'
import { typeFilter } from './filters'

function identity(state = []) {
  return state
}

const rootReducer = combineReducers({
  cities: identity,
  garages: identity,
  retailers: identity,
  cityFilter: identity,
  currentParking: identity,
  typeFilter
})

export default rootReducer
