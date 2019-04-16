import React from 'react'
import { storiesOf } from '@storybook/react-native'

import CategoryList from '../../App/Components/CategoryList'
import categories from '../../App/Fixtures/categories.json'

const handleOnPress = () => {
  console.log('storybook testing')
}

storiesOf('CategoryList', module)
  .add('Default', () => (
    <CategoryList
      categories={categories.categories}
      handleOnPress={handleOnPress}
    />
  ))
