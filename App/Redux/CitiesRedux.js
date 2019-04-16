
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  updateCity_id: ['payload'],
  updateCity_idFailure: ['error'],
  getCitiesRequest: ['payload'],
  getCitiesSuccess: ['response'],
  getCitiesFailure: ['error']
})

export const CitiesTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  city_id: 0,
  cities: [],
  error: false,
  errorMessage: ''
})

/* ------------- Reducers ------------- */
export const updateCity_id = (state, action) => {
  return state.merge({ city_id: action.payload.city_id })
}

export const updateCity_idFailure = (state, action) => {
  return state.merge({ error: true, errorMessage: action.error })
}

export const getCitiesRequest = (state, action) => {
  return state.merge({ fetching: true, error: false, errorMessage: ''})
}

export const getCitiesSuccess = (state, action) => {
  return state.merge({ fetching: false, error: false, errorMessage: '', cities: action.response })
}

export const getCitiesFailure = (state, action) => {
  return state.merge({ fetching: false, error: true, errorMessage: action.error })
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_CITY_ID]: updateCity_id,
  [Types.UPDATE_CITY_ID_FAILURE]: updateCity_idFailure,
  [Types.GET_CITIES_REQUEST]: getCitiesRequest,
  [Types.GET_CITIES_SUCCESS]: getCitiesSuccess,
  [Types.GET_CITIES_FAILURE]: getCitiesFailure
})
