export const CLEAR_TYPE_FILTER   = 'CLEAR_TYPE_FILTER'
export const ADD_TYPE_FILTER     = 'ADD_TYPE_FILTER'
export const REMOVE_TYPE_FILTER  = 'REMOVE_TYPE_FILTER'

export function clearTypeFilter() {
  return { type: CLEAR_TYPE_FILTER }
}

export function addTypeFilter(id) {
  return { type: ADD_TYPE_FILTER, id }
}

export function removeTypeFilter(id) {
  return { type: REMOVE_TYPE_FILTER, id }
}

export const CLEAR_GARAGE_FEATURE_FILTER    = 'CLEAR_GARAGE_FEATURE_FILTER'
export const ADD_GARAGE_FEATURE_TYPE_FILTER = 'ADD_GARAGE_FEATURE_TYPE_FILTER'
export const REMOVE_GARAGE_FEATURE_FILTER   = 'REMOVE_GARAGE_FEATURE_FILTER'

export function clearGarageFeatureFilter() {
  return { type: CLEAR_GARAGE_FEATURE_FILTER }
}

export function addGarageFeatureFilter(id) {
  return { type: ADD_GARAGE_FEATURE_TYPE_FILTER, id }
}

export function removeGarageFeatureFilter(id) {
  return { type: REMOVE_GARAGE_FEATURE_FILTER, id }
}
