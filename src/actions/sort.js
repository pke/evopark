export const SET_SORT_DIRECTION = "SET_SORT_DIRECTION"

export function setSortDirection(direction) {
  return { id: SET_SORT_DIRECTION, direction: direction.toUpperCase() }
}
