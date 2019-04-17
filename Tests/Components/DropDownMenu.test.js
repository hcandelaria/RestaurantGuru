import 'react-native'
import React from 'react'
import DropDownMenu from '../../App/Components/DropDownMenu'
import renderer from 'react-test-renderer'

import cities from '../../App/Fixtures/cities.json'

test('DropDownMenu component renders correctly with cities, selected and onValueChange', () => {
  const tree = renderer.create(
    <DropDownMenu
      selected={0}
      onValueChange={()=>{}}
      cities={cities.location_suggestions}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})