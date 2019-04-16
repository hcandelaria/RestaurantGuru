import { call, put, throttle, delay, debounce } from 'redux-saga/effects'
import RestaurantsActions from '../Redux/RestaurantsRedux.js'

export function * getRestaurants (api, action) {
  try {
    const { payload } = action
    const response = yield call(api.getRestaurants, payload)
    if (response.ok) {
      const { restaurants } = response.data
      yield put(RestaurantsActions.getRestaurantsSuccess(restaurants))
    } else {
      yield put(RestaurantsActions.getRestaurantsFailure('Connection problems :('))
    }
  } catch (error) {
    yield put(RestaurantsActions.getRestaurantsFailure(error.message))
  }
}

export function * updateSearchQuery (action) {
  try {
    const { searchQuery } = action.payload
    if (searchQuery) {
      yield put(RestaurantsActions.updateSearchQuery(searchQuery))
    }
  } catch (error) {
    yield put(RestaurantsActions.updateSearchQueryFailure(error.message))
  }
}

export function * watchUpdateSearchQuery (api, action) {
  try {
    if (action.payload.length > 1) {
      yield put(RestaurantsActions.getRestaurantsRequestBySearch())
      yield delay(1000)
      const response = yield call(api.getRestaurantsByQuery, payload)
      if (response.ok) {
        const { restaurants } = response.data
        yield put(RestaurantsActions.getRestaurantsSuccess(restaurants))
      } else {
        yield put(RestaurantsActions.getRestaurantsFailure('Connection problems :('))
      }
    }
  } catch (error) {
    yield put(RestaurantsActions.getRestaurantsFailure('Connection problems :('))
  }
}
