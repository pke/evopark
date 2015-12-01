import { combineReducers } from 'redux'
import { typeFilter, garageFeatureFilter } from './filters'
import { textFilter } from "./search"
import { sortDirection } from "./sort"
import { routeReducer } from 'redux-simple-router'

function identity(state = []) {
  return state
}

const rootReducer = combineReducers({
  routing: routeReducer,

  cities: identity,
  garages: identity,
  retailers: identity,
  cityFilter: identity,
  currentParking: identity,
  textFilter,
  sortDirection,
  garageFeatureFilter,
  typeFilter
})

export default rootReducer
