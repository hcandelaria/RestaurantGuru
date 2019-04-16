import React from 'react'
import { storiesOf } from '@storybook/react-native'

import RestaurantsList from '../../App/Components/RestaurantsList'
import restaurants from  '../../App/Fixtures/restaurants.json'

const handleOnPress = () => {
  console.log('storybook testing')
};

storiesOf('RestaurantsList', module)
  .add('Default', () => (
    <RestaurantsList
      restaurants={restaurants.restaurants}
      handleOnPress={handleOnPress}
    />
  ))
