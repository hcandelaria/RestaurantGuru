import { call, put } from 'redux-saga/effects'
import CategoriesActions from '../Redux/CategoriesRedux.js'

export function* getAllCategories(api) {

    try {
        const response = yield call(api.getCategories)
        if (response.ok) {
            const { categories } = response.data;
            yield put(CategoriesActions.getCategoriesSuccess( categories ))
        } else {
            yield put(CategoriesActions.getCategoriesFailure('Connection problems :('))
        }
    } catch (error) {
        yield put(CategoriesActions.getCategoriesFailure(error.message))
    }

}
export function* updateCategory(action){
    try{
        if(action.category){
            const { category } = action.payload;
            yield put(CategoriesAction.updateCategory(category));
        }
    } catch (error){
        yield put(CategoriesAction.updateCategoryFailure(error.message))
    }
}