import {
  CLEAR_ALL_FILTER,
  ADD_FILTER,
  REMOVE_FILTER
} from '../actions/filters';

export function typeFilter(state = [], action) {
  switch (action.type) {
    case ADD_FILTER:
      debugger
      return [...state, action.id]
    case REMOVE_FILTER:
      return state.filter(id => id !== action.id)
    case CLEAR_ALL_FILTER:
      return []
    default:
      return state;
  }
}
