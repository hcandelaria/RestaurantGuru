import 'react-native'
import React from 'react'
import ReviewsList from '../../App/Components/ReviewsList'
import renderer from 'react-test-renderer'

import reviews from '../../App/Fixtures/reviews.json'

test('ReviewsList component renders correctly with reviews', () => {
  const tree = renderer.create(
    <ReviewsList
      reviews={reviews.all_reviews}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
