import {
  CLEAR_ALL_FILTER,
  ADD_FILTER,
  REMOVE_FILTER
} from '../actions/filters';

export function typeFilter(state = {}, action) {
  switch (action.type) {
    case ADD_FILTER:
      return Object.assign({}, state, { [action.id]: true})
    case REMOVE_FILTER:
      return Object.assign({}, state, { [action.id]: false})
    case CLEAR_ALL_FILTER:
      var empty = {}
      Object.keys(state).forEach(key => {
        empty[key] = false
      })
      return empty
    default:
      return state;
  }
}
