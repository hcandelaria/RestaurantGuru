import React from 'react'
import { storiesOf } from '@storybook/react-native'

import ReviewsList from '../../App/Components/ReviewsList'
import reviews from  '../../App/Fixtures/reviews.json'

storiesOf('ReviewsList', module)
  .add('Default', () => (
    <ReviewsList
      reviews={reviews.all_reviews}
    />
  ))
