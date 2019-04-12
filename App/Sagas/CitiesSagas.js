import { call, put } from 'redux-saga/effects'
import CitiesActions from '../Redux/CitiesRedux.js'

export function* updateCity_id(action) {
    try{
        if(action.city_id){
            const { city_id } = action.payload;
            console.log( city_id, 'from citysaga' );
            yield put(CitiesActions.updateCity_id(city_id));
        }
    } catch (error){
        yield put(CitiesActions.updateCities_idFailure(error.message))
    } 

}

export function* getCities( api, action ) {
    try {

        const response = yield call(api.getCities, action.payload )
        if (response.ok) {
            const cities = response.data.location_suggestions;
            yield put(CitiesActions.getCitiesSuccess( cities ))
        } else {
            yield put(CitiesActions.getCitiesFailure('Connection problems :('))
        }
    } catch (error) {
        yield put(CitiesActions.getCitiesFailure(error.message))
    }

}