import 'react-native'
import React from 'react'
import BottomNavBar from '../../App/Components/BottomNavBar'
import renderer from 'react-test-renderer'

test('BottomNavBar component renders correctly', () => {
  const tree = renderer.create(<BottomNavBar/>).toJSON()
  expect(tree).toMatchSnapshot()
})
