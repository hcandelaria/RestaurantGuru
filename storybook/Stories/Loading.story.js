import React from 'react'
import { storiesOf } from '@storybook/react-native'

import Loading from '../../App/Components/Loading'

storiesOf('Loading', module)
  .add('Default', () => (
    <Loading />
  ))
