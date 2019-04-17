import 'react-native'
import React from 'react'
import Loading from '../../App/Components/Loading'
import renderer from 'react-test-renderer'

test('Loading component renders correctly', () => {
  const tree = renderer.create(<Loading/>).toJSON()
  expect(tree).toMatchSnapshot()
})
