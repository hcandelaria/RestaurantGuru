
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  getRestaurantsRequestBySearch: null,
  getRestaurantsRequest: ['payload'],
  getRestaurantsSuccess: ['response'],
  getRestaurantsFailure: ['error'],
  updateSearchQuery: ['payload'],
  updateSearchQueryFailure: ['error']

})

export const RestaurantsTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  restaurants: [],
  fetching: true,
  errorMessage: '',
  error: false,
  searchQuery: ''
})

/* ------------- Reducers ------------- */
export const getRestaurantsRequest = (state, action) => {
  return state.merge({ fetching: true, error: false, errorMessage: ''})
}

export const getRestaurantsSuccess = (state, action) => {
  return state.merge({ fetching: false, error: false, errorMessage: '', restaurants: action.response })
}

export const getRestaurantsFailure = (state, action) => {
  return state.merge({ fetching: false, error: true, errorMessage: action.error })
}

export const updateSearchQuery = (state, action) => {
  return state.merge({ searchQuery: action.payload.searchQuery })
}

export const updateSearchQueryFailure = (state, action) => {
  return state.merge({ error: true, errorMessage: action.error })
}

export const getRestaurantsRequestBySearch = (state, action) => {
  return state.merge({ fetching: true, error: false, errorMessage: ''})
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_RESTAURANTS_REQUEST]: getRestaurantsRequest,
  [Types.GET_RESTAURANTS_SUCCESS]: getRestaurantsSuccess,
  [Types.GET_RESTAURANTS_FAILURE]: getRestaurantsFailure,
  [Types.UPDATE_SEARCH_QUERY]: updateSearchQuery,
  [Types.GET_RESTAURANTS_REQUEST_BY_SEARCH]: getRestaurantsRequestBySearch,
  [Types.UPDATE_SEARCH_QUERY_FAILURE]: updateSearchQueryFailure
})
