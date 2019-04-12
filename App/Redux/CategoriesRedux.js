    
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
    updateCategory: ['payload'],
    updateCategoryFailure: ['error'],
    getCategoriesRequest: null,
    getCategoriesSuccess: ['response'],
    getCategoriesFailure: ['error']
})

export const CategoriesTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
    category: '',
    categories: [],
    status: '',
    fetching: true,
    errorMessage: '',
    error: false
})

/* ------------- Reducers ------------- */
export const getCategoriesRequest = (state, action) => {
    return state.merge({ fetching: true, error: false, errorMessage: '' })
}

export const getCategoriesSuccess = (state, action) => {
    return state.merge({ fetching: false, error: false, errorMessage: '', categories: action.response })
}

export const getCategoriesFailure = (state, action) => {
    return state.merge({ fetching: false, error: true, errorMessage: action.error })
}
export const updateCategory = (state, action) => {
    return state.merge({ category: action.payload.category })
}

export const updateCategoryFailure = (state, action) => {
    return state.merge({ error: true, errorMessage: action.error })
}
/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_CATEGORIES_REQUEST]: getCategoriesRequest,
    [Types.GET_CATEGORIES_SUCCESS]: getCategoriesSuccess,
    [Types.GET_CATEGORIES_FAILURE]: getCategoriesFailure,
    [Types.UPDATE_CATEGORY]: updateCategory,
    [Types.UPDATE_CATEGORY_FAILURE]: updateCategoryFailure,
})