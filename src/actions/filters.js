export const CLEAR_ALL_FILTER = 'CLEAR_ALL_FILTER'
export const ADD_FILTER       = 'ADD_FILTER'
export const REMOVE_FILTER     = 'REMOVE_FILTER'

export function clearAllFilter() {
  return { type: CLEAR_ALL_FILTER };
}

export function addFilter(id) {
  return { type: ADD_FILTER, id };
}

export function removeFilter(id) {
  return { type: REMOVE_FILTER, id };
}
