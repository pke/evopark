import {
  SET_SEARCH
} from '../actions/search';

export function textFilter(state = "", action) {
  switch (action.type) {
    case SET_SEARCH:
      return action.text
    default:
      return state
  }
}
