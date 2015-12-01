import {
  CLEAR_TYPE_FILTER,
  ADD_TYPE_FILTER,
  REMOVE_TYPE_FILTER,
  CLEAR_GARAGE_FEATURE_FILTER,
  ADD_GARAGE_FEATURE_TYPE_FILTER,
  REMOVE_GARAGE_FEATURE_FILTER
} from '../actions/filters'

export function typeFilter(state = {}, action) {
  switch (action.type) {
    case ADD_TYPE_FILTER:
      return Object.assign({}, state, { [action.id]: true })
    case REMOVE_TYPE_FILTER:
      return Object.assign({}, state, { [action.id]: false })
    case CLEAR_TYPE_FILTER:
      var empty = {}
      Object.keys(state).forEach(key => {
        empty[key] = false
      })
      return empty
    default:
      return state
  }
}

export function garageFeatureFilter(state = [], action) {
  switch (action.type) {
    case ADD_GARAGE_FEATURE_TYPE_FILTER:
      return [...state, action.id]
    case REMOVE_GARAGE_FEATURE_FILTER:
      return state.filter(id => id !== action.id)
    case CLEAR_GARAGE_FEATURE_FILTER:
      return []
    default:
      return state
  }
}
