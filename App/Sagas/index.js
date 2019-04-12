import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'


/* ------------- Types ------------- */

import { CategoriesTypes } from '../Redux/CategoriesRedux'
import { RestaurantsTypes } from '../Redux/RestaurantsRedux'
import { CitiesTypes } from '../Redux/CitiesRedux'


/* ------------- Sagas ------------- */

import { getAllCategories } from './CategoriesSagas'
import { updateCategory } from './CategoriesSagas'

import { getRestaurants } from './RestaurantsSagas'
import { updateSearchQuery } from './RestaurantsSagas'
import { watchUpdateSearchQuery } from './RestaurantsSagas'

import { updateCity_id } from './CitiesSagas'
import { getCities } from './CitiesSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create()

/* ------------- Connect Types To Sagas ------------- */
export default function* root () {
  yield all([
    takeLatest(CategoriesTypes.GET_CATEGORIES_REQUEST, getAllCategories, api),
    takeLatest(CategoriesTypes.UPDATE_CATEGORY, updateCategory),

    takeLatest(CitiesTypes.UPDATE_CITY_ID, updateCity_id),
    takeLatest(CitiesTypes.GET_CITIES_REQUEST, getCities, api),

    takeLatest(RestaurantsTypes.UPDATE_SEARCH_QUERY, updateSearchQuery),
    takeLatest(RestaurantsTypes.GET_RESTAURANTS_REQUEST, getRestaurants, api),
    takeLatest(RestaurantsTypes.UPDATE_SEARCH_QUERY, watchUpdateSearchQuery, api),
  ])
}
