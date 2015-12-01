import {
  SET_SORT_DIRECTION
} from '../actions/sort';

export function sortDirection(state = "ASC", action) {
  console.info("sortDirection: " + state)
  switch (action.type) {
    case SET_SORT_DIRECTION:
      return action.direction.toUpperCase() || state
    default:
      return state
  }
}
