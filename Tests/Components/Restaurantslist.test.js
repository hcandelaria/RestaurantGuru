import 'react-native'
import React from 'react'
import RestaurantsList from '../../App/Components/RestaurantsList'
import renderer from 'react-test-renderer'

import restaurants from '../../App/Fixtures/restaurants.json'

test('RestaurantsList component renders correctly with restaurants and handleOnPress', () => {
  const tree = renderer.create(
    <RestaurantsList
      restaurants={restaurants.restaurants}
      handleOnPress={()=>{}}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})