import 'react-native'
import React from 'react'
import CategoryList from '../../App/Components/CategoryList'
import renderer from 'react-test-renderer'

import categories from '../../App/Fixtures/categories.json'

test('CategoryList component renders correctly with categories and handleOnPress', () => {
  const tree = renderer.create(
    <CategoryList
      categories={categories.categories}
      handleOnPress={()=>{}}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
